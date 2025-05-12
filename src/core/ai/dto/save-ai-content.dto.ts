export class SaveAiContentDto {
  desc: string;
  gid: string;
  model: string;
  promptTokens: number;
  completionTokens: number;
  object: string;
  userMessage: string;
}
