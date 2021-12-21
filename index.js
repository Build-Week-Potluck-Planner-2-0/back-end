require("dotenv").config();

const server = require("./api/server");

const { PORT } = require("./config");

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
