const { logger } = require('../utils/logger');
const OngService = require('../services/ong.service');
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
};

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

// exports.readById = async (req, res) => {
//   const id = req.params.id

//   const idError = validId(id)

//   if(idError==false){ 
//     try {
//       const Ong = new OngService();
//       const ongs = await Ong.getById(id);
      
//       if (ongs === null || ongs.length == 0)  {
//         res.status(404).json({ message: 'ONG not found' });
//       } else {
//         res.status(200).json({ ongs });
//       }
//     } catch (error) {
//       logger.error(error);
//       return res
//         .status(boom.badData(error).output.statusCode)
//         .json({ message: boom.badData(error).output.payload.message });
//     }
//   }else{
//     res.status(500).json({ message: 'Id inválido' });
//   }  
// };
exports.readById = async (req, res) => {
  const id = req.params.id

  const idError = validId(id)

  if(idError==false){  
    try {
      const Ong = new OngService();
      const ongs = await Ong.getById(id);

      if (ongs === null || ongs.length == 0)  {
        res.status(404).json({ message: 'ONG not found' });
      } else {
        res.status(200).json({ ongs });
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

exports.readByNit = async (req, res) => {
  try {
    const { nit } = req.query;

    const Ong = new OngService();
    const ongs = await Ong.getByNit(nit);

    if (ongs === null || ongs.length == 0)  {
      res.status(404).json({ message: 'ONG not found' });
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
    const { name } = req.query;

    const Ong = new OngService();
    const ongs = await Ong.getByName(name);
    if (ongs === null || ongs.length == 0)  {
      res.status(404).json({ message: 'ONG not found' });
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

exports.delete = async (req, res) => {
  const { _id } = await req.body;  
  const idError = validId(_id)

  if(idError==false){  
    try {
      const Ong = new OngService();    
      const ongs = await Ong.deleteById(_id);
      if (ongs === undefined || ongs === null) {
        res.status(404).json({ message: 'ONG not found' });
      } else {
        res.status(200).json({ message: 'ONG deleted' });
      }
    }catch (error) {
      logger.error(error);
      return res
        .status(boom.badData(error).output.statusCode)
        .json({ message: boom.badData(error).output.payload.message });
    }

  }else{
    res.status(500).json({ message: 'Id inválido' });
  }

  
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const Ong = new OngService();
  const idError = validId(id)

  if(idError==false){

    const ongs = await Ong.getById(id);
    if (ongs === null|| ongs.length == 0)  {
      res.status(404).json({ message: 'ONG not found' });
    } else {
      try {
    
        const { nit, phone, email, is_active, logo, users_publications } =
          await req.body;
        
        const ong = {
          nit: nit,
          phone: phone,
          email: email,
          is_active: is_active,
          logo: logo,
          users_publications: users_publications,
        };

        const result = await Ong.updateById(id, ong);
        //return res.status(201).json({ message: 'ONG updated' });

        if (result.level === 'error') {
          res.status(500).json({ message: 'ONG not updated' });
        } else {
          res.status(200).json({ message: 'ONG updated' });
        }


      } catch (error) {
        logger.error(error);
        return res
          .status(boom.badData(error).output.statusCode)
          .json({ message: boom.badData(error).output.payload.message });
      }

    }

  }else{
    res.status(500).json({ message: 'Id inválido' });
  }
};
