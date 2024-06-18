const express = require("express");
const session = require("express-session");
const SQLiteStore = require("connect-sqlite3")(session);
const routes = require("./routes/routes");

//const cors = require("express-cors");
const cors = require("cors");

const app = express();
const port = 4200;


app.use(cors({ origin: true })); // Allow all origins
app.use(cors({ credentials: true }))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));*/

// Use routes
app.use("/", routes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});



/*
const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Rutas y controladores
app.get('/Books', (req, res) => {
  // Lógica de tu endpoint
});

app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});*/

