const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const db = require('../database/models');

const storeController = {

    allStore: async (req, res) => {

        try{
			const allStore = await db.Product.findAll({
				//Incluir la tabla imagenes y obtener la principal
				include: {
							association: 'products_images',
							where: { main: 1 }
						},
				//Ordenar para que aparezcan primero las ofertas y al último los productos sin stock
				order: [
					['offer', 'DESC'],  
					['stock', 'DESC']
				]
			})
			if(!allStore) {
				res.status(404).json({error: 'No items'});
				return
			};
            console.log(allStore)
			res.json(allStore)

		} catch(e) {
      		res.status(500).json({ error: 'Could not connect to database'})
		}     
    },

	detail: async (req, res) => {

        try{
			const item = await db.Product.findByPk(req.params.id , {
				//Incluir la tabla imagenes y obtener la principal
				include: {
							association: 'products_images',
						}
			})
			if(!item) {
				res.status(404).json({error: 'No item'});
				return
			};
            console.log(item)
			res.json(item)

		} catch(e) {
      		res.status(500).json({ error: 'Could not connect to database'})
		}     
    },

}

module.exports = storeController;