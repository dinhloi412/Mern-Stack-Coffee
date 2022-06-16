const mongoose = require("mongoose");
const URI = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("success"))
    .catch((err) => console.log(err));
};
module.exports = URI;
