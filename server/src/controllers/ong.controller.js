const { logger } = require('../utils/logger');
const OngService = require('../services/ong.service');
const boom = require('@hapi/boom');

exports.create = async (req, res) => {
    try{
        const Ong = new OngService();
        const {_id, nit, name, phone, email, is_active, logo, users_publications} = await req.body;
        const newOng = {
            _id: _id,
            nit: nit, 
            name: name,           
            phone: phone,
            email: email,
            is_active: is_active,
            logo: logo,
            users_publications: users_publications
        };
        const result = await Ong.register(newOng);
        if (result.level === 'error') {
          res.status(500).json({ message: 'ONG not created' });
        } else {
          res.status(200).json({ message: 'ONG created' });
        }       
    }catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
}

exports.read = async (req, res) => {
  try {
    const Ong = new OngService();
    const ongs = await Ong.getAll();
    return res.status(200).json( { ongs } );
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

exports.readById = async (req, res) => {
  try {
    const Ong = new OngService();
    const ongs = await Ong.getById(req.params.id);
    if (ongs === null || ongs.length == 0)  {
      res.status(404).json({ message: 'Pet not found' });
    } else {
      res.status(200).json({ ongs });
    }
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

exports.readByNit = async (req, res) => {
  try {
    
    const  { nit } = req.query

    const Ong = new OngService();
    const ongs = await Ong.getByNit(nit);

    if (ongs === null || ongs.length == 0)  {
      res.status(404).json({ message: 'Pet not found' });
    } else {
      res.status(200).json({ ongs });
    }

  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

exports.readByName = async (req, res) => {
  try {
    
    const  { name } = req.query

    const Ong = new OngService();
    const ongs = await Ong.getByName(name);
    if (ongs === null || ongs.length == 0)  {
      res.status(404).json({ message: 'Pet not found' });
    } else {
      res.status(200).json({ ongs });
    }
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

exports.delete = async (req,res) => {
  try{
    const Ong = new OngService();
    const { _id } = await req.body;
    const ongs = await Ong.deleteById(_id);
    if (ongs === undefined || ongs === null) {
      res.status(404).json({ message: 'Pet not found' });
    } else {
      res.status(200).json({ message: 'Pet deleted' });
    }
  }catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

exports.update = async (req,res) => {
  try{
    const Ong = new OngService();
    const {nit, phone, email, is_active, logo, users_publications} = await req.body;
    const id = req.params.id;
    const ong = {      
        nit: nit,       
        phone: phone,
        email: email,
        is_active: is_active,
        logo: logo,
        users_publications: users_publications
    };
    await Ong.updateById(id,ong);
    return res.status(201).json({ message: 'ONG updated'});    
  }catch (error) {
    logger.error(error);
     return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
}