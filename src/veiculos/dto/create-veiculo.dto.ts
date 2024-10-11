import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateVeiculoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  placa: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  marca: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  modelo: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  ano: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  proprietarioId: number;
}
