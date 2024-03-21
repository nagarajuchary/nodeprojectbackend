const mongo = require("mongoose");

const cardata = new mongo.Schema({
    carname: {
        type: String
    },
    color: {
        type: String
    },
    released: {
        type: String
    },
    price: {
        type: String
    },
    fueltype: {
        type: String
    }

},
    { timestamps: true }
)

module.exports = mongo.model('car', cardata)