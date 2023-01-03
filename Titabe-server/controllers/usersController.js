const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const db = require('../database/models');

const usersController = {

    login: async (req, res) => {
        const {email, password} = req.body;
        const user = await db.User.findOne({where: {email: email}});
        
        const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.password)
        if(!passwordCorrect){
            res.status(401).json({error: 'invalid credentials'})
        }
        else{
            const token = jwt.sign({
                email: user.email,
                id: user.id
            }, 'titabesecret')

            res.json({
                email: user.email,
                id: user.id,
                token
            })
        }
    },
    
}

module.exports = usersController;