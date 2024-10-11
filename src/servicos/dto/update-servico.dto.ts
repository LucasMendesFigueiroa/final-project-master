import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateServicoDto } from './create-servico.dto';
import { IsString, IsInt, IsOptional, IsNumber } from 'class-validator';

export class UpdateServicoDto extends PartialType(CreateServicoDto) {
  @IsInt()
  @IsOptional()
  @ApiProperty()
  revisaoId?: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  descricao?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  custo?: number;
}
