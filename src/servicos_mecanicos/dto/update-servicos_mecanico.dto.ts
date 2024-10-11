import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateServicoMecanicoDto } from './create-servicos_mecanico.dto';
import { IsInt, IsOptional } from 'class-validator';
export class UpdateServicoMecanicoDto extends PartialType(
  CreateServicoMecanicoDto,
) {
  @IsInt()
  @IsOptional()
  @ApiProperty()
  servicoId?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  mecanicoId?: number;
}
