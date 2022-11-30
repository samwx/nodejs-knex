import { db } from "../connection/db.js";

export const TABLE_NAME = "products";
export const ProductsService = {
	findAll() {
		return db(TABLE_NAME).select("*");
	},
	insert(product) {
		return db(TABLE_NAME).insert(product);
	},
	delete(id) {
		return db(TABLE_NAME).where("id", id).del();
	},
	update(product) {
		return db(TABLE_NAME)
			.where("id", product.id)
			.update({
				name: product.name,
				description: product.description,
				price: product.price
			});
	},
};
