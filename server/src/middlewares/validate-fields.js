const { response } = require('express');
const { validationResult } = require('express-validator');

const validateFields = (req, res = response, next) => {
  const errorFormatter = ({ msg }) => {
    return msg;
  };
  const errors = validationResult(req).formatWith(errorFormatter);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      msg: errors.array()[0],
    });
  }
  next();
};

module.exports = { validateFields };
