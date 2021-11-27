const { logger } = require('../utils/logger');
const PetDAO = require('../models/DAO/pet');

module.exports = class PetService {
    async register(pet){
        try{
            const pets = await new PetDAO();
            return pets.create(pet);
        }catch(err){
            logger.error('[falla al guardar]', err);
        }
    }

    async getAll(){
        try{
            const pets = await new PetDAO().read();

            if(pets === undefined){
                return('{error: "No hay pets cargados."}');
            }
            return pets;
        }catch(err){
            logger.error(err);
        }
    }  

    async getById(id){
        try{
            const pets = await new PetDAO().readById(id);

            if(pets === undefined){
                return('{error: "No hay pets con el id: "}' + id)
            }
            return pets;
        }catch(err){
            logger.error(err);
        }        
    }






    async getByName(name){
        try{
            const pets = await new PetDAO().readByName(name);

            if(pets === undefined){
                return('{error: "No hay pets cargados con el nombre: "}');
            }
            return pets;
        }catch(error){
            logger.error(error);
        }
    }

    async getByGender(gender){
        try{
            const pets = await new PetDAO().readByGender(gender);

            if(pets === undefined){
                return('{error: "No hay pets cargados con el genero: "}');
            }
            return pets;
        }catch(error){
            logger.error(error);
        }
    }

    async getByRace(race){
        try{
            const pets = await new PetDAO().readByRace(race);

            if(pets === undefined){
                return('{error: "No hay pets cargados con la raza: "}');
            }
            return pets;
        }catch(error){
            logger.error(error);
        }
    }

    async deleteById(id){
        try{
            const pets = new PetDAO();
            return pets.delete(id);
        }catch(error){
            logger.error('[falla al guardar]', error);
        }
    }

     async updateById(id,pet){
        try{
            const pets = new PetDAO();
            return pets.update(id,pet);
        }catch(error){
            logger.error('[falla al modificar]', error);
        }
    }
}

