import { Schema, model } from 'mongoose';

const schemaPedido = new Schema({
    nombre: String,
    direccion: String,
    pedido: String,
    fecha: Date

});

export let pedidoSchema = model('schemaPedido', schemaPedido, 'pedidos'); 