import { Injectable } from '@nestjs/common';
import conexion from './../../config/database';
import * as sql from 'mssql';
import { CreateAspiranteDTO } from './dto/aspirantes.dto';

@Injectable()
export class AspirantesService {
    async getAspirantes() {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();
            result.input('Accion', sql.VarChar, 'Listar');
            const resultado = await result.execute('sp_cli_aspirantes');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha listado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error);
            return {
                mensaje: 'Error al listar aspirantes',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }

    async createAspirante(createAspiranteDTO: CreateAspiranteDTO) {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();

            result.input('TipoDocumento', sql.Int, createAspiranteDTO.TipoDocumento);
            result.input('NumeroDocumento', sql.VarChar(20), createAspiranteDTO.NumeroDocumento);
            result.input('Nombres', sql.VarChar(255), createAspiranteDTO.Nombres);
            result.input('Apellidos', sql.VarChar(255), createAspiranteDTO.Apellidos);
            result.input('Telefono', sql.VarChar(20), createAspiranteDTO.Telefono || null);
            result.input('FechaNacimiento', sql.DateTime, createAspiranteDTO.FechaNacimiento);
            result.input('Sexo', sql.VarChar(10), createAspiranteDTO.Sexo);
            result.input('EstadoCivil', sql.Int, createAspiranteDTO.EstadoCivil || null);
            result.input('GrupoSanguineo', sql.Int, createAspiranteDTO.GrupoSanguineo || null);
            result.input('Direccion', sql.VarChar(255), createAspiranteDTO.Direccion);
            result.input('CorreoElectronico', sql.VarChar(255), createAspiranteDTO.CorreoElectronico || null);
            result.input('EmpresaId', sql.Int, createAspiranteDTO.EmpresaId || null);
            result.input('CargoAspirado', sql.Int, createAspiranteDTO.CargoAspirado || null);
            result.input('SectorEconomico', sql.Int, createAspiranteDTO.SectorEconomico || null);
            result.input('NivelEducativoMain', sql.Int, createAspiranteDTO.NivelEducativoMain || null);
            result.input('Ciudad', sql.Int, createAspiranteDTO.Ciudad || null);
            result.input('HorarioTrabajo', sql.Int, createAspiranteDTO.HorarioTrabajo || null);
            result.input('Eps', sql.Int, createAspiranteDTO.Eps || null);
            result.input('Arl', sql.Int, createAspiranteDTO.Arl || null);
            result.input('FondoPension', sql.Int, createAspiranteDTO.FondoPension || null);
            result.input('Remuneracion', sql.Decimal, createAspiranteDTO.Remuneracion || null);
            result.input('NombresEmer', sql.VarChar(255), createAspiranteDTO.NombresEmer || null);
            result.input('TelefonoEmer', sql.VarChar(255), createAspiranteDTO.TelefonoEmer || null);
            result.input('CorreoEmer', sql.VarChar(255), createAspiranteDTO.CorreoEmer || null);
            // Tratamiento de Educación
            let tvp_educacion = new sql.Table('EducacionType');
            tvp_educacion.create = false;
            tvp_educacion.columns.add('NivelEducativo', sql.Int);
            tvp_educacion.columns.add('Institucion', sql.VarChar(255));
            tvp_educacion.columns.add('Titulo', sql.VarChar(255));
            tvp_educacion.columns.add('Graduacion', sql.DateTime);

            if (createAspiranteDTO.Educativo && createAspiranteDTO.Educativo.length > 0) {
                createAspiranteDTO.Educativo.forEach((educacion) => {
                    tvp_educacion.rows.add(
                        educacion.NivelEducativo,
                        educacion.Institucion,
                        educacion.Titulo,
                        educacion.Graduacion
                    );
                });
            }

            // Tratamiento de Experiencia
            let tvp_experiencia = new sql.Table('ExperienciaType');
            tvp_experiencia.create = false;
            tvp_experiencia.columns.add('Empresa', sql.VarChar(255));
            tvp_experiencia.columns.add('Cargo', sql.VarChar(255));
            tvp_experiencia.columns.add('FechaInicio', sql.DateTime);
            tvp_experiencia.columns.add('FechaFin', sql.DateTime);
            tvp_experiencia.columns.add('Responsabilidades', sql.VarChar(sql.MAX));
            tvp_experiencia.columns.add('Salario', sql.Decimal(18, 2));

            if (createAspiranteDTO.Experiencia && createAspiranteDTO.Experiencia.length > 0) {
                createAspiranteDTO.Experiencia.forEach((experiencia) => {
                    tvp_experiencia.rows.add(
                        experiencia.Empresa,
                        experiencia.Cargo,
                        experiencia.FechaInicio,
                        experiencia.FechaFin,
                        experiencia.Responsabilidades,
                        experiencia.Salario
                    );
                });
            }

            // Enviar TVPs al stored procedure
            result.input('Educacion', tvp_educacion);
            result.input('Experiencia', tvp_experiencia);

            result.input('Accion', sql.VarChar(50), 'Crear');

            const resultado = await result.execute('sp_cli_aspirantes');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha guardado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error);
            return {
                mensaje: 'Error al crear aspirante',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }

