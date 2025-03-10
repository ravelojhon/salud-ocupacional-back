import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import conexion from '../../config/database';
import * as sql from 'mssql';

@Injectable()
export class PerfilesService {
  async listar(body: any) {
    try {
      const conn = await conexion.getConnection('contratos');
      const pool = conn;
      const request = pool.request();

      request.input('id', sql.Int, body.id);
      request.input('estado', sql.Bit, body.estado);
      request.input('id_usuario', sql.Int, body.id_usuario);
      request.input('accion', sql.Char(1), body.accion ? body.accion : 'L');

      const result = await request.execute('sp_perfiles');

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

  async guardar(body: any): Promise<any> {
    const conn = await conexion.getConnection('contratos');
    const pool = conn;
    try {
      if (!body || !body.permisos?.length) {
        throw new BadRequestException('Datos inválidos o permisos requeridos');
      }

      const request = pool.request();

      const tableAccionesPermisos = new sql.Table();
      tableAccionesPermisos.columns.add('id_accion_permiso', sql.Int);

      body.permisos.forEach((permiso: any) => {
        permiso.acciones.forEach((accion: any) => {
          tableAccionesPermisos.rows.add(accion.id_accion_permiso);
        });
      });
      console.log('tableAccionesPermisos', tableAccionesPermisos);

      request.input('id', sql.Int, body.id ?? 0);
      request.input('codigo', sql.VarChar(5), body.codigo);
      request.input('nombre', sql.VarChar(50), body.nombre);
      request.input('descripcion', sql.Text, body.descripcion || '');
      request.input('estado', sql.Bit, 1);
      request.input('tableaccionespermisos', sql.TVP, tableAccionesPermisos);
      request.input('accion', sql.Char(1), 'G');

      const result = await request.execute('sp_perfiles');

      return {
        success: true,
        message: 'Perfil guardado correctamente',
        data: {
          affectedRows: result.rowsAffected,
          records: result.recordsets,
        },
        status: 201,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException({
        success: false,
        message: 'Error al guardar el perfil',
        error: error.message,
        status: 500,
      });
    } finally {
      // Cerrar conexión
      if (conn) {
        await conn.close().catch((err) => {
          console.error('Error cerrando conexión:', err);
        });
      }
    }
  }

  async editar(body: any): Promise<any> {
    let conn;
    try {
      // Validación inicial
      if (!body || !body.permisos?.length) {
        throw new BadRequestException('Datos inválidos o permisos requeridos');
      }

      // Obtener conexión
      conn = await conexion.getConnection('contratos');
      const request = conn.request();

      // Crear tabla temporal optimizada
      const tableAccionesPermisos = new sql.Table();
      tableAccionesPermisos.columns.add('id_accion_permiso', sql.Int);

      // Llenado optimizado con forEach
      body.permisos.forEach((permiso: any) => {
        permiso.acciones.forEach((accion: any) => {
          tableAccionesPermisos.rows.add(accion.id_accion_permiso);
        });
      });

      // Inputs con valores por defecto y validación
      request.input('id', sql.Int, body.id ?? 0);
      request.input('codigo', sql.VarChar(5), body.codigo);
      request.input('nombre', sql.VarChar(50), body.nombre);
      request.input('descripcion', sql.Text, body.descripcion || '');
      request.input('estado', sql.Bit, 1);
      request.input('tableaccionespermisos', sql.TVP, tableAccionesPermisos);
      request.input('accion', sql.Char(1), 'A');

      // Ejecutar procedimiento
      const result = await request.execute('sp_perfiles');

      return {
        success: true,
        message: 'Perfil actualizado correctamente',
        data: {
          affectedRows: result.rowsAffected,
          records: result.recordsets,
        },
        status: 200,
      };
    } catch (error) {
      // Manejo específico de errores
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException({
        success: false,
        message: 'Error al actualizar el perfil',
        error: error.message,
        status: 500,
      });
    } finally {
      // Cerrar conexión de forma segura
      if (conn) {
        await conn.close().catch((err) => {
          console.error('Error cerrando conexión:', err);
        });
      }
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

      const result = await request.execute('sp_perfiles');

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

  private validateLength(value: string, maxLength: number): string {
    if (!value) {
      throw new BadRequestException(`El campo es requerido`);
    }
    if (value.length > maxLength) {
      throw new BadRequestException(`El campo excede ${maxLength} caracteres`);
    }
    return value;
  }
}
