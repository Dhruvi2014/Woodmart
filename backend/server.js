const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/compare", require("./routes/compareRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server Running on ${process.env.PORT}`);
});