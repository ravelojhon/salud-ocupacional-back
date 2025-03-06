import { Injectable } from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql';
import { CreateEmpresaDTO } from './dto/empresas.dto'; // Asegúrate de crear este DTO

@Injectable()
export class EmpresasService {

    async getEmpresas() {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();
            result.input('Accion', sql.VarChar, 'Listar');
            const resultado = await result.execute('sp_cli_empresas');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha listado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error);
            return {
                mensaje: 'Error al listar empresas',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }

    async createEmpresa(createEmpresaDTO: CreateEmpresaDTO) {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();

            result.input('TipoDocumento', sql.Int, createEmpresaDTO.TipoDocumento);
            result.input('NIT', sql.VarChar(20), createEmpresaDTO.NIT);
            result.input('DV', sql.VarChar(20), createEmpresaDTO.DV);
            result.input('RazonSocial', sql.VarChar(255), createEmpresaDTO.RazonSocial);
            result.input('NombreComercial', sql.VarChar(255), createEmpresaDTO.NombreComercial);
            result.input('Direccion', sql.VarChar(255), createEmpresaDTO.Direccion);
            result.input('Telefono', sql.VarChar(20), createEmpresaDTO.Telefono);
            result.input('CorreoElectronico', sql.VarChar(255), createEmpresaDTO.CorreoElectronico);
            result.input('SectorEconomico', sql.Int, createEmpresaDTO.SectorEconomico); // Cambiado a sql.Int
            result.input('NumeroEmpleados', sql.Int, createEmpresaDTO.NumeroEmpleados);
            result.input('RepresentanteLegal', sql.VarChar(255), createEmpresaDTO.RepresentanteLegal);
            result.input('RepresentanteLegalDocumento', sql.VarChar(20), createEmpresaDTO.RepresentanteLegalDocumento);
            result.input('RepresentanteLegalCorreo', sql.VarChar(255), createEmpresaDTO.RepresentanteLegalCorreo);
            result.input('RepresentanteLegalTelefono', sql.VarChar(20), createEmpresaDTO.RepresentanteLegalTelefono);
            result.input('Regimen', sql.Int, createEmpresaDTO.Regimen);
            result.input('Ciudad', sql.Int, createEmpresaDTO.Ciudad); // Agregado el parámetro Ciudad
            result.input('Accion', sql.VarChar(50), 'Crear');

            let tvp_adjuntos = new sql.Table('EmpresasAdjuntosTVP'); // Especifica el nombre de la TVP
            tvp_adjuntos.create = false; // Indica que no se debe crear la tabla
            tvp_adjuntos.columns.add('Name', sql.VarChar(sql.MAX)); // Ajusta el nombre de la columna
            tvp_adjuntos.columns.add('Url', sql.VarChar(sql.MAX)); // Ajusta el nombre de la columna
            tvp_adjuntos.columns.add('TipoDocumento', sql.VarChar(255));

            createEmpresaDTO.Adjuntos.forEach((adjunto) => {
                tvp_adjuntos.rows.add(adjunto.name, adjunto.url, adjunto.tipoDocumento); // Agrega los adjuntos a la TVP
            });

            result.input('Adjuntos', tvp_adjuntos); // Pasa la TVP como parámetro

            const resultado = await result.execute('sp_cli_empresas');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha guardado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error);
            return {
                mensaje: 'Error al crear empresa',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }

    async editEmpresa(createEmpresaDTO: CreateEmpresaDTO) {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();

            result.input('EmpresaId', sql.Int, createEmpresaDTO.EmpresaId);
            result.input('TipoDocumento', sql.Int, createEmpresaDTO.TipoDocumento);
            result.input('NIT', sql.VarChar(20), createEmpresaDTO.NIT);
            result.input('DV', sql.VarChar(20), createEmpresaDTO.DV);
            result.input('RazonSocial', sql.VarChar(255), createEmpresaDTO.RazonSocial);
            result.input('NombreComercial', sql.VarChar(255), createEmpresaDTO.NombreComercial);
            result.input('Direccion', sql.VarChar(255), createEmpresaDTO.Direccion);
            result.input('Telefono', sql.VarChar(20), createEmpresaDTO.Telefono);
            result.input('CorreoElectronico', sql.VarChar(255), createEmpresaDTO.CorreoElectronico);
            result.input('SectorEconomico', sql.Int, createEmpresaDTO.SectorEconomico); // Cambiado a sql.Int
            result.input('NumeroEmpleados', sql.Int, createEmpresaDTO.NumeroEmpleados);
            result.input('RepresentanteLegal', sql.VarChar(255), createEmpresaDTO.RepresentanteLegal);
            result.input('RepresentanteLegalDocumento', sql.VarChar(20), createEmpresaDTO.RepresentanteLegalDocumento);
            result.input('RepresentanteLegalCorreo', sql.VarChar(255), createEmpresaDTO.RepresentanteLegalCorreo);
            result.input('RepresentanteLegalTelefono', sql.VarChar(20), createEmpresaDTO.RepresentanteLegalTelefono);
            result.input('Regimen', sql.Int, createEmpresaDTO.Regimen);
            result.input('Ciudad', sql.Int, createEmpresaDTO.Ciudad); // Agregado el parámetro Ciudad
            result.input('Accion', sql.VarChar(50), 'Editar');

            let tvp_adjuntos = new sql.Table('EmpresasAdjuntosTVP');
            tvp_adjuntos.create = false;
            tvp_adjuntos.columns.add('Name', sql.VarChar(sql.MAX));
            tvp_adjuntos.columns.add('Url', sql.VarChar(sql.MAX));
            tvp_adjuntos.columns.add('TipoDocumento', sql.VarChar(255));

            createEmpresaDTO.Adjuntos.forEach((adjunto) => {
                tvp_adjuntos.rows.add(adjunto.name, adjunto.url, adjunto.tipoDocumento);
            });

            result.input('Adjuntos', tvp_adjuntos);

            const resultado = await result.execute('sp_cli_empresas');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha actualizado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error);
            return {
                mensaje: 'Error al editar empresa',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }

    async calcularDigitoVerificacion(nit: string) {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();

            result.input('NIT', sql.VarChar(20), nit);
            result.input('Accion', sql.VarChar(50), 'Calcular_Digito');

            const resultado = await result.execute('sp_cli_empresas');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha actualizado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error);
            return {
                mensaje: 'Error al editar empresa',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }

    async getCompanyById(EmpresaId: number) {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();

            result.input('EmpresaId', sql.Int, EmpresaId);
            result.input('Accion', sql.VarChar(50), 'Empresa_By_Id');

            const resultado = await result.execute('sp_cli_empresas');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha actualizado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error);
            return {
                mensaje: 'Error al editar empresa',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }
}