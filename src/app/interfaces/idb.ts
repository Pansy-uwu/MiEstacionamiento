export interface Usuario {
	correo: string;
	nombre: string;
	apellido: string;
	contrasena: string;
}

export interface Arriendo{
	fecIn: Date;
	fecTer: Date;
	idesta: number;
	tarjeta: number;
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

export interface Tarjeta{
	number: number,
	name: string,
	expiricy: Date,
	cvc: number,
}
