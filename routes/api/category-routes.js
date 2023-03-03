const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll(req.body)
  .then(category_data => {
    res.json(category_data)
  })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {

  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body)
  // create a new category
  //  look at activity 19
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const userData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
