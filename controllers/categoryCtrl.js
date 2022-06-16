const Category = require("../models/categoryModel");
const categoryCtrl = {
  getCategory: async (req, res) => {
    try {
      const category = await Category.find();
      res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Category.findOne({ name: name });
      if (category) {
        return res.status(404).json({ msg: "Category already exit" });
      }
      const newCategroy = new Category({ name });
      await newCategroy.save();
      res.json({ msg: "Created a Category" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndDelete({ _id: req.params.id });
      if (!category) {
        return res.status(404).json({ msg: "Category doesn't exit" });
      }
      res.json({ msg: "deleted category" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const { name } = req.body;
      await Category.findOneAndUpdate({ _id: req.params.id }, { name });
      res.json({ msg: "Updated a Category" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = categoryCtrl;
