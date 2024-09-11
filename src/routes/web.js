const express = require("express");
const homeController = require("../controllers/homeController")
let router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homeController.homeController)
    router.get("/crud", homeController.getCRUD)
    router.post('/post-crud', homeController.postCRUD)
    router.get('/get-crud', homeController.getCRUD)
    router.get('/edit-crud', homeController.getEditCRUD)
    return app.use("/", router)
}
module.exports = initWebRoutes