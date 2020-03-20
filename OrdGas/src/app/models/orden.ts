export class Orden {
    id: number;//oculto
    id_cotrato: number;
    num_orden: number;
    id_tipo: number;
    fecha: string;
    mes: string;
    cantidad: string;
    precio_unitario: string;
    subtotal: string;//oculto
    iva: string;
    otro_impuesto: string;
    total: string; //oculto
    saldo: string;
    obtener_iva: string;//oculto
    obtener_otro_impuesto: string;//oculto
    instalacion: string;
    dia_inicio: string;
    dia_fin: string;
    total_dias: string;
}
