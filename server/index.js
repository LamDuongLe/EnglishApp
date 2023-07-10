// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log("Server listening on " + PORT);
// });

// const bodyParser = require("body-parser");
// app.use(bodyParser.json({ limit: "10mb" }));
// app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

// app.get("/hello", (req, res) => {
//   res.json({ message: "hello from server" });
// });

// // apis
// app.use("/api/admin", require("./api/admin.js"));
// app.use("/api/customer", require("./api/customer.js"));
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors()); // Cấu hình CORS ở đây

app.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.get("/hello", (req, res) => {
  res.json({ message: "hello from server" });
});

// apis
app.use("/api/admin", require("./api/admin.js"));
app.use("/api/customer", require("./api/customer.js"));
