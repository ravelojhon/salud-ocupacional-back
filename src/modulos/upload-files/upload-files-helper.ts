import * as fs from 'fs'
import * as path from 'path'

export const editFileName = (req : any, file : any, callback : any ) => {
  const ext = file.originalname.split('.').pop()
  const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9)
  callback(null, uniqueSuffix+'.'+ext)
}

export async function eliminarCarpeta(rutaCarpeta : any) {
  if (fs.existsSync(rutaCarpeta)) {
    fs.readdirSync(rutaCarpeta).forEach((archivo, indice) => {
      const rutaArchivo = path.join(rutaCarpeta, archivo);
      if (fs.lstatSync(rutaArchivo).isDirectory()) {
        eliminarCarpeta(rutaArchivo);
      } else {
        fs.unlinkSync(rutaArchivo);
      }
    });
    fs.rmdirSync(rutaCarpeta);
  }
}

