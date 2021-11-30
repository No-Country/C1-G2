const { logger } = require('../utils/logger');
const OngDAO = require('../models/DAO/ong');

module.exports = class OngService {
    async register(ong){
        try{
            const ongs = await new OngDAO();
            return ongs.create(ong);    
        }catch(error){
            logger.error('[Fallo al guardar]', error);
            return error;
        }
    }

    async getAll(){
        try{
            const ongs = await new OngDAO().read();

            if(ongs == undefined){
                return('{Error, no hay ongs cargadas}');
            }
            return ongs;
        }catch(error){
            logger.error(error);
            return error;
        }
    }

    async getById(id){
        try{
            const ongs = await new OngDAO().readById(id);
            
            if(ongs == undefined) {
                 return('{error: "No hay ongs con el id: "}' + id)
            }
            return ongs;
        }catch(error){
            logger.error(error);
            return error
        } 
    }

    async getByNit(nit){
        try{
            const ongs = await new OngDAO().readByNit(nit);
            
            if(ongs == undefined) {
                 return('{error: "No hay ongs con el nit: "}' + nit)
            }
            return ongs;
        }catch(error){
            logger.error(error);
            return error
        } 
    }

    async getByName(name){
        try{
            const ongs = await new OngDAO().readByName(name);
            
            if(ongs == undefined) {
                 return('{error: "No hay ongs con el nombre: "}' + name)
            }
            return ongs;
        }catch(error){
            logger.error(error);
            return error;
        } 
    }

    async deleteById(id){
        try{
            const ongs = new OngDAO();
            return ongs.delete(id);            
        }catch(error){
            logger.error('[Fallo al eliminar]', error);
            return error;
        }
    }

    async updateById(id, ong){
        try{
            const ongs = new OngDAO();
            return ongs.update(id,ong);
        }catch(error){
            logger.error('[Fallo al modificar]', error);
            return error
        }
    }




}

