const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dynamic_website")
.then(() => {
    console.log("Connection successful");
}).catch((error) => {
    console.log(error);
});


// , {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true
// }