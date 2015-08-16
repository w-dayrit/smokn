// GET '/' - renders index page
module.exports.renderIndex = function(req, res, next) {
  res.render('index', {title: 'SMOKN'});
};
