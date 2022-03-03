const express = require("express");
const companyController = require('./../controllers/company_controller');

const router = express.Router();

router.route('/').post(companyController.createCompany).get(companyController.getCompanies);

router.route('/:id').get(companyController.getCompany).delete(companyController.deleteCompany);

module.exports = router;