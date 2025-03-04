import { Injectable } from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql';

@Injectable()
export class FactorRiesgoFisicoService {
    async getFactorRiesgoFisico() {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();
            result.input('Accion', sql.VarChar, 'Listar');
            const resultado = await result.execute('sp_factor_riesgo_fisico');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha listado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error);
            return {
                mensaje: 'Error al listar factores de riesgo físico',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }
}
