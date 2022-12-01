const router = require('express').Router();
const { Bottle } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newBottle = await Bottle.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBottle);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const bottleData = await Bottle.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!bottleData) {
      res.status(404).json({ message: 'No bottle found with this id!' });
      return;
    }

    res.status(200).json(bottleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
