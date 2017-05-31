/**
 * Created by narendrasisodiya on 31/05/17.
 */

import express from "express";
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

const PORT = 12473;
app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});
