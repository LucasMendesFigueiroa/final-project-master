import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateProprietarioDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  endereco: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  telefone: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
