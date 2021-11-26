const { logger } = require('../../utils/logger');
const pets = require('../schemas/pet.model');
//const mongoose = require('mongoose');


module.exports = class PetDAO {
    create(pet) {
        try{
            const saveModelPet = new pets(pet);
            return saveModelPet.save();
        }catch (error){
            logger.error(error)
        }
    }

    read(){
        try{
            return pets.find({});
        }catch(error){
            logger.error(error);
        }
    }

    readById(id){
        
        try{
            
                
            return pets.findById({ _id: id });
        }catch(error){
            logger.error(error)
        }
    }

    readByName(name){
        try{           
            return pets.find({ petname: name}).exec();
        }catch(error){
            logger.error(error);
        }
    }

    readByGender(gender){
        try{
            return pets.find({ gender: gender}).exec();
           
        }catch(error){
            logger.error(error);
        }
    }

    readByRace(race){
        try{           
            return pets.find({ race: race }).exec();           
        }catch(error){
            logger.error(error);
        }
    }


    //Ver UPDATE

    delete(id){
        try{
            return pets.findByIdAndDelete({_id: id});
        }catch(error){
            logger.error(error);
        }
    }


    update(id,pet){

        // const filter = {_id: pet._id}
        // const filter = {_id: id}

       
        try{
             const update = {
                petname: pet.petname,
                image:  pet.image,
                userid: pet.userid,
                race: pet.race,
                species: pet.species,
                color: pet.color,
                gender: pet.gender,
                description: pet.description,
                age: pet.age,
                direction: pet.direction,
                publicationDate: pet.publicationDate,
                category: pet.category,
                is_castrated: pet.is_castrated,
                is_authorized: pet.is_authorized
            };
            // const pets = new pets();
            return pets.findOneAndUpdate({_id: id},update,{new: true});

        }catch(error){
             logger.error(error)
        }
    }
}


