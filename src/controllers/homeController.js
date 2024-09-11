import db from "../models";
const CRUDService = require("../services/CRUDService")
module.exports.homeController = async (req, res) => {
    try{
        const data = await db.User.findAll();
        return res.render("homepage.ejs", {
            data : JSON.stringify(data)
        })

    }catch(e){
        console.log(e)
    }
}
module.exports.postCRUD = async (req, res) => {
    const message = await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.send("OK")
}
module.exports.getCRUD = async (req, res) => {
    const data = await CRUDService.getAllUser()
    console.log(data)
   
    return res.render("displayCRUD.ejs", {
        data : data
    })
}
module.exports.getEditCRUD = async(req, res) => {
    const userId = req.query.id;
    if(userId){
        const userData = await CRUDService.getUserById(userId)
        res.render("editCRUD.ejs")
    }
    else{
        res.send("User not found!")
    }

}