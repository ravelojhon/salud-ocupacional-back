import { Injectable } from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: any) {
    const pool = await conexion.getConnection('contratos');
    try {
      const result = await pool
        .request()
        .input('Email', sql.VarChar(100), loginDto.email)
        .input('Password', sql.VarChar(100), loginDto.password)
        .execute('sp_UserLogin');

      const user = result.recordset[0];
      const payload = { email: user.email, sub: user.id };
      const token = this.jwtService.sign(payload);

      return {
        status: true,
        value: {
          token,
          user,
        },
        msgError: '',
      };
    } catch (err) {
      return {
        status: false,
        value: null,
        message: err.message,
      };
    }
  }
}
