export interface Usuarios {
	correo: string;
	nombre: string;
	contrasena: string;
	id: number;
}

export interface Estacionamientos {
	id: number;
	patente: string;
	modelo: string;
	correo: string;
}

export interface Data {
	usuario: Usuarios[];
	estacionamiento: Estacionamientos[];
}
