import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray } from 'class-validator';

export class CreatePrestadoresAdjuntosDTO {
  @ApiProperty({ description: 'Nombre del archivo adjunto' })
  name: string;

  @ApiProperty({ description: 'URL del archivo adjunto' })
  url: string;

  @ApiProperty({ description: 'Tipo de documento del archivo adjunto' })
  tipoDocumento: string;
}

export class CreatePrestadorDTO {
  @ApiProperty({ description: 'ID del prestador (opcional, solo para editar)' })
  PrestadorId?: number;

  @ApiProperty({ description: 'Tipo de documento del prestador' })
  TipoDocumento: number;

  @ApiProperty({ description: 'Número de identificación tributaria (NIT) del prestador' })
  NIT: string;

  @ApiProperty({ description: 'Dígito de verificación (DV) del NIT del prestador' })
  DV: string;

  @ApiProperty({ description: 'Razón social del prestador' })
  RazonSocial: string;

  @ApiProperty({ description: 'Dirección del prestador' })
  Direccion: string;

  @ApiProperty({ description: 'Teléfono del prestador' })
  Telefono: string;

  @ApiProperty({ description: 'Correo electrónico del prestador' })
  CorreoElectronico: string;

  @ApiProperty({ description: 'Sector económico del prestador' })
  SectorEconomico: number;

  @ApiProperty({ description: 'Número de empleados del prestador' })
  NumeroEmpleados: number;

  @ApiProperty({ description: 'Nombre del representante legal del prestador' })
  RepresentanteLegal: string;

  @ApiProperty({ description: 'Régimen del prestador' })
  Regimen: number;

  @ApiProperty({ description: 'Ciudad del prestador' })
  Ciudad: number;

  @ApiProperty({ description: 'Especialidad del prestador' })
  Especialidad: string;

  @ApiProperty({ isArray: true, type: CreatePrestadoresAdjuntosDTO })
  @IsArray()
  @ArrayMinSize(1, { message: 'Debe enviar al menos una url de adjunto por prestador' })
  @Type(() => CreatePrestadoresAdjuntosDTO)
  Adjuntos: CreatePrestadoresAdjuntosDTO[];
}