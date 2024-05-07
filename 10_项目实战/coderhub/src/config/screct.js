const fs = require("fs");
const path = require("path");

const PUBLIC_KEY = fs.readFileSync(
  path.resolve(__dirname, "./keys/app_public_key.pem")
);
const PRIVATE_KEY = fs.readFileSync(
  path.resolve(__dirname, "./keys/app_private_key.pem")
);

module.exports = {
  PUBLIC_KEY,
  PRIVATE_KEY,
};
