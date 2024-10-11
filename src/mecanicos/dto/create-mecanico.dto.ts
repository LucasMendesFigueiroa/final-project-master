import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateMecanicoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  especialidade: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  telefone: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
