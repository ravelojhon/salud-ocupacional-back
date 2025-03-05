import { Type } from '@nestjs/class-transformer';
import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, MaxLength, MinLength, isString } from "class-validator";

export class HistoriaCliniaDto {
    @ApiProperty({ description: 'ID del aspirante (opcional, se genera automáticamente)' })
    @IsOptional()
    @IsInt()
    id_orden?: number;

    @ApiProperty({ description: 'ID del aspirante (opcional, se genera automáticamente)' })
    @IsOptional()
    @IsInt()
    id_aspirante?: number;

    @ApiProperty({ description: 'ID del aspirante (opcional, se genera automáticamente)' })
    @IsOptional()
    @IsInt()
    id_usuario?: number;

    @ApiProperty({ description: 'Fecha de nacimiento en formato YYYY-MM-DD' })
    @IsNotEmpty()
    @IsString()
    fecha_creacion: string;

    @ApiProperty({ description: 'Nombres del aspirante' })
    @IsNotEmpty()
    @IsString()
    jsonData: string;
}