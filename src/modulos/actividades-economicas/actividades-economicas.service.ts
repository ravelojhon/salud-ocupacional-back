import { Injectable } from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql'; // Importación correcta
@Injectable()
export class ActividadesEconomicasService {

     async gerActividades() {
        try {
            const conn = await conexion.getConnection('contratos')
            const pool = conn; // El `conn` ya es el pool de conexión.
            const result = await pool.request()  // Crea una solicitud SQL usando el pool
            result.input('Accion', sql.VarChar, 'Listar');
            const resultado = await result.execute('sp_gen_actividades_economicas');
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
