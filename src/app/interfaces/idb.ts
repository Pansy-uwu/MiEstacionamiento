export interface Usuario {
	correo: string;
	nombre: string;
	contrasena: string;
}

export interface Estacionamiento {
	patente: string;
	modelo: string;
	correo: string;
}

export interface Data {
	usuario: Usuario[];
	estacionamiento: Estacionamiento[];
}
