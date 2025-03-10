import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import conexion from '../../config/database';
import * as sql from 'mssql';

@Injectable()
export class UsuariosService {
  async listar(body: any) {
    try {
      const conn = await conexion.getConnection('contratos');
      const pool = conn;
      const request = pool.request();

      request.input('id', sql.Int, body.id);
      request.input('estado', sql.Bit, body.estado);
      request.input('accion', sql.Char(1), 'L');

      const result = await request.execute('sp_usuarios');

      return {
        mensaje: 'Procedimiento ejecutado correctamente',
        filas: result,
        datos: result.recordsets,
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

  async guardar(body: any) {
    const conn = await conexion.getConnection('contratos');
    const pool = conn;
    try {
      const request = pool.request();

      const tablePerfiles = new sql.Table();
      tablePerfiles.columns.add('id_perfil_fk', sql.Int);
      body.perfiles.forEach((element) => {
        tablePerfiles.rows.add(element.id_perfil_fk);
      });

      request.input('id', sql.Int, body.id);
      request.input('documento', sql.Int, body.documento);
      request.input('primer_nombre', sql.VarChar(50), body.primer_nombre);
      request.input('segundo_nombre', sql.VarChar(50), body.segundo_nombre);
      request.input('primer_apellido', sql.VarChar(50), body.primer_apellido);
      request.input('segundo_apellido', sql.VarChar(50), body.segundo_apellido);
      request.input('telefono', sql.Int, body.telefono);
      request.input('correo', sql.VarChar(30), body.email);
      request.input('usuario', sql.VarChar(30), body.usuario);
      request.input('password', sql.VarChar(50), body.password);
      request.input('tableperfiles', sql.TVP, tablePerfiles);
      request.input('prestador', sql.Int, body.prestador);
      request.input('estado', sql.Bit, body.estado);
      request.input('accion', sql.Char(1), 'G');

      const result = await request.execute('sp_usuarios');
      return {
        success: true,
        message: 'Usuario guardado correctamente',
        data: result.recordsets,
        status: 201,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException({
        success: false,
        message: 'Error al guardar el Usuario',
        error: error.message,
        status: 500,
      });
    } finally {
      if (conn) {
        await conn.close().catch((err) => {
          console.error('Error cerrando conexión:', err);
        });
      }
    }
  }

  async editar(body: any) {
    const conn = await conexion.getConnection('contratos');
    const pool = conn;
    try {
      const request = pool.request();

      const tablePerfiles = new sql.Table();
      tablePerfiles.columns.add('id_perfil_fk', sql.Int);
      body.perfiles.forEach((element) => {
        tablePerfiles.rows.add(element.id_perfil_fk);
      });

      request.input('id', sql.Int, body.id);
      request.input('documento', sql.Int, body.documento);
      request.input('primer_nombre', sql.VarChar(50), body.primer_nombre);
      request.input('segundo_nombre', sql.VarChar(50), body.segundo_nombre);
      request.input('primer_apellido', sql.VarChar(50), body.primer_apellido);
      request.input('segundo_apellido', sql.VarChar(50), body.segundo_apellido);
      request.input('telefono', sql.Int, body.telefono);
      request.input('correo', sql.VarChar(30), body.email);
      request.input('usuario', sql.VarChar(30), body.usuario);
      request.input('password', sql.VarChar(50), body.password);
      request.input('tableperfiles', sql.TVP, tablePerfiles);
      request.input('prestador', sql.Int, body.prestador);
      request.input('estado', sql.Bit, body.estado);
      request.input('accion', sql.Char(1), 'A');

      const result = await request.execute('sp_usuarios');
      return {
        success: true,
        message: 'Usuario editado correctamente',
        data: result.recordsets,
        status: 201,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException({
        success: false,
        message: 'Error al guardar el Usuario',
        error: error.message,
        status: 500,
      });
    } finally {
      if (conn) {
        await conn.close().catch((err) => {
          console.error('Error cerrando conexión:', err);
        });
      }
    }
  }

  async estado(body: any) {
    try {
      const conn = await conexion.getConnection('usuarios');
      const pool = conn;
      const request = pool.request();

      request.input('id', sql.Int, body.id);
      request.input('estado', sql.Bit, body.estado);
      request.input('accion', sql.Char(1), 'E');

      const result = await request.execute('sp_usuarios');

      return {
        mensaje: 'Procedimiento ejecutado correctamente',
        resultado: result.recordsets,
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
