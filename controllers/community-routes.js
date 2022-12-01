const router = require('express').Router();
const { User, Bottle } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all bottles and JOIN with user data
    const bottleData = await Bottle.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const bottles = bottleData.map((bottle) => bottle.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('community', { 
      bottles, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;