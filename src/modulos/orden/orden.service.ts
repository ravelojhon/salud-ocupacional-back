import { Injectable } from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql'; // Importación correcta
import { CreateOrderDTO } from './dto/orden.dto';

@Injectable()
export class OrdenService {
  async getOrdenes() {
    try {
      const conn = await conexion.getConnection('contratos');
      const pool = conn; // El `conn` ya es el pool de conexión.
      const result = await pool.request(); // Crea una solicitud SQL usando el pool
      result.input('Accion', sql.Char(1), 'L');
      const resultado = await result.execute('sp_cli_order');
      return {
        mensaje: 'Procedimiento ejecutado correctamente',
        descripcion: 'Se ha listado exitosamente',
        resultado: resultado.recordsets,
        status: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async CreateOrden(createOrderDTO: CreateOrderDTO) {
    try {
      const conn = await conexion.getConnection('contratos');
      const pool = conn; // El `conn` ya es el pool de conexión.
      const result = await pool.request(); // Crea una solicitud SQL usando el pool

      result.input('aspirantId', sql.Int, createOrderDTO.aspirantId);
      result.input('bussineId', sql.Int, createOrderDTO.bussineId);
      result.input('servicioId', sql.Int, createOrderDTO.servicioId);
      result.input('date', sql.DateTime, createOrderDTO.date);
      result.input('typeOrder', sql.VarChar(10), createOrderDTO.typeOrder);
      result.input('Accion', sql.Char(1), 'C');

      // Ejecutar el procedimiento almacenado
      const resultado = await result.execute('sp_cli_order');
      return {
        mensaje: 'Procedimiento ejecutado correctamente',
        descripcion: 'Se ha guardado exitosamente',
        resultado: resultado.recordsets,
        status: true,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
