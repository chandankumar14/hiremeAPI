const Categories = require("../Model/categories");

// Get API call for Fetching data All categories of Technician
exports.GetCategory = (req, res, next) => {
    Categories.find()
        .then((result) => {
            res.status(200).json({
                message: "record fetch successfully",
                Category: result,
            });
        })
        .catch((err) => {
            res.status(401).json({ message: err });
        });
};
exports.getBycategory = (req, res, next) => {
    const id = req.body.category_id
    Categories.find({ category_id: id }).then(
        (result) => {
            res.status(200).json({
                message: "Record Fetch SuccessFully",
                data: result
            })
        }
    ).catch((err) => {
        res.status(401).json({ message: err })
    })
}