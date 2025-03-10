import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';


export class CupsDto {
  @ApiProperty({ description: 'ID del servicio' })
  @IsNotEmpty()
  @IsInt()
  servicioId: number;

  @ApiProperty({ description: 'Código del servicio (CUPS)' })
  @IsNotEmpty()
  @IsString()
  servicioCode: string;
}

export class CreateOrderDTO {

  @ApiProperty({ description: '' })
  @IsOptional()
  @IsInt()
  ordenId?: number;


  @ApiProperty({ description: '' })
  @IsOptional()
  @IsInt()
  aspirantId?: number;

  @ApiProperty({ description: '' })
  @IsOptional()
  @IsInt()
  bussineId?: number;

  @ApiProperty({ description: '' })
  @IsNotEmpty()
  @IsString()
  date: string;

  @ApiProperty({ description: '' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  typeOrder: string;

  @ApiProperty({ description: '' })
  @IsNotEmpty()
  @IsString()
  userId: number;

  @ApiProperty({ description: '' })
  @IsNotEmpty()
  @IsString()
  prestadorId: number;

  // @ApiProperty({isArray : true, type: CupsDto })
  // @IsArray()
  // @ArrayMinSize(1, { message: 'Debe enviar al menos una url de adjunto por empresa' })
  // @Type(() => CupsDto)
	// cups : CupsDto[];

  @ApiProperty({ isArray: true, type: CupsDto, description: 'Lista de CUPS' })
    @IsArray()
    @ArrayMinSize(1, { message: 'Debe enviar al menos un CUPS' })
    @Type(() => CupsDto)
    cups: CupsDto[];
}

export class AprovedOrderDTO {
  @ApiProperty({ description: '' })
  @IsOptional()
  @IsInt()
  ordenId?: number;

  @ApiProperty({ description: '' })
  @IsNotEmpty()
  @IsString()
  userAprovedId: number;
}
