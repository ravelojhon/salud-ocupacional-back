import { Injectable } from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql'; // Importación correcta

@Injectable()
export class AntecedentesService {

        async getAntecedentes() {
            try {
                const conn = await conexion.getConnection('contratos')
                const pool = conn; // El `conn` ya es el pool de conexión.
                const result = await pool.request()  // Crea una solicitud SQL usando el pool
                result.input('Accion', sql.VarChar, 'ListarAntecedentes');
                const resultado = await result.execute('sp_cli_antecedentes');
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

        async getAntecedentesGineco() {
            try {
                const conn = await conexion.getConnection('contratos')
                const pool = conn; // El `conn` ya es el pool de conexión.
                const result = await pool.request()  // Crea una solicitud SQL usando el pool
                result.input('Accion', sql.VarChar, 'ListarAntecedentesGineco');
                const resultado = await result.execute('sp_cli_antecedentes');
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
