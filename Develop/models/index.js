// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Categories have many Products

Product.belongsTo(Category); // defines the association on the source model
Category.hasMany(Product); // defines the association on the target model

// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
}); // defines the association on the source model
Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
}); // defines the association on the target model

ProductTag.belongsTo(Tag, {
  foreignKey:'tag_id'
}); // defines the association on the source model
Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id'
}); // defines the association on the target model


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
