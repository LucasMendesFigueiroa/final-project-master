import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateVeiculoDto } from './create-veiculo.dto';
import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateVeiculoDto extends PartialType(CreateVeiculoDto) {
  @ApiProperty()
  @IsString()
  @IsOptional()
  marca?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  modelo?: string;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  ano?: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  proprietarioId?: number;
}
