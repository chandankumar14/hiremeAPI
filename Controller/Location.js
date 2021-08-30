const Location = require("../Model/location");
const Citylist = require("../Model/citylist");

// get All state Name
exports.getlocation = (req, res, next) => {
    Location.find()
        .then((result) => {
            res.status(200).json({ message: "data fecth", location: result });
        })
        .catch((err) => {
            res.status(401).json({ message: err });
        });
};

// get all citylist on the basis of  state name
exports.getCityByid = (req, res, next) => {
    const state = req.body.state_code;
    Citylist.find({ state_code: state })
        .then((result) => {
            res.status(200).json({ message: "citylist", citylist: result });
        })
        .catch((err) => {
            res.status(401).json({ message: err });
        });
};
