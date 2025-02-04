import { Injectable } from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql'; // Importación correcta

@Injectable()
export class DiagnosticosService {
    async getDiagnosticos() {
        try {
            const conn = await conexion.getConnection('contratos')
            const pool = conn; // El `conn` ya es el pool de conexión.
            const result = await pool.request()  // Crea una solicitud SQL usando el pool
            result.input('Accion', sql.VarChar, 'ListarDiagnosticos');
            const resultado = await result.execute('sp_cli_diagnosticos');
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

    async getDiagnosticosByName(parametro:string) {
        try {
            const conn = await conexion.getConnection('contratos')
            const pool = conn; // El `conn` ya es el pool de conexión.
            const result = await pool.request()  // Crea una solicitud SQL usando el pool

            result.input('parametro', sql.VarChar, parametro);
            result.input('Accion', sql.VarChar, 'ListarDiagnosticosByCodeName');
            const resultado = await result.execute('sp_cli_diagnosticos');
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
}
