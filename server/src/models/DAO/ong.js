const { logger } = require('../../utils/logger');
const ongs = require('../schemas/ong.model');

module.exports = class OngDAO {
    create(ong) {
        try {
            const saveModelOng = new ongs(ong);
            return saveModelOng.save();
        }catch(error){
            logger.error(error);
            return error;
        }
    }

    read(){
        try {
            return ongs.find({});
        }catch(error){
            logger.error(error);
            return(error)
        }
    }

    readById(id) {
        try {
           return ongs.findById( { _id: id });
        }catch(error){
            logger.error(error);
            return error
        }
    }

    readByNit(nit) {
        try {
            return ongs.find( {nit: nit}).exec();
        }catch(error){
            logger.error(error);
            return error
        }
    }

    readByName(name) {
        try {
            return ongs.find( {name: name }).exec();
        }catch(error){
            logger.error(error);
            return error
        }
    }

    delete(id) {
        try {
            return ongs.findByIdAndDelete( {_id: id} )
        }catch(error){
            logger.error(error);
            return error;
        }
    }

    update(id, ong) {
        try {
            const update = {
                nit: ong.nit,
                name: ong.name,
                phone: ong.phone,
                email: ong.email,
                is_active: ong.is_active,
                logo: ong.logo,
                users_publications: ong.user_publications
            };

            return ongs.findOneAndUpdate({_id: id},update,{new: true}) 
        }catch(error){
            logger.error(error);
            return error;
        }
    }
}