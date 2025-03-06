import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class EducacionDTO {
    @ApiProperty({ description: 'ID del nivel educativo' })
    @IsNotEmpty()
    @IsInt()
    NivelEducativo: number;

    @ApiProperty({ description: 'Institución educativa' })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    Institucion?: string;

    @ApiProperty({ description: 'Título obtenido' })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    Titulo?: string;

    @ApiProperty({ description: 'Fecha de graduación' })
    @IsOptional()
    @IsString()
    Graduacion?: string;
}

class ExperienciaDTO {
    @ApiProperty({ description: 'Nombre de la empresa' })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    Empresa?: string;

    @ApiProperty({ description: 'Cargo desempeñado' })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    Cargo?: string;

    @ApiProperty({ description: 'Fecha de inicio' })
    @IsOptional()
    @IsString()
    FechaInicio?: string;

    @ApiProperty({ description: 'Fecha de fin' })
    @IsOptional()
    @IsString()
    FechaFin?: string;

    @ApiProperty({ description: 'Responsabilidades del cargo' })
    @IsOptional()
    @IsString()
    Responsabilidades?: string;

    @ApiProperty({ description: 'Salario percibido' })
    @IsOptional()
    @IsNumber()
    Salario?: number;
}

export class CreateAspiranteDTO {
    @ApiProperty({ description: 'ID del aspirante (opcional, se genera automáticamente)' })
    @IsOptional()
    @IsInt()
    AspiranteEmpleadoId?: number;

    @ApiProperty({ description: 'Tipo de documento (ID)' })
    @IsNotEmpty()
    @IsInt()
    TipoDocumento: number;

    @ApiProperty({ description: 'Número de documento' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    NumeroDocumento: string;

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

    @ApiProperty({ description: 'Teléfono del aspirante', required: false })
    @IsOptional()
    @IsString()
    @MaxLength(20)
    Telefono?: string;

    @ApiProperty({ description: 'Fecha de nacimiento en formato ISO 8601' })
    @IsNotEmpty()
    @IsString()
    FechaNacimiento: string;

    @ApiProperty({ description: 'Sexo del aspirante (label)' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    Sexo: string;

    @ApiProperty({ description: 'Estado civil (ID)', required: false })
    @IsOptional()
    @IsInt()
    EstadoCivil?: number;

    @ApiProperty({ description: 'Grupo sanguíneo (ID)', required: false })
    @IsOptional()
    @IsInt()
    GrupoSanguineo?: number;

    @ApiProperty({ description: 'Dirección del aspirante' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    Direccion: string;

    @ApiProperty({ description: 'Correo electrónico del aspirante', required: false })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    CorreoElectronico?: string;

    @ApiProperty({ description: 'ID de la empresa a la que pertenece el aspirante', required: false })
    @IsOptional()
    @IsInt()
    EmpresaId?: number;

    @ApiProperty({ description: 'Cargo al que aspira el candidato (ID)', required: false })
    @IsOptional()
    @IsInt()
    CargoAspirado?: number;

    @ApiProperty({ description: 'ID de la actividad económica', required: false })
    @IsOptional()
    @IsInt()
    SectorEconomico?: number;

    @ApiProperty({ description: 'ID del nivel educativo principal', required: false })
    @IsOptional()
    @IsInt()
    NivelEducativoMain?: number;

    @ApiProperty({ description: 'ID de la ciudad', required: false })
    @IsOptional()
    @IsInt()
    Ciudad?: number;

    @ApiProperty({ description: 'ID del horario de trabajo', required: false })
    @IsOptional()
    @IsInt()
    HorarioTrabajo?: number;

    @ApiProperty({ description: 'ID de la EPS', required: false })
    @IsOptional()
    @IsInt()
    Eps?: number;

    @ApiProperty({ description: 'ID de la ARL', required: false })
    @IsOptional()
    @IsInt()
    Arl?: number;

    @ApiProperty({ description: 'ID del fondo de pensiones', required: false })
    @IsOptional()
    @IsInt()
    FondoPension?: number;

    @ApiProperty({ description: 'Remuneración del aspirante', required: false })
    @IsOptional()
    @IsNumber()
    Remuneracion?: number;

    @ApiProperty({ description: 'Nombres de emergencia', required: false })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    NombresEmer?: string;

    @ApiProperty({ description: 'Teléfono de emergencia', required: false })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    TelefonoEmer?: string;

    @ApiProperty({ description: 'Correo de emergencia', required: false })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    CorreoEmer?: string;

    @ApiProperty({ description: 'Datos de educación del aspirante', type: [EducacionDTO] })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => EducacionDTO)
    Educativo?: EducacionDTO[];

    @ApiProperty({ description: 'Datos de experiencia laboral del aspirante', type: [ExperienciaDTO] })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ExperienciaDTO)
    Experiencia?: ExperienciaDTO[];
}