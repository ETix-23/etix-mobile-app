const router= require("express").Router();
const {getCompanies,addCompany,getCompanyById}= require("../controller/companyController")


router.get("/",getCompanies)
router.get('/:id',getCompanyById)
router.post("/",addCompany)

module.exports=router