import { pedidoSchema } from './../schemas/pedido';
import * as express from 'express';

const router = express.Router();

router.get("/pedido", async (req, res, next) => {
	try {
	  let pedido = await pedidoSchema.find();
	  res.send(pedido);
	} catch (err) {
	  throw err;
	}
  });
  
  router.post("/pedido", async (req, res) => {
	console.log("Viene el pedido POST: ", req.body);
	try {
	  const pedido = new pedidoSchema(req.body);
	  let pedidoNuevo = await pedido.save()
	  res.send(pedidoNuevo);
	} catch (err) {
	  throw err;
	}
  });
  
  router.put("/pedido/:_id", async (req, res, next) => {
	try {
	  const pedido = await pedidoSchema.findByIdAndUpdate(req.params._id, req.body);
	  res.status(202).json({ pedido, success: true, mensaje: 'put exitoso' });
	} catch (err) {
	  return res.status(404).json({ err, success: false });
	}
  });
  
  router.delete("/pedido/:_id", async (req, res, next) => {
	try {
	  await pedidoSchema.findByIdAndRemove(req.params._id);
	  res.status(202).json({ success: true, mensaje: 'delete exitoso' });
	} catch (err) {
	  return res.status(404).json({ err, success: false });
	}
  });

export = router; 