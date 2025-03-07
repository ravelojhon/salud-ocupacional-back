import { Injectable } from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql';

@Injectable()
export class ServicioService {

    async getServicios() {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();
            result.input('Accion', sql.VarChar, 'Listar');
            const resultado = await result.execute('sp_gen_servicios');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha listado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            return {
                mensaje: 'Error al listar',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }
}
