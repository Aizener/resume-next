import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as qiniu from 'qiniu';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class QiniuService {
  tokenKey: string = 'qiniu_token';

  constructor(
    private readonly configService: ConfigService,
    private readonly redisService: RedisService,
  ) {}

  async uploadFileByBuffer(buffer: Buffer) {
    const config = new qiniu.conf.Config();
    config.regionsProvider = qiniu.httpc.Region.fromRegionId('z2');
    // 是否使用https域名
    // config.useHttpsDomain = true;
    // 上传是否使用cdn加速
    // config.useCdnDomain = true;
    const uploadToken = await this.getConfigAndToken();

    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();
    return new Promise((resolve) => {
      formUploader
        .put(uploadToken, Date.now().toString(), buffer, putExtra)
        .then(({ data, resp }) => {
          if (resp.statusCode === 200) {
            resolve(data);
          } else {
            throw new InternalServerErrorException(resp.statusCode, data);
          }
        })
        .catch((err) => {
          throw new InternalServerErrorException(err.message);
        });
    });
  }

  async getConfigAndToken() {
    const token = await this.redisService.get(this.tokenKey);
    if (token) {
      return token;
    }
    const accessKey = this.configService.getOrThrow<string>('AccessKey');
    const secretKey = this.configService.getOrThrow<string>('SecretKey');
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const expires = 60 * 60 * 2;
    const options = {
      scope: 'cola-resume',
      expires,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);

    const isOk = await this.redisService.setex(
      this.tokenKey,
      expires,
      uploadToken,
    );
    if (!isOk) {
      throw new InternalServerErrorException('redis set token fail.');
    }

    return uploadToken;
  }
}
