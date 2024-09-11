const bcrypt = require("bcrypt")
const salt = bcrypt.genSaltSync(10)
const db = require("../models/index")
const user = require("../models/user")
const { raw } = require("body-parser")
const { where } = require("sequelize")
module.exports.getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const users = await db.User.findAll({
                raw : true
            })
            return resolve(users)
        } catch (error) {
            reject(error)
        }
    })
}
module.exports.updateUserData = (data) => {
   return new Promise(async(resolve, reject) => {
    try {
        const user = await db.User.findOne({
            where : {
                id : data.id
            }
        })
        if(user){
            user.firstName = data.firstName
            user.lastName = data.lastName
            user.address = data.address
            await user.save();
            resolve();
        }
        else{
            resolve();
        }
    } catch (error) {
        reject(error)
    }
   })
}
module.exports.deleteUserByID = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where : {
                    id : userId
                }
            })
            if(user){
                await user.destroy()
            }
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}
module.exports.getUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = db.User.findOne({
                raw : true,
                where : {
                    id : userId
                }})
                if(user){
                    resolve(user)
                }
                else{
                    resolve({})
                }
            } catch (error) {
                reject(error)
            
        }
    })
}
module.exports.createNewUser = async (data) => {
    console.log(data)
    return new Promise(async (resolve, reject) => {
        try{
            const hashPassword = await module.exports.hashPassword(data.password)
            await db.User.create({
                email : data.email,
                password : hashPassword,
                firstName : data.firstName,
                lastName : data.lastName,
                address : data.address,
                phonenumber : data.phonenumber,
                gender : data.gender === '1' ? true : false,
                roleId : data.roleId
            })
            resolve("Create a new success!")
        }catch(e){
            reject(e)
        }
    })
}
module.exports.hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
    try {
        const hashPassWord = await bcrypt.hashSync(password, salt)
        resolve(hashPassWord)
    } catch (error) {
        reject(error)
    }
    })
}
