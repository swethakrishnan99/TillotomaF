const mongoose = require('mongoose')
const schema = mongoose.Schema

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const adminSchema = new schema({
    name: {
        required: "Name is required",
        type: String
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: {
        type: Number,
        required: "Phone Number is required"
    },
    password: {
        type: String,
        required: true,
        // match: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'please fill valid password']
    },
    dob: {
        type: String,
        required: true
    },
    whatsapp: {
        type: Number
    },
    nationality: {
        type: String,
        required: true
    },
    countryOfResidence: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("admin", adminSchema)