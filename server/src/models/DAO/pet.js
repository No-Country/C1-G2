const { logger } = require('../../utils/logger');
const pets = require('../schemas/pet.model');
//const mongoose = require('mongoose');

module.exports = class PetDAO {
  create(pet) {
    try {
      const saveModelPet = new pets(pet);
      return saveModelPet.save();
    } catch (error) {
      logger.error(error);
      return error;
    }
  }

  read() {
    try {
      return pets.find({}, { is_authorized: 0, userid: 0 });
    } catch (error) {
      logger.error(error);
      return error;
    }
  }

  readById(id) {
    try {
      return pets.findById({ _id: id }, { is_authorized: 0, userid: 0 });
    } catch (error) {
      logger.error(error);
      return error;
    }
  }

  readByName(name) {
    try {
      return pets
        .find({ petname: name }, { is_authorized: 0, userid: 0 })
        .exec();
    } catch (error) {
      logger.error(error);
      return error;
    }
  }

  readByGender(gender) {
    try {
      return pets
        .find({ gender: gender }, { is_authorized: 0, userid: 0 })
        .exec();
    } catch (error) {
      logger.error(error);
      return error;
    }
  }

  readByRace(race) {
    try {
      return pets.find({ race: race }, { is_authorized: 0, userid: 0 }).exec();
    } catch (error) {
      logger.error(error);
      return error;
    }
  }

  deletePet(id) {
    try {
      return pets.findByIdAndDelete({ _id: id });
    } catch (error) {
      logger.error(error);
      return error;
    }
  }

  update(id, pet) {
    try {
      const update = {
        petname: pet.petname,
        image: pet.image,
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
        is_authorized: pet.is_authorized,
      };

      return pets.findOneAndUpdate({ _id: id }, update, { new: true });
    } catch (error) {
      logger.error(error);
      return error;
    }
  }
};
