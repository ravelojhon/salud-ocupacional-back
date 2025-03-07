import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateOrderDTO {
  @ApiProperty({ description: '' })
  @IsOptional()
  @IsInt()
  aspirantId?: number;

  @ApiProperty({ description: '' })
  @IsOptional()
  @IsInt()
  bussineId?: number;

  @ApiProperty({ description: '' })
  @IsOptional()
  @IsInt()
  servicioId?: number;

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
