const server = require('./app');
const PORT = 3001;
const { conn } = require("./DB_connection");

conn.sync({ force: true })
    .then(()=> {
        server.listen(PORT, async () => {
            console.log("Server raised in port " + PORT);
        })
    })
    .catch(error => console.log(error.message))