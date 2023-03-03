// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreginKey: 'category_id',
});

//  activity 23
Product.belongsToMany(Tag, {
  through: ProductTag,
})

Tag.belongsToMany(Product, {
  through: ProductTag,
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};