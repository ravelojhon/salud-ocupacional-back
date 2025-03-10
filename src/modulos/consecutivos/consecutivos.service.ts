import { Injectable } from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql'; // Importación correcta

@Injectable()
export class ConsecutivosService {
  async listar(body: any) {
    try {
      const conn = await conexion.getConnection('contratos');
      const pool = conn;
      const request = pool.request();

      request.input('codalm', sql.Char(3), body.codalm);
      request.input('nombre', sql.Text, body.nombre);
      request.input('tipo_documento', sql.Char(2), body.tipo_documento);
      request.input('clase', sql.Char(1), body.clase);
      request.input('consecutivo', sql.Int, 0);
      request.input('longitud', sql.Int, body.longitud);
      request.input('accion', sql.Char(1), body.accion);

      const result = await request.execute('sp_consecutivos');

      return {
        mensaje: 'Procedimiento ejecutado correctamente',
        resultado: result.recordset,
        filas: result.recordsets,
        status: 200,
      };
    } catch (err) {
      return {
        mensaje: 'No se pudo ejecutar el procedimiento',
        error: err,
        status: 500,
      };
    }
  }
}
