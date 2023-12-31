const bcrypt = require('bcryptjs')
const User = require('../models/user-model')

const signUp = async (req,res) => {
    const { username, password } = req.body
    const hashpassword = await bcrypt.hash(password, 12)
    try {
        const newUser = await User.create({
            username,
            password: hashpassword
        });

        req.session.user = newUser;
        res.status(200).json({
            status: "success",
            data: {
                user: newUser
            }
        })
    } catch(e) {
        res.status(400).json({
            status: "fail"
        })
    }
}

const login = async (req,res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({username})

        if(!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'user not found'
            })
        }

       const isCorrect = bcrypt.compare(password, user.password)

       if(isCorrect) {
            req.session.user = user;
            return res.status(200).json({
                status: 'success'
            })
       } else {
            return res.status(400).json({
                status: 'fail',
                message: 'incorrect username or password'
            })
       }

    } catch(e) {

    }
}

module.exports = {
    signUp,
    login
}