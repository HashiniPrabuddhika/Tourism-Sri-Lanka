const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use('/uploads', express.static('uploads'));

const allServicesRouter = require("./routes/allServices.js");
const PackageRouter = require("./routes/packages.js")
const cusPackRouter = require("./routes/cusPacks.js");
const paymentRouter = require('./routes/payment-route');
const paymentHistoryRouter = require('./routes/payment-history-route')
const hotelRouter = require ("./routes/hotels.js");
const roomRouter = require ("./routes/rooms.js");
const UserRouter = require("./routes/user-route");
const tourguideRouter = require("./routes/tourguides.js");
const tourpackages = require("./routes/tourpackage.js");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//routes to make api calls
app.use("/ourallServices", allServicesRouter);
app.use("/package", PackageRouter);
app.use("/cusPack",cusPackRouter);
app.use("/payment", paymentRouter);
app.use("/payments/history", paymentHistoryRouter);
app.use("/hotel", hotelRouter);
app.use("/room", roomRouter);
app.use("/user", UserRouter);
app.use("/tourguide",tourguideRouter);
app.use("/tourpackages", tourpackages); 

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {useNewUrlParser : true, useUnifiedTopology: true }).then(() => console.log("MongoDB connection successful"))
.catch((err) => console.error("MongoDB connection error:", err));

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection successful!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});