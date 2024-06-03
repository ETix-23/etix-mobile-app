const Company = require("../models/company.model")


async function getCompanies(req,res){
  try{
    const companies = await Company.find()
    res.status(200).json({companies})
  }catch(error){
    res.status(500).json({error:"Internal Server Error!!!"})
  }
}

async function addCompany(req,res){
    try{
      const {name,description} = req.body
      const newCompany = await Company.create({name,description})
      res.status(201).json({newCompany})
    }catch(error){
      res.status(500).json({error:"Internal Server Error!!!"})
    }
}


module.exports = {
    getCompanies,
    addCompany,
}