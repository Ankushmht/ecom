module.exports = (asyncErrorHanlde) => (req, res, next) => {
  Promise.resolve(asyncErrorHanlde(req, res, next)).catch(next);
};
