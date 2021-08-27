const TeamMembers = require("../Model/team");
// Get API call for Fetching data All categories of Technician
exports.GetCategories = (req, res, next) => {
    TeamMembers.find()
        .then((result) => {
            res.status(200).json({
                message: "record fetch successfully",
                TeamMembers: result,
            });
        })
        .catch((err) => {
            res.status(401).json({ message: err });
        });
};
