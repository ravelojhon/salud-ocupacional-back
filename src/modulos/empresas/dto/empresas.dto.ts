import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray } from 'class-validator';

export class CreateEmpresasAdjuntosDTO {
  @ApiProperty({ description: 'Nombre del archivo adjunto' })
  name: string;

  @ApiProperty({ description: 'URL del archivo adjunto' })
  url: string;

  @ApiProperty({ description: 'Tipo de documento del archivo adjunto' })
  tipoDocumento: string; // Agregada la propiedad tipoDocumento
}

export class CreateEmpresaDTO {
  @ApiProperty({ description: 'ID de la empresa (opcional, solo para editar)' })
  EmpresaId?: number;

  @ApiProperty({ description: 'Tipo de documento de la empresa' })
  TipoDocumento: number;

  @ApiProperty({ description: 'Número de identificación tributaria (NIT) de la empresa' })
  NIT: string;

  @ApiProperty({ description: 'Número de identificación tributaria (NIT) de la empresa' })
  DV: string;

  @ApiProperty({ description: 'Razón social de la empresa' })
  RazonSocial: string;

  @ApiProperty({ description: 'Nombre comercial de la empresa' })
  NombreComercial: string;

  @ApiProperty({ description: 'Dirección de la empresa' })
  Direccion: string;

  @ApiProperty({ description: 'Teléfono de la empresa' })
  Telefono: string;

  @ApiProperty({ description: 'Correo electrónico de la empresa' })
  CorreoElectronico: string;

  @ApiProperty({ description: 'Sector económico de la empresa' })
  SectorEconomico: number;

  @ApiProperty({ description: 'Número de empleados de la empresa' })
  NumeroEmpleados: number;

  @ApiProperty({ description: 'Nombre del representante legal de la empresa' })
  RepresentanteLegal: string;

  @ApiProperty({ description: 'Documento del representante legal de la empresa' })
  RepresentanteLegalDocumento: string;

  @ApiProperty({ description: 'Correo electrónico del representante legal de la empresa' })
  RepresentanteLegalCorreo: string;

  @ApiProperty({ description: 'Teléfono del representante legal de la empresa' })
  RepresentanteLegalTelefono: string;

  @ApiProperty({ description: 'Régimen de la empresa' })
  Regimen: number;

  @ApiProperty({ description: 'Ciudad de la empresa' })
  Ciudad: number;


  @ApiProperty({ isArray: true, type: CreateEmpresasAdjuntosDTO })
  @IsArray()
  @ArrayMinSize(1, { message: 'Debe enviar al menos una url de adjunto por empresa' })
  @Type(() => CreateEmpresasAdjuntosDTO)
  Adjuntos: CreateEmpresasAdjuntosDTO[];
}