const student = require("../../model/studentSchema");
const bcrypt = require("bcrypt");

const handleNewStudent = async (req, res) => {
    const {
        name,
        email,
        password,
        phone,
        dob,
        whatsapp,
        nationality,
        education,
        presentOccupation,
        language,
    } = req.body;
    if (!name || !password || !email || !phone)
        return res.status(400).json({ message: "fields are required." });

    // check for duplicate emails in the db
    const duplicate = await student.findOne({ email });
    if (duplicate) return res.sendStatus(409); //Conflict

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);

        //create and store the new user
        const result = await student.create({
            name,
            email,
            phone,
            dob,
            password: hashedPwd,
            whatsapp,
            nationality,
            education,
            presentOccupation,
            language,
        });

        console.log(result);

        res.status(201).json({ success: `New student user ${result} created!` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { handleNewStudent };
