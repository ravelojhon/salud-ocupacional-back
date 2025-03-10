import { Injectable } from '@nestjs/common';
import conexion from '../../config/database';
import * as sql from 'mssql';

@Injectable()
export class PermisosService {
  async listar(body: any) {
    try {
      const conn = await conexion.getConnection('contratos');
      const pool = conn;
      const request = pool.request();
      request.input('estado', sql.Bit, body.estado);
      request.input('accion', sql.Char(1), 'L');
      const result = await request.execute('sp_permisos');
      return {
        mensaje: 'Procedimiento ejecutado correctamente',
        resultado: result,
        status: 200,
      };
    } catch (err) {
      return {
        mensaje: 'No se pudo ejecutar el procedimiento',
        error: err.message,
        status: 500,
      };
    }
  }

  async guardar(body: any) {
    try {
      const conn = await conexion.getConnection('contratos');
      const pool = conn;
      const request = pool.request();

      const tableacciones = new sql.Table();
      tableacciones.columns.add('codigo', sql.VarChar(50));
      tableacciones.columns.add('nombre', sql.VarChar(50));
      tableacciones.columns.add('tipo', sql.VarChar(50));

      body.acciones.forEach((element: any) => {
        tableacciones.rows.add(element.codigo, element.nombre, element.tipo);
      });

      request.input('id', sql.Int, body.id);
      request.input('nombre', sql.VarChar(50), body.nombre);
      request.input('ruta', sql.VarChar(50), body.ruta);
      request.input('nodos', sql.VarChar(50), body.nodos);
      request.input('icon_nodo', sql.VarChar(50), body.icon_nodo);
      request.input('estado', sql.Bit, body.estado);
      request.input('tableacciones', sql.TVP, tableacciones);
      request.input('accion', sql.Char(1), 'G');

      const result = await request.execute('sp_permisos');

      return {
        mensaje: 'Procedimiento ejecutado correctamente',
        filas: result,
        datos: result.recordsets,
        status: 200,
      };
    } catch (err) {
      return {
        mensaje: 'No se pudo ejecutar el procedimiento',
        error: err.message,
        status: 500,
      };
    }
  }

  async editar(body: any) {
    try {
      const conn = await conexion.getConnection('contratos');
      const pool = conn;
      const request = pool.request();

      const tableacciones = new sql.Table();
      tableacciones.columns.add('codigo', sql.VarChar(50));
      tableacciones.columns.add('nombre', sql.VarChar(50));
      tableacciones.columns.add('tipo', sql.VarChar(50));

      body.acciones.forEach((element: any) => {
        tableacciones.rows.add(element.codigo, element.nombre, element.tipo);
      });

      request.input('id', sql.Int, body.id);
      request.input('nombre', sql.VarChar(50), body.nombre);
      request.input('ruta', sql.VarChar(50), body.ruta);
      request.input('nodos', sql.VarChar(50), body.nodos);
      request.input('icon_nodo', sql.VarChar(50), body.icon_nodo);
      request.input('estado', sql.Bit, body.estado);
      request.input('tableacciones', sql.TVP, tableacciones);
      request.input('accion', sql.Char(1), 'A');

      const result = await request.execute('sp_permisos');

      return {
        mensaje: 'Procedimiento ejecutado correctamente',
        filas: result,
        datos: result.recordsets,
        status: 200,
      };
    } catch (err) {
      return {
        mensaje: 'No se pudo ejecutar el procedimiento',
        error: err.message,
        status: 500,
      };
    }
  }

  async editarMasivo(body: any) {
    try {
      const conn = await conexion.getConnection('contratos');
      const pool = conn;

      const promises = body.data.map(async (element: any) => {
        const request = pool.request();
        request.input('id', sql.Int, element.id);
        request.input('nodos', sql.VarChar(50), element.nodos);
        request.input('accion', sql.Char(3), 'A_N');
        return request.execute('sp_permisos');
      });

      await Promise.all(promises);

      return {
        mensaje: 'Procedimiento ejecutado correctamente',
        status: 200,
      };
    } catch (err) {
      return {
        mensaje: 'No se pudo ejecutar el procedimiento para algunos elementos',
        error: err.message,
        status: 500,
      };
    }
  }

  async estado(body: any) {
    try {
      const conn = await conexion.getConnection('contratos');
      const pool = conn;
      const request = pool.request();

      request.input('id', sql.Int, body.id);
      request.input('estado', sql.Bit, body.estado);
      request.input('accion', sql.Char(1), 'E');

      const result = await request.execute('sp_permisos');

      return {
        mensaje: 'Procedimiento ejecutado correctamente',
        filas: result,
        datos: result.recordsets,
        status: 200,
      };
    } catch (err) {
      return {
        mensaje: 'No se pudo ejecutar el procedimiento',
        error: err.message,
        status: 500,
      };
    }
  }
}
