const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const taskManagerRoutes = require("./routes/taskManagerRoutes");
// const qrCodeRoute = require("./routes/qrCodeRoute");
// const bookDirectoryRoute = require("./routes/bookDirectoryRoutes");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "HOME ROUTER UNDERSTAND NODEJS",
  });
});

// Routes
// app.use("/api/v1", taskManagerRoutes);
// app.use("/api/v1", qrCodeRoute);
// app.use("/api/v1", bookDirectoryRoute);

const connectDatabase = () => {
  const mongoDbUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
  console.log(`Connecting to ${mongoDbUrl}`);
  mongoose.Promise = global.Promise;

  // connecting to the database
  mongoose
    .connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log("Could not connect to the database. Exiting now...", err);
      process.exit();
    });
};

connectDatabase();

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
