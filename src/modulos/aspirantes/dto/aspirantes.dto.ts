import { Type } from '@nestjs/class-transformer';
import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, MaxLength, MinLength, isString } from "class-validator";

export class CreateAspiranteDTO {
    @ApiProperty({ description: 'ID del aspirante (opcional, se genera automáticamente)' })
    @IsOptional()
    @IsInt()
    AspiranteEmpleadoId?: number;

    @ApiProperty({ description: 'Nombres del aspirante' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    Nombres: string;

    @ApiProperty({ description: 'Apellidos del aspirante' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    Apellidos: string;

    @ApiProperty({ description: 'Tipo de documento (CC, TI, CE, etc.)' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    TipoDocumento: string;

    @ApiProperty({ description: 'Número de documento' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    NumeroDocumento: string;

    @ApiProperty({ description: 'Fecha de nacimiento en formato YYYY-MM-DD' })
    @IsNotEmpty()
    @IsString()
    FechaNacimiento: string;

    @ApiProperty({ description: 'Sexo del aspirante (M/F)' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    Sexo: string;

    @ApiProperty({ description: 'Estado civil (Soltero, Casado, etc.)', required: false })
    @IsOptional()
    @IsString()
    @MaxLength(20)
    EstadoCivil?: string;

    @ApiProperty({ description: 'Grupo sanguíneo del aspirante', required: false })
    @IsOptional()
    @IsString()
    @MaxLength(10)
    GrupoSanguineo?: string;

    @ApiProperty({ description: 'Dirección del aspirante' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    Direccion: string;

    @ApiProperty({ description: 'Teléfono del aspirante', required: false })
    @IsOptional()
    @IsString()
    @MaxLength(20)
    Telefono?: string;

    @ApiProperty({ description: 'Correo electrónico del aspirante', required: false })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    CorreoElectronico?: string;

    @ApiProperty({ description: 'Nivel educativo del aspirante', required: false })
    @IsOptional()
    @IsString()
    @MaxLength(100)
    NivelEducativo?: string;

    @ApiProperty({ description: 'ID de la empresa a la que pertenece el aspirante', required: false })
    @IsOptional()
    @IsInt()
    EmpresaId?: number;

    @ApiProperty({ description: 'Cargo al que aspira el candidato', required: false })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    CargoAspirado?: string;

    @ApiProperty({ description: 'Documentos del aspirante en formato string', required: false })
    @IsOptional()
    @IsString()
    Documentos?: string;
}