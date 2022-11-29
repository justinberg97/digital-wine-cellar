const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const profileRoutes = require('./profile-routes')


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);


module.exports = router;

