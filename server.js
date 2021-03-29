const express = require("express");

require("dotenv").config();

const app = express();

const cors = require("cors");

const router = require("./src/routes");

const portServer = process.env.PORT || 8000;

//body parser
app.use(express.json());

app.use(cors());

//routes group
app.use("/api/v1", router);
app.get("/", (req, res) => {
    res.send("testing")
});
app.use("/uploadedImages", express.static("uploadedImages"));

app.listen(portServer, () => console.log(`your server is running at port : ${portServer}`));

//root url = localhost:3000/api/v1