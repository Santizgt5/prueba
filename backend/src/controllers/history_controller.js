const historyDB = require('./../database/db.history');

exports.createHistory = async (req, res) => {
    historyDB.insert(req.body, (response) => {
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

exports.getHistories = (req, res) => {
    historyDB.getAll((histories) => {
        if (histories.error) {
            res.status(400).json({
                'status': 'error',
                'data': histories.data
            }); 
        } else {
            res.status(200).json({
                'status': 'success',
                'data': histories.data
            });
        }
    });
}

exports.getHistory = async (req, res) => {
    historyDB.get(req.params.id, (response) => {
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

exports.deleteHistory = async (req, res) => {
    historyDB.delete(req.params.id, (response) => {
        if(data.error) {
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