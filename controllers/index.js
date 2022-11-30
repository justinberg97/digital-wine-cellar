const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const profileRoutes = require('./profile-routes')
// const projectRoutes = require('./api/projectRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);
// router.use('/api/projects', projectRoutes);



module.exports = router;

