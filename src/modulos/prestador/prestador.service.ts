import { Injectable } from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql';
import { CreatePrestadorDTO } from './dto/prestador.dto';

@Injectable()
export class PrestadorService {

    async getPrestadores() {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();
            result.input('Accion', sql.VarChar, 'Listar');
            const resultado = await result.execute('sp_cli_prestadores');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha listado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error);
            return {
                mensaje: 'Error al listar prestadores',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }

    async createPrestador(createPrestadorDTO: CreatePrestadorDTO) {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();

            result.input('TipoDocumento', sql.Int, createPrestadorDTO.TipoDocumento);
            result.input('NIT', sql.VarChar(20), createPrestadorDTO.NIT);
            result.input('DV', sql.VarChar(1), createPrestadorDTO.DV);
            result.input('RazonSocial', sql.VarChar(255), createPrestadorDTO.RazonSocial);
            result.input('Direccion', sql.VarChar(255), createPrestadorDTO.Direccion);
            result.input('Telefono', sql.VarChar(20), createPrestadorDTO.Telefono);
            result.input('CorreoElectronico', sql.VarChar(255), createPrestadorDTO.CorreoElectronico);
            result.input('SectorEconomico', sql.Int, createPrestadorDTO.SectorEconomico);
            result.input('NumeroEmpleados', sql.Int, createPrestadorDTO.NumeroEmpleados);
            result.input('RepresentanteLegal', sql.VarChar(255), createPrestadorDTO.RepresentanteLegal);
            result.input('Regimen', sql.Int, createPrestadorDTO.Regimen);
            result.input('Ciudad', sql.Int, createPrestadorDTO.Ciudad);
            result.input('Especialidad', sql.VarChar(255), createPrestadorDTO.Especialidad);
            result.input('Accion', sql.VarChar(20), 'Guardar');

            let tvp_adjuntos = new sql.Table('PrestadoresAdjuntosTVP');
            tvp_adjuntos.create = false;
            tvp_adjuntos.columns.add('Name', sql.VarChar(sql.MAX));
            tvp_adjuntos.columns.add('Url', sql.VarChar(sql.MAX));
            tvp_adjuntos.columns.add('TipoDocumento', sql.VarChar(255));

            createPrestadorDTO.Adjuntos.forEach((adjunto) => {
                tvp_adjuntos.rows.add(adjunto.name, adjunto.url, adjunto.tipoDocumento);
            });

            result.input('Adjuntos', tvp_adjuntos);

            const resultado = await result.execute('sp_cli_prestadores');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha guardado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error);
            return {
                mensaje: 'Error al crear prestador',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }

    async editPrestador(createPrestadorDTO: CreatePrestadorDTO) {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();

            result.input('PrestadorId', sql.Int, createPrestadorDTO.PrestadorId);
            result.input('TipoDocumento', sql.Int, createPrestadorDTO.TipoDocumento);
            result.input('NIT', sql.VarChar(20), createPrestadorDTO.NIT);
            result.input('DV', sql.VarChar(1), createPrestadorDTO.DV);
            result.input('RazonSocial', sql.VarChar(255), createPrestadorDTO.RazonSocial);
            result.input('Direccion', sql.VarChar(255), createPrestadorDTO.Direccion);
            result.input('Telefono', sql.VarChar(20), createPrestadorDTO.Telefono);
            result.input('CorreoElectronico', sql.VarChar(255), createPrestadorDTO.CorreoElectronico);
            result.input('SectorEconomico', sql.Int, createPrestadorDTO.SectorEconomico);
            result.input('NumeroEmpleados', sql.Int, createPrestadorDTO.NumeroEmpleados);
            result.input('RepresentanteLegal', sql.VarChar(255), createPrestadorDTO.RepresentanteLegal);
            result.input('Regimen', sql.Int, createPrestadorDTO.Regimen);
            result.input('Ciudad', sql.Int, createPrestadorDTO.Ciudad);
            result.input('Especialidad', sql.VarChar(255), createPrestadorDTO.Especialidad);
            result.input('Accion', sql.VarChar(20), 'Editar');

            let tvp_adjuntos = new sql.Table('PrestadoresAdjuntosTVP');
            tvp_adjuntos.create = false;
            tvp_adjuntos.columns.add('Name', sql.VarChar(sql.MAX));
            tvp_adjuntos.columns.add('Url', sql.VarChar(sql.MAX));
            tvp_adjuntos.columns.add('TipoDocumento', sql.VarChar(255));

            createPrestadorDTO.Adjuntos.forEach((adjunto) => {
                tvp_adjuntos.rows.add(adjunto.name, adjunto.url, adjunto.tipoDocumento);
            });

            result.input('Adjuntos', tvp_adjuntos);

            const resultado = await result.execute('sp_cli_prestadores');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha actualizado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error);
            return {
                mensaje: 'Error al editar prestador',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }

    async getPrestadorById(EmpresaId: number) {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();

            result.input('PrestadorId', sql.Int, EmpresaId);
            result.input('Accion', sql.VarChar(50), 'Prestador_By_Id');

            const resultado = await result.execute('sp_cli_prestadores');
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
