import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: any) {
    const conn = await conexion.getConnection('contratos');
    const pool = conn;

    try {
      const { user, pass } = loginDto;
      const request = pool.request();

      request.input('user', sql.VarChar(50), user);
      request.input('pass', sql.VarChar(50), pass);

      const result = await request.execute('sp_auth');
      const usuario = result.recordset[0];

      if (!usuario) {
        throw new BadRequestException({
          success: false,
          message: 'Credenciales incorrectas',
          status: 401,
        });
      }

      const token = this.jwtService.sign({
        userId: usuario.id,
        user: usuario.user,
      });

      return {
        success: true,
        message: 'Usuario autenticado correctamente',
        data: { token, usuario },
        status: 200,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException({
        success: false,
        message: 'Error en el servidor',
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
}
