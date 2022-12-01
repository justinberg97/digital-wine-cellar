const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/', async (req, res) => {
  // try {
  //   const bottleData = await Project.findAll(req.params.id, {
  //   });
  //   const bottle = bottleData.get({ plain: true });
  //   res.render('community', {
  //     ...bottle,
  //     logged_in: true
  //   });
  // } catch (error) {
  //   console.log(error)
  //   res.status(500).json(error);
  // }
 
try {
  // Get all projects and JOIN with user data
  const projectData = await Project.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });

  // Serialize data so the template can read it
  const bottle = bottletData.map((project) => project.get({ plain: true }));

  // Pass serialized data and session flag into template
  res.render('community', { 
    ...bottle, 
    logged_in: true
  });
} catch (err) {
  res
}
});

module.exports = router;
