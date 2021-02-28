const mongoose = require ("mongoose");

mongoose.connect(`mongodb://localhost/votes`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(res => console.log("Database connection established!"))
    .catch((err) => console.log("Error occurred when attempting to connect to DB: ", err))
