const router = require("express").Router()
const {test} = require("../controller/controller")

router.get("/test",test)

module.exports=router