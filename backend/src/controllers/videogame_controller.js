const videogameDB = require('./../database/db.videogame');

exports.createVideogame = async (req, res) => {
    videogameDB.insert(req.body, (response) => {
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

exports.getVideogames = async (req, res) => {
    videogameDB.getAll((videogames) => {
        console.log(videogames);
        if (videogames.error) {
            res.status(400).json({
                'status': 'error',
                'data': videogames.data
            }); 
        } else {
            res.status(200).json({
                'status': 'success',
                'data': videogames.data
            });
        }
    });
}

exports.getVideogame = async (req, res) => {
    videogameDB.get(req.params.id, (response) => {
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

exports.deleteVideogame = async (req, res) => {
    videogameDB.delete(req.params.id, (response) => {
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