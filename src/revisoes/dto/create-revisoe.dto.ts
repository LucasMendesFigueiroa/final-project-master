import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, IsOptional, IsDate } from 'class-validator';

export class CreateRevisaoDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  veiculoId: number;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  data: Date;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  km: number;

  @IsOptional()
  @ApiProperty()
  observacoes?: string;
}
