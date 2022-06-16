require("dotenv").config();
const epxress = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const URI = require("./config/conn");
const userRouter = require("./routes/userRouter");
const categoryRouter = require("./routes/categoryRouter");
const uploadRouter = require("./routes/upload");
const productRouter = require("./routes/productRouter");
const paymentRouter = require("./routes/paymentRouter");
const path = require("path");
const app = epxress();
app.use(epxress.json());
app.use(epxress.urlencoded({ extended: true }));
app.use(cors());

app.use(cookieParser());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/user", userRouter);
app.use("/api", categoryRouter);
app.use("/api", uploadRouter);
app.use("/api", productRouter);
app.use("/api", paymentRouter);
URI();
if (process.env.NODE_ENV === "production") {
  app.use(epxress.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running at ${PORT}`));
