const Customer = require("../Model/customer");

exports.RegCustomer = (req, res, next) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LasName;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Address = req.body.Address;
    const Address_2 = req.body.Address_2;
    const City = req.body.City;
    const State = req.body.State;
    const Zip = req.body.Zip

    let RegCustomer = new Customer({
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password,
        Address: Address,
        Address_2: Address_2,
        City: City,
        State: State,
        Zip: Zip
    })
    RegCustomer.save()
        .then(result => {
            res.status(200).json({ message: "customer added", data: result })
        })
        .catch(err => {
            res.status(401).json({ message: err })
        })
}
