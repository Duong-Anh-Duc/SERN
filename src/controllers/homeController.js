const CRUDService = require("../services/CRUDService")
module.exports.homeController = async (req, res) => {
    res.render("createCRUD.ejs")
   
}
module.exports.deleteCRUD = async (req, res) => {
    const userId = req.query.id;
    if(userId){
        await CRUDService.deleteUserByID(userId)
        return res.send("Delete User Success!")
    }
    else{
        return res.send("User Delete Fail!")
    }
}
module.exports.postCRUD = async (req, res) => {
    const message = await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.send("OK")
}
module.exports.getCRUD = async (req, res) => {
    const data = await CRUDService.getAllUser()
   
    return res.render("displayCRUD.ejs", {
        data : data
    })
}
module.exports.getEditCRUD = async(req, res) => {
    const userId = req.query.id;
    if(userId){
        const userData = await CRUDService.getUserById(userId)
        res.render("editCRUD.ejs",{
            user : userData
        })
    }
    else{
        res.send("User not found!")
    }
}
module.exports.putCRUD = async(req, res) => {
    await CRUDService.updateUserData(req.body)
    return res.send("Update success!")
}