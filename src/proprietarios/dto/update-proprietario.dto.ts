import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProprietarioDto } from './create-proprietario.dto';

import { IsString, IsOptional, IsEmail } from 'class-validator';

export class UpdateProprietarioDto extends PartialType(CreateProprietarioDto) {
  @IsString()
  @IsOptional()
  @ApiProperty()
  nome?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  endereco?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  telefone?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty()
  email?: string;
}
