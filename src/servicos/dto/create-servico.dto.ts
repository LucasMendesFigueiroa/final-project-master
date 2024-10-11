import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsNumber } from 'class-validator';

export class CreateServicoDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  revisaoId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  descricao: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  custo: number;
}