    async editAspirante(createAspiranteDTO: CreateAspiranteDTO) {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();

            result.input('AspiranteEmpleadoId', sql.Int, createAspiranteDTO.AspiranteEmpleadoId);
            result.input('TipoDocumento', sql.Int, createAspiranteDTO.TipoDocumento);
            result.input('NumeroDocumento', sql.VarChar(20), createAspiranteDTO.NumeroDocumento);
            result.input('Nombres', sql.VarChar(255), createAspiranteDTO.Nombres);
            result.input('Apellidos', sql.VarChar(255), createAspiranteDTO.Apellidos);
            result.input('Telefono', sql.VarChar(20), createAspiranteDTO.Telefono || null);
            result.input('FechaNacimiento', sql.DateTime, createAspiranteDTO.FechaNacimiento);
            result.input('Sexo', sql.VarChar(10), createAspiranteDTO.Sexo);
            result.input('EstadoCivil', sql.Int, createAspiranteDTO.EstadoCivil || null);
            result.input('GrupoSanguineo', sql.Int, createAspiranteDTO.GrupoSanguineo || null);
            result.input('Direccion', sql.VarChar(255), createAspiranteDTO.Direccion);
            result.input('CorreoElectronico', sql.VarChar(255), createAspiranteDTO.CorreoElectronico || null);
            result.input('EmpresaId', sql.Int, createAspiranteDTO.EmpresaId || null);
            result.input('CargoAspirado', sql.Int, createAspiranteDTO.CargoAspirado || null);
            result.input('SectorEconomico', sql.Int, createAspiranteDTO.SectorEconomico || null);
            result.input('NivelEducativoMain', sql.Int, createAspiranteDTO.NivelEducativoMain || null);
            result.input('Ciudad', sql.Int, createAspiranteDTO.Ciudad || null);
            result.input('HorarioTrabajo', sql.Int, createAspiranteDTO.HorarioTrabajo || null);
            result.input('Eps', sql.Int, createAspiranteDTO.Eps || null);
            result.input('Arl', sql.Int, createAspiranteDTO.Arl || null);
            result.input('FondoPension', sql.Int, createAspiranteDTO.FondoPension || null);
            result.input('Remuneracion', sql.Decimal, createAspiranteDTO.Remuneracion || null);
            result.input('NombresEmer', sql.VarChar(255), createAspiranteDTO.NombresEmer || null);
            result.input('TelefonoEmer', sql.VarChar(255), createAspiranteDTO.TelefonoEmer || null);
            result.input('CorreoEmer', sql.VarChar(255), createAspiranteDTO.CorreoEmer || null);

            // Tratamiento de Educación
            let tvp_educacion = new sql.Table('EducacionType');
            tvp_educacion.create = false;
            tvp_educacion.columns.add('NivelEducativo', sql.Int);
            tvp_educacion.columns.add('Institucion', sql.VarChar(255));
            tvp_educacion.columns.add('Titulo', sql.VarChar(255));
            tvp_educacion.columns.add('Graduacion', sql.DateTime);

            if (createAspiranteDTO.Educativo && createAspiranteDTO.Educativo.length > 0) {
                createAspiranteDTO.Educativo.forEach((educacion) => {
                    tvp_educacion.rows.add(
                        educacion.NivelEducativo,
                        educacion.Institucion,
                        educacion.Titulo,
                        educacion.Graduacion
                    );
                });
            }

            // Tratamiento de Experiencia
            let tvp_experiencia = new sql.Table('ExperienciaType');
            tvp_experiencia.create = false;
            tvp_experiencia.columns.add('Empresa', sql.VarChar(255));
            tvp_experiencia.columns.add('Cargo', sql.VarChar(255));
            tvp_experiencia.columns.add('FechaInicio', sql.DateTime);
            tvp_experiencia.columns.add('FechaFin', sql.DateTime);
            tvp_experiencia.columns.add('Responsabilidades', sql.VarChar(sql.MAX));
            tvp_experiencia.columns.add('Salario', sql.Decimal(18, 2));

            if (createAspiranteDTO.Experiencia && createAspiranteDTO.Experiencia.length > 0) {
                createAspiranteDTO.Experiencia.forEach((experiencia) => {
                    tvp_experiencia.rows.add(
                        experiencia.Empresa,
                        experiencia.Cargo,
                        experiencia.FechaInicio,
                        experiencia.FechaFin,
                        experiencia.Responsabilidades,
                        experiencia.Salario
                    );
                });
            }

            // Enviar TVPs al stored procedure
            result.input('Educacion', tvp_educacion);
            result.input('Experiencia', tvp_experiencia);

            result.input('Accion', sql.VarChar(50), 'Editar');

            const resultado = await result.execute('sp_cli_aspirantes');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha actualizado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error);
            return {
                mensaje: 'Error al editar aspirante',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }

    async getAspiranteById(AspiranteId: number) {
        try {
            const conn = await conexion.getConnection('contratos');
            const pool = conn;
            const result = await pool.request();

            result.input('AspiranteEmpleadoId', sql.Int, AspiranteId);
            result.input('Accion', sql.VarChar(50), 'Aspirante_By_Id');

            const resultado = await result.execute('sp_cli_aspirantes');
            return {
                mensaje: 'Procedimiento ejecutado correctamente',
                descripcion: 'Se ha actualizado exitosamente',
                resultado: resultado.recordsets,
                status: true,
            };
        } catch (error) {
            console.log(error);
            return {
                mensaje: 'Error al editar empresa',
                descripcion: error.message,
                resultado: null,
                status: false,
            };
        }
    }
}