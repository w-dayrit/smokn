// GET '/' - renders landing page
module.exports.renderLandingPage = function(req, res, next) {
  res.render('landingpage', {title: 'SMOKN'});
};
