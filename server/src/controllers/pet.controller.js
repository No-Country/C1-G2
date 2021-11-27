const { logger } = require('../utils/logger');
const PetService = require('../services/pet.service');

exports.create = async (req, res) => {
  try {
    const Pet = new PetService();
    const { _id, petname, race, color, gender, userid, age } = await req.body;
    const newPet = {
      _id: _id,
      petname: petname,
      race: race,
      color: color,
      gender: gender,
      userid: userid,
      age: age,
    };
    await Pet.register(newPet);
    return res.status(201).json({ message: 'Pet created' });
  } catch (error) {
    logger.error(error);
    return res.status(406).send(error);
  }
};

exports.read = async (req, res) => {
  try {
    const Pet = new PetService();
    const pets = await Pet.getAll();
    return res.status(200).json(pets);
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};

exports.readById = async (req, res) => {
  try {
    const Pet = new PetService();
    const pets = await Pet.getById(req.params.id);
    return res.status(200).json(pets);
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};

exports.readByName = async (req, res) => {
  try {
    
    const  { petname } = req.query;

    const Pet = new PetService();
    const pets = await Pet.getByName(petname);
    return res.status(200).json(pets);
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};

exports.readByGender = async (req, res) => {
  try {
    const gender = req.query.gender;
    const Pet = new PetService();
    const pets = await Pet.getByGender(gender);
    return res.status(200).json(pets);
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};

exports.readByRace = async (req, res) => {
  try {
    const race = req.query.race;
    const Pet = new PetService();
    const pets = await Pet.getByRace(race);
    return res.status(200).json(pets);
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const Pet = new PetService();
    const { _id } = await req.body;
    await Pet.deleteById(_id);
    return res.status(201).json({ message: 'Pet deleted' });
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};

exports.update = async (req, res) => {
  try {
    const Pet = new PetService();
    const {
      petname,
      image,
      userid,
      race,
      species,
      color,
      gender,
      description,
      age,
      direction,
      publicationDate,
      category,
      is_castrated,
      is_authorized,
    } = await req.body;

    const id = req.params.id;
    const pet = {
      petname: petname,
      image: image,
      userid: userid,
      race: race,
      species: species,
      color: color,
      gender: gender,
      description: description,
      age: age,
      direction: direction,
      publicationDate: publicationDate,
      category: category,
      is_castrated: is_castrated,
      is_authorized: is_authorized,
    };

    await Pet.updateById(id, pet);
    return res.status(201).json({ message: 'Pet updated' });
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};
