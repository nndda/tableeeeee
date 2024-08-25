const Papa = require("papaparse");
const fs = require("fs");

const data = fs.readFileSync("./data/data.csv", {encoding: "utf8"});

const parsedData = Papa.parse(data, {
  header: true,
  skipEmptyLines: true,
});

fs.writeFileSync(
  "./data/data.js",
  `module.exports=${JSON.stringify(parsedData.data)};`
);