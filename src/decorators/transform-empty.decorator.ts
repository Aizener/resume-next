import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';

export const TransformEmpty = () => {
  return applyDecorators(
    Transform(({ value }: { value: string }) => (value === '' ? null : value)),
  );
};
