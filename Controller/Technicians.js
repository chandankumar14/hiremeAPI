const technician = require("../Model/technician");
exports.GetTechnician = (req, res, next) => {
    const location_id = req.body.location_id;
    const category_id = req.body.category_id;
    const hcost = req.body.hcost;
    const lcost = req.body.lcost;
    const sort = req.body.sort ? req.body.sort : 1;
    let payload = {};

    if (category_id) {
        payload = {
            category_id: Number(category_id),
        };
    }
    if (category_id && hcost && lcost) {
        payload = {
            category_id: Number(category_id),
            min_price: { $gt: lcost, $lt: hcost },
        };
    }
    if (category_id && location_id) {
        payload = {
            location_id: Number(location_id),
            category_id: Number(category_id),
        };
    }

    if (location_id && category_id && hcost && lcost) {
        payload = {
            location_id: Number(location_id),
            category_id: Number(category_id),
            min_price: { $gt: lcost, $lt: hcost },
        };
    }

    technician.find(payload).sort({ min_price: sort }).then(result => {

        res.status(200).json({
            message: "data Fetched Sucessfully",
            restaurant: result
        });
    }).catch(err => {
        res.status(500).json({ message: err })
    });
};
