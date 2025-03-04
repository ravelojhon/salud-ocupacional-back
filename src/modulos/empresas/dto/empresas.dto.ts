// empresas.dto.ts
export interface CreateEmpresaDTO {
    EmpresaId?: number;
    NIT: string;
    RazonSocial: string;
    NombreComercial: string;
    Direccion: string;
    Telefono: string;
    CorreoElectronico: string;
    SectorEconomico: string;
    NumeroEmpleados: number;
    RepresentanteLegal: string;
    RepresentanteLegalDocumento: string;
    RepresentanteLegalCorreo: string;
    Contrasena: string;
}