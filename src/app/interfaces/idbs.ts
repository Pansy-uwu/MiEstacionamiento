export interface Usuarios {
	correo: string;
	nombre: string;
	apellido: string;
	contrasena: string;
	id: number;
}

export interface Arriendo {
	id: number;
	fecIn: Date;
	fecTer: Date;
	calificacion: number;
	correo: string;
}

export interface Estacionamiento{
	direccion: String;
	tarifa: Number;
	disponibilidad: boolean;
	correo: string;
	id: number;
}

export interface Data {
	usuario: Usuarios[];
	arriendo: Arriendo[];
	estacionamiento: Estacionamiento[];
}
