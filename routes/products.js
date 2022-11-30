import express from "express";
const router = express.Router();
import { ProductsService } from "../services/Products.js";

/* GET home page. */
router.get("/", function (_, res) {
	ProductsService.findAll().then(function (products) {
		res.render("index", { products });
	});
});

// router.get("/", function (_, res) {
// 	ProductsService.findAll().then((products) => {
// 		res.json(products);
// 	});
// });

router.delete("/:id", function (req, res) {
	const { id } = req.params;
	ProductsService.delete(id).then(() => {
		res.json({
			success: "Produto removido com sucesso!",
		});
	});
});

router.post("/", function (req, res) {
	const { body } = req;
	ProductsService.insert(body).then((product) => {
		res.json(product);
	});
});

router.put("/", function (req, res) {
	const { body } = req;
	ProductsService.update(body).then((product) => {
		res.json(product);
	});
});

export default router;
