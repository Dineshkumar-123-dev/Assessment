const authService = require("../services/auth.service");
const responseView = require("../views/response.view");

exports.signup = async (req, res) => {
  try {
    const result = await authService.signup(req.body);
    responseView.success(res, result);
  } catch (err) {
    responseView.error(res, err);
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const result = await authService.verifyEmail(req.query.token);
    responseView.success(res, result);
  } catch (err) {
    responseView.error(res, err);
  }
};

exports.login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    responseView.success(res, result);
  } catch (err) {
    responseView.error(res, err);
  }
};
