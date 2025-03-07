import { Injectable } from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql'; // Importación correcta
import { CreateOrderDTO } from './dto/orden.dto';
import { EmailService } from '../email/email.service';
import { SendOrdenToCompanyDto } from '../email/dto/sendOrdenToCompany.dto';

@Injectable()
export class OrdenService {
  constructor(private readonly emailService: EmailService) { }
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
      result.input('userId', sql.Int, createOrderDTO.userId);
      result.input('prestadorId', sql.Int, createOrderDTO.prestadorId);
      result.input('Accion', sql.Char(1), 'C');

      // Ejecutar el procedimiento almacenado
      const resultado = await result.execute('sp_cli_order');
      console.log(resultado?.recordsets[0])
      const dataForEmail = resultado?.recordsets[0][0];
      if (resultado.returnValue === 0) { // Verifica si el procedimiento se ejecutó correctamente
        // Envía el correo electrónico
        const sendOrdenToCompanyDto: SendOrdenToCompanyDto = {
          NombreUsuarioAsigna: dataForEmail.NombreUsuarioAsigna,
          NombreResponsable: dataForEmail.NombreResponsable,
          Url: `${process.env.URL_APP_PRODUCTION}/admin/expedition-order`,
          Email: dataForEmail.EmailEmpresaResponsable
        };
        await this.emailService.sendMailToOrden(sendOrdenToCompanyDto);

        return {
            mensaje: 'Procedimiento ejecutado correctamente',
            descripcion: 'Se ha guardado exitosamente',
            resultado: resultado.recordsets,
            status: true,
        };
    } else {
        // Manejar el error del procedimiento almacenado
        return {
            mensaje: 'Error al ejecutar el procedimiento',
            descripcion: 'No se pudo guardar la orden',
            resultado: resultado.recordsets,
            status: false,
        };
    }

      // return {
      //   mensaje: 'Procedimiento ejecutado correctamente',
      //   descripcion: 'Se ha guardado exitosamente',
      //   resultado: resultado.recordsets,
      //   status: true,
      // };
    } catch (error) {
      console.log(error);
    }
  }
}
