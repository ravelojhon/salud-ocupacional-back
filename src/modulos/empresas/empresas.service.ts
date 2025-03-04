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

            result.input('NIT', sql.VarChar(20), createEmpresaDTO.NIT);
            result.input('RazonSocial', sql.VarChar(255), createEmpresaDTO.RazonSocial);
            result.input('NombreComercial', sql.VarChar(255), createEmpresaDTO.NombreComercial);
            result.input('Direccion', sql.VarChar(255), createEmpresaDTO.Direccion);
            result.input('Telefono', sql.VarChar(20), createEmpresaDTO.Telefono);
            result.input('CorreoElectronico', sql.VarChar(255), createEmpresaDTO.CorreoElectronico);
            result.input('SectorEconomico', sql.VarChar(100), createEmpresaDTO.SectorEconomico);
            result.input('NumeroEmpleados', sql.Int, createEmpresaDTO.NumeroEmpleados);
            result.input('RepresentanteLegal', sql.VarChar(255), createEmpresaDTO.RepresentanteLegal);
            result.input('RepresentanteLegalDocumento', sql.VarChar(20), createEmpresaDTO.RepresentanteLegalDocumento);
            result.input('RepresentanteLegalCorreo', sql.VarChar(255), createEmpresaDTO.RepresentanteLegalCorreo);
            result.input('Contrasena', sql.VarChar(255), createEmpresaDTO.Contrasena);
            result.input('Accion', sql.VarChar(50), 'Crear');

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
            result.input('NIT', sql.VarChar(20), createEmpresaDTO.NIT);
            result.input('RazonSocial', sql.VarChar(255), createEmpresaDTO.RazonSocial);
            result.input('NombreComercial', sql.VarChar(255), createEmpresaDTO.NombreComercial);
            result.input('Direccion', sql.VarChar(255), createEmpresaDTO.Direccion);
            result.input('Telefono', sql.VarChar(20), createEmpresaDTO.Telefono);
            result.input('CorreoElectronico', sql.VarChar(255), createEmpresaDTO.CorreoElectronico);
            result.input('SectorEconomico', sql.VarChar(100), createEmpresaDTO.SectorEconomico);
            result.input('NumeroEmpleados', sql.Int, createEmpresaDTO.NumeroEmpleados);
            result.input('RepresentanteLegal', sql.VarChar(255), createEmpresaDTO.RepresentanteLegal);
            result.input('RepresentanteLegalDocumento', sql.VarChar(20), createEmpresaDTO.RepresentanteLegalDocumento);
            result.input('RepresentanteLegalCorreo', sql.VarChar(255), createEmpresaDTO.RepresentanteLegalCorreo);
            result.input('Contrasena', sql.VarChar(255), createEmpresaDTO.Contrasena);
            result.input('Accion', sql.VarChar(50), 'Editar');

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