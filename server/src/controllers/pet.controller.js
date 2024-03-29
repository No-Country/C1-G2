const { logger } = require('../utils/logger');
const PetService = require('../services/pet.service');
const boom = require('@hapi/boom');
const mongodb = require('mongodb');

function validId(id){
  let idError=false;

  try{
      new mongodb.ObjectID(id);     
  }catch(err){     
      idError=true;
  }

  return idError;
  
}

exports.create = async (req, res) => {
  try {
    const Pet = new PetService();
    const {
      _id,
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
    const newPet = {
      _id: _id,
      petname: petname,
      image: image,
      race: race,
      species: species,
      color: color,
      gender: gender,
      description: description,
      userid: userid,
      age: age,
      direction: direction,
      publicationDate: publicationDate,
      category: category,
      is_castrated: is_castrated,
      is_authorized: is_authorized,
    };

    const result = await Pet.register(newPet);
    if (result.level === 'error') {
      res.status(500).json({ message: 'Pet not created' });
    } else {
      res.status(200).json({ message: 'Pet created' });
    }
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

exports.read = async (req, res) => {
  try {
    const Pet = new PetService();
    const pets = await Pet.getAll();
    return res.status(200).json({ pets });
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

exports.readById = async (req, res) => {
  const id = req.params.id

  const idError = validId(id)

  if(idError==false){  
    try {
      const Pet = new PetService();
      const pets = await Pet.getById(id);

      if (pets === null|| pets.length == 0)  {
        res.status(404).json({ message: 'Pet not found' });
      } else {
        res.status(200).json({ pets });
      }

    } catch (error) {
      logger.error(error);
      return res
        .status(boom.badData(error).output.statusCode)
        .json({ message: boom.badData(error).output.payload.message });
    }

  }else{
    res.status(500).json({ message: 'Id inválido' });
  } 
};

exports.readByName = async (req, res) => {
  try {
    const { petname } = req.query;

    const Pet = new PetService();
    const pets = await Pet.getByName(petname);

    if (pets === null || pets.length == 0) {
      res.status(404).json({ message: 'Pet not found' });
    } else {
      res.status(200).json({ pets });
    }
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

exports.readByGender = async (req, res) => {
  try {
    const gender = req.query.gender;
    const Pet = new PetService();
    const pets = await Pet.getByGender(gender);
    if (pets === null || pets.length == 0) {
      res.status(404).json({ message: 'Pet not found' });
    } else {
      res.status(200).json({ pets });
    }
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

exports.readByRace = async (req, res) => {
  try {
    const race = req.query.race;
    const Pet = new PetService();
    const pets = await Pet.getByRace(race);
    if (pets === null || pets.length == 0) {
      res.status(404).json({ message: 'Pet not found' });
    } else {
      res.status(200).json({ pets });
    }
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};


exports.readByCategory = async (req, res) => {
  try{
    const category = req.query.category;
    const Pet = new PetService();
    let pets = null;

    if( category == "ALL"){
      pets = await Pet.getAll();
    }else{
      pets = await Pet.getByCategory(category);
    }
    
    if(pets === null || pets.length == 0){
      res.status(404).json({message: 'Pet not found'})
    }else{
      res.status(200).json({pets});
    } 
  }catch(error){
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json( {message: boom.badData(error).output.payload.message} );
  }
}


exports.deletePet = async (req, res) => {
  const { _id } = await req.body;  
  const idError = validId(_id)

  if(idError==false){    
    
    try {
      const Pet = new PetService();
      
      const pets = await Pet.deleteById(_id); 

      if (pets === undefined || pets === null) {
        res.status(404).json({ message: 'Pet not found' });
      } else {
        res.status(200).json({ message: 'Pet deleted' });
      }

    } catch (error) {
      logger.error(error);
      return res
        .status(boom.badData(error).output.statusCode)
        .json({ message: boom.badData(error).output.payload.message });
    }  
  }else{
    res.status(500).json({ message: 'Id inválido' });
  }
};





exports.update = async (req, res, next) => {
  const id = req.params.id;
  const Pet = new PetService();
  const idError = validId(id)

  if(idError==false){ 
    const pets = await Pet.getById(id);
    if (pets === null|| pets.length == 0)  {
      res.status(404).json({ message: 'Pet not found' });
    } else {

      /**** */
      try {
      
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

        const pets = {
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

        const result = await Pet.updateById(id, pets);

        
        if (result.level === 'error') {
          res.status(500).json({ message: 'Pet not updated' });
        } else {
          res.status(200).json({ message: 'Pet updated' });
        }


      } catch (error) {
        logger.error(error);
        next(error)
      }
    }

  }else{
    res.status(500).json({ message: 'Id inválido' });
  }   


  
};
