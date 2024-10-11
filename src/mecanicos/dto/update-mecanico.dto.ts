import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMecanicoDto } from './create-mecanico.dto';
import { IsString, IsOptional, IsEmail } from 'class-validator';
export class UpdateMecanicoDto extends PartialType(CreateMecanicoDto) {
  @IsString()
  @IsOptional()
  @ApiProperty()
  nome?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  especialidade?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  telefone?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty()
  email?: string;
}
