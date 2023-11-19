export interface Usuario {
	correo: string;
	nombre: string;
	apellido: string;
	contrasena: string;
}

export interface Arriendo{
	fecIn: Date;
	fecTer: Date;
	calificacion: number;
	correo: string;
	
}

export interface Estacionamiento{
	direccion: String;
	tarifa: Number;
	disponibilidad: boolean;
	descripcion: string;
	correo: string;
}

export interface Data {
	usuario: Usuario[];
	arriendo: Arriendo[];
	estacionamiento: Estacionamiento[];
}
