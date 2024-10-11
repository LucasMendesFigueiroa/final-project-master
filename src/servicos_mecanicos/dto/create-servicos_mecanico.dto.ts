import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateServicoMecanicoDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  servicoId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  mecanicoId: number;
}
