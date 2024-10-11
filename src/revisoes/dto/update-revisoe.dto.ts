import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRevisaoDto } from './create-revisoe.dto';
import { IsInt, IsOptional, IsDate } from 'class-validator';
export class UpdateRevisoeDto extends PartialType(CreateRevisaoDto) {}

export class UpdateRevisaoDto {
  @IsInt()
  @IsOptional()
  @ApiProperty()
  veiculoId?: number;

  @IsDate()
  @IsOptional()
  @ApiProperty()
  data?: Date;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  km?: number;

  @IsOptional()
  @ApiProperty()
  observacoes?: string;
}
