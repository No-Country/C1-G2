const { logger } = require('../utils/logger');
const OngService = require('../services/ong.service');

exports.create = async (req, res) => {
  try {
    const Ong = new OngService();
    const {
      _id,
      nit,
      name,
      phone,
      email,
      is_active,
      logo,
      users_publications,
    } = await req.body;
    const newOng = {
      _id: _id,
      nit: nit,
      name: name,
      phone: phone,
      email: email,
      is_active: is_active,
      logo: logo,
      users_publications: users_publications,
    };
    await Ong.register(newOng);
    return res.status(201).json({ message: 'ONG created' });
  } catch (error) {
    logger.error(error);
    return res.status(406).send(error);
  }
};

exports.read = async (req, res) => {
  try {
    const Ong = new OngService();
    const ongs = await Ong.getAll();
    return res.status(200).json(ongs);
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};

exports.readById = async (req, res) => {
  try {
    const Ong = new OngService();
    const ongs = await Ong.getById(req.params.id);
    return res.status(200).json(ongs);
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};

exports.readByNit = async (req, res) => {
  try {
    const { nit } = req.query;

    const Ong = new OngService();
    const ongs = await Ong.getByNit(nit);
    return res.status(200).json(ongs);
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};

exports.readByName = async (req, res) => {
  try {
    const { name } = req.query;

    const Ong = new OngService();
    const ongs = await Ong.getByName(name);
    return res.status(200).json(ongs);
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const Ong = new OngService();
    const { _id } = await req.body;
    await Ong.deleteById(_id);
    return res.status(201).json({ message: 'ONG deleted' });
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};

exports.update = async (req, res) => {
  try {
    const Ong = new OngService();
    const { nit, phone, email, is_active, logo, users_publications } =
      await req.body;
    const id = req.params.id;
    const ong = {
      nit: nit,
      phone: phone,
      email: email,
      is_active: is_active,
      logo: logo,
      users_publications: users_publications,
    };
    await Ong.updateById(id, ong);
    return res.status(201).json({ message: 'ONG updated' });
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};
