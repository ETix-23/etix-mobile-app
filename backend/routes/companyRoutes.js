const router= require("express").Router();
const {getCompanies,addCompany}= require("../controller/companyController")


router.get("/",getCompanies)
router.post("/",addCompany)

module.exports=router