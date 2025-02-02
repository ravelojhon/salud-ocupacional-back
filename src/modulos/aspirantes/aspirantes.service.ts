import { Injectable } from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql'; // Importación correcta
import { CreateAspiranteDTO } from './dto/aspirantes.dto';

@Injectable()
export class AspirantesService {


    async getAspirantes() {
        try {
            const conn = await conexion.getConnection('contratos')
            const pool = conn; // El `conn` ya es el pool de conexión.
            const result = await pool.request()  // Crea una solicitud SQL usando el pool
            result.input('Accion', sql.VarChar, 'Listar');
            const resultado = await result.execute('sp_cli_aspirantes');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha listado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error)
        }
    }


    async CreateAspirantes(createAspiranteDTO: CreateAspiranteDTO) {
        try {
            const conn = await conexion.getConnection('contratos')
            const pool = conn; // El `conn` ya es el pool de conexión.
            const result = await pool.request()  // Crea una solicitud SQL usando el pool

            result.input('Nombres', sql.VarChar(255), createAspiranteDTO.Nombres);
            result.input('Apellidos', sql.VarChar(255), createAspiranteDTO.Apellidos);
            result.input('TipoDocumento', sql.VarChar(20), createAspiranteDTO.TipoDocumento);
            result.input('NumeroDocumento', sql.VarChar(20), createAspiranteDTO.NumeroDocumento);
            result.input('FechaNacimiento', sql.Date, createAspiranteDTO.FechaNacimiento);
            result.input('Sexo', sql.VarChar(10), createAspiranteDTO.Sexo);
            result.input('EstadoCivil', sql.VarChar(20), createAspiranteDTO.EstadoCivil || null);
            result.input('GrupoSanguineo', sql.VarChar(10), createAspiranteDTO.GrupoSanguineo || null);
            result.input('Direccion', sql.VarChar(255), createAspiranteDTO.Direccion);
            result.input('Telefono', sql.VarChar(20), createAspiranteDTO.Telefono || null);
            result.input('CorreoElectronico', sql.VarChar(255), createAspiranteDTO.CorreoElectronico || null);
            result.input('NivelEducativo', sql.VarChar(100), createAspiranteDTO.NivelEducativo || null);
            result.input('EmpresaId', sql.Int, createAspiranteDTO.EmpresaId || null);
            result.input('CargoAspirado', sql.VarChar(255), createAspiranteDTO.CargoAspirado || null);
            result.input('Documentos', sql.VarChar(sql.MAX), createAspiranteDTO.Documentos || null);
            result.input('Accion', sql.VarChar(50), 'Crear');

            // Ejecutar el procedimiento almacenado
            const resultado = await result.execute('sp_cli_aspirantes');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha guardado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error)
        }
    }

    async editAspirantes(createAspiranteDTO: CreateAspiranteDTO) {
        try {
            const conn = await conexion.getConnection('contratos')
            const pool = conn; // El `conn` ya es el pool de conexión.
            const result = await pool.request()  // Crea una solicitud SQL usando el pool

            result.input('AspiranteEmpleadoId', sql.Int, createAspiranteDTO.AspiranteEmpleadoId);
            result.input('Nombres', sql.VarChar(255), createAspiranteDTO.Nombres);
            result.input('Apellidos', sql.VarChar(255), createAspiranteDTO.Apellidos);
            result.input('TipoDocumento', sql.VarChar(20), createAspiranteDTO.TipoDocumento);
            result.input('NumeroDocumento', sql.VarChar(20), createAspiranteDTO.NumeroDocumento);
            result.input('FechaNacimiento', sql.Date, createAspiranteDTO.FechaNacimiento);
            result.input('Sexo', sql.VarChar(10), createAspiranteDTO.Sexo);
            result.input('EstadoCivil', sql.VarChar(20), createAspiranteDTO.EstadoCivil || null);
            result.input('GrupoSanguineo', sql.VarChar(10), createAspiranteDTO.GrupoSanguineo || null);
            result.input('Direccion', sql.VarChar(255), createAspiranteDTO.Direccion);
            result.input('Telefono', sql.VarChar(20), createAspiranteDTO.Telefono || null);
            result.input('CorreoElectronico', sql.VarChar(255), createAspiranteDTO.CorreoElectronico || null);
            result.input('NivelEducativo', sql.VarChar(100), createAspiranteDTO.NivelEducativo || null);
            result.input('EmpresaId', sql.Int, createAspiranteDTO.EmpresaId || null);
            result.input('CargoAspirado', sql.VarChar(255), createAspiranteDTO.CargoAspirado || null);
            result.input('Documentos', sql.VarChar(sql.MAX), createAspiranteDTO.Documentos || null);
            result.input('Accion', sql.VarChar(50), 'Editar');

            // Ejecutar el procedimiento almacenado
            const resultado = await result.execute('sp_cli_aspirantes');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha guardado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error)
        }
    }
}
