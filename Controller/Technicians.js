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
// Register Technician 

exports.RegTechnician = (req, res, next) => {
    const Firstname = req.body.FirstName;
    const lastName = req.body.lastName;
    const phoneNo = req.body.PhoneNo;
    const gender = req.body.gender;
    const email = req.body.email;
    const password = req.body.Password;
    const currentAddress = req.body.currentAddress;
    const permanentAddress = req.body.permanentAddress;
    const zipcode = req.body.Zipcode;
    const location_id = req.body.location_id;
    const category_id = req.body.category_id;
    const experience = req.body.Experience;
    const skill = req.body.Skill
    const city = req.body.city
    const min_price = 500

    let emplyeeRecord = new technician({
        Firstname: Firstname,
        lastName: lastName,
        phoneNo: phoneNo,
        gender: gender,
        email: email,
        password: password,
        currentAddress: currentAddress,
        permanentAddress: permanentAddress,
        zipcode: zipcode,
        location_id: location_id,
        category_id: category_id,
        experience: experience,
        min_price: min_price,
        skill: skill,
        city: city
    })
    emplyeeRecord.save()
        .then(result => {
            res.status(200).json({ message: "employees register successfully", data: result })
        })
        .catch(err => {
            res.status(401).json({ message: err })
        })

}
// get Technician By category id

exports.TechnicianById = (req, res, next) => {
    const category_id = req.body.category_id;
    technician.find({ category_id: category_id })
        .then(result => {
            res.status(200).json({
                message: "data fectch successfully",
                record: result
            })
        })
        .catch((err) => {
            res.status(401).json({ message: err })
        })
}

// find by id and update method
exports.findByIdandUpdate = (req, res, next) => {
    const skill = req.body.skill;

    const id = req.body.id;
    const Firstname = req.body.Firstname;
    const lastName = req.body.lastName;
    const phoneNo = req.body.phone;
    const gender = req.body.gender;
    const email = req.body.email;
    const password = req.body.password;
    const currentAddress = req.body.currentAddress;
    const permanentAddress = req.body.permanentAddress;
    const zipcode = req.body.zipcode;
    const location_id = req.body.location_id;
    const category_id = req.body.category_id;
    const experience = req.body.experience;
    const city = req.body.city
    const min_price = price

    let emplyeeRecord = new technician({
        Firstname: Firstname,
        lastName: lastName,
        phoneNo: phoneNo,
        gender: gender,
        email: email,
        password: password,
        currentAddress: currentAddress,
        permanentAddress: permanentAddress,
        zipcode: zipcode,
        location_id: location_id,
        category_id: category_id,
        experience: experience,
        min_price: min_price,
        skill: skill,
        city: city
    })
    technician.findByIdAndUpdate(id, emplyeeRecord)
        .then(result => {
            res.status(200).json({ message: "updated", data: result })
        })
        .catch(err => {
            res.status(401).json({ message: err })
        })
}
// find by id and delete method
exports.findByIdandDelet = (req, res, next) => {
    const id = req.body.id
    technician.findByIdAndDelete(id)
        .then(result => {
            res.status(200).json({ message: "deleted", data: result })
        })
        .catch(err => {
            res.status(401).json({ message: err })
        })
}


// get all technician 
exports.GetAllTechnician = (req, res, next) => {
    technician.find()
        .then(result => {
            res.status(200).json({ message: "all technicina", result: result })
        })
        .catch(err => {
            res.status(401).json({ message: err })
        })
}