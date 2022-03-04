const companyDB = require('./../database/db.company');

exports.createCompany = async (req, res) => {
    companyDB.insert(req.body, (response) => {
        if (response.error) {
            res.status(400).json({
                'status': 'error',
                'data': response.data
            }); 
        } else {
            res.status(200).json({
                'status': 'success',
                'data': response.data
            });
        }
    });
} 

exports.getCompanies = async (req, res) => {
    companyDB.getAll((companies) => {
        if (companies.error) {
            res.status(400).json({
                'status': 'error',
                'data': companies.data
            }); 
        } else {
            res.status(200).json({
                'status': 'success',
                'data': companies.data
            });
        }
    });

}

exports.getCompany = async (req, res) => {
    companyDB.get(req.params.id, (response) => {
        if(response.error) {
            res.status(400).json({
                'status': 'error',
                'data': response.data
            }); 
        } else {
            res.status(200).json({
                'status': 'success',
                'data': response.data
            });
        }
    })
}

exports.deleteCompany = async (req, res) => {
    companyDB.delete(req.params.id, (response) => {
        if(response.error) {
            res.status(400).json({
                'status': 'error',
            }); 
        } else {
            res.status(200).json({
                'status': 'success',
            });
        }
    });
} 