const { logger } = require('../utils/logger');
const PetDAO = require('../models/DAO/pet');
const boom = require('@hapi/boom');

module.exports = class PetService {
    async register(pet){
        try{
            const pets = await new PetDAO();
            return pets.create(pet);
        }catch(error){
            logger.error('[Fall al guardar]', error);
            return error
        }
    }

    async getAll(){
        try{
            const pets = await new PetDAO().read();

            if(pets === undefined){
                 return boom.notFound(pets);
            }
            return pets;
        }catch(error){
            logger.error(error);
            return error
        }
    }  

    async getById(id){
        try{
            const pets = await new PetDAO().readById(id);

            if(pets === undefined){
                return boom.notFound(pets);
            }
            return pets;
        }catch(error){
            logger.error(error);
            return error
        }        
    }

    async getByName(name){
        try{
            const pets = await new PetDAO().readByName(name);

            if(pets === undefined){
               return boom.notFound(pets);
            }
            return pets;
        }catch(error){
            logger.error(error);
            return error
        }
    }

    async getByGender(gender){
        try{
            const pets = await new PetDAO().readByGender(gender);

            if(pets === undefined){
               return boom.notFound(pets);
            }
            return pets;
        }catch(error){
            logger.error(error);
            return error
        }
    }

    async getByRace(race){
        try{
            const pets = await new PetDAO().readByRace(race);

            if(pets === undefined){
               return boom.notFound(pets);
            }
            return pets;
        }catch(error){
            logger.error(error);
            return error
        }
    }

    async deleteById(id){
        try{
            const pets = new PetDAO();
            return pets.delete(id);
        }catch(error){
            logger.error('[falla al eliminar]', error);
            return error
        }
    }

     async updateById(id,pet){
        try{
            const pets = new PetDAO();
            return pets.update(id,pet);
        }catch(error){
            logger.error('[Fallo al modificar]', error);
            return error
        }
    }
}


