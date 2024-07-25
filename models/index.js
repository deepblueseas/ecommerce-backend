const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// this order is super important
// if you dont have categories first, when the Product tries to find the Category it belongs to, it will give you an error 
// 'cannot find category or category doesn't exist'
// mongoose may be loose, but sometimes it isnt!

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};