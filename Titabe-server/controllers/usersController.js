const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const db = require('../database/models');
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

require('dotenv').config();
let token = 0;

const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
)

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN 
})

async function sendMail(email, token) {
    try {
        const accessToken = await oauth2Client.getAccessToken()
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken
            }
        })
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Reset Password',
            html: `<p>Click on the link to reset your password</p>
                   <a href="http://localhost:3000/reset/${token}">Reset Password</a>`
        }
        const result = await transport.sendMail(mailOptions)
        return result
    } catch (error) {
        return error
    }
}


const usersController = {

    register: async (req, res) => {
        console.log(req.body)
        const {fullName, email, phoneNumber, password} = req.body;
        const user = await db.User.findOne({where: {email: email}});

        if(user){
            res.status(409).json({error: 'user already exist'})
        }
        else{
            try{
                const newUser = await db.User.create({
                    fullName: fullName,
                    email: email,
                    phoneNumber: parseInt(phoneNumber),
                    address: "",
                    password: bcrypt.hashSync(password , 10),
                    image: "default.jpg",
                    role_id: 3
                })
                res.json('Successful');
    
            } catch(e) {
                res.status(500).json({ error: 'could not connect to database' })
            }
        }
    },

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
                fullName: user.fullName,
                role_id: user.role_id
            }, 'titabesecret')

            res.json({
                email: user.email,
                fullName: user.fullName,
                role_id: user.role_id,
                token
            })
        }
    },

    logged: (req, res) => {
        res.json({
            email: req.user.email,
            fullName: req.user.fullName,
            role_id: req.user.role_id,
        })
    },

    forgotPassword: async (req, res) => {
        const {email} = req.body;
        const user = await db.User.findOne({where: {email: email}});
        if(!user){
            res.status(404).json({error: 'user not found'})
        }
        else{
            token = Math.floor(100000 + Math.random() * 900000)
            try{
                result = await sendMail(email, token);
                console.log(result)
                res.json('Successful');
            } catch(e) {
                res.status(404).json({error: 'could not send email, error: ' + result})
            }
        }
    }
    
}

module.exports = usersController;