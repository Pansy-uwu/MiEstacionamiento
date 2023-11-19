// interfaces/idb.ts
export interface Usuarios {
	correo: string;
	nombre: string;
	apellido: string;
	contrasena: string;
	id: number;
  }
  
  export interface Arriendos {
	id: number;
	fecIn: Date;
	fecTer: Date;
	calificacion: number;
	correo: string;
  }
  
  export interface Estacionamientos {
	direccion: string;
	tarifa: number;
	disponibilidad: boolean;
	descripcion: string;
	correo: string;
	id: number;
  }
  
  export interface Data {
	usuario: Usuarios[];
	arriendo: Arriendos[];
	estacionamiento: Estacionamientos[];
  }
  