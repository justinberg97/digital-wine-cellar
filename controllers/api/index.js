const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bottleRoutes = require('./bottleRoutes');

router.use('/users', userRoutes);
router.use('/bottles', bottleRoutes);

module.exports = router;
