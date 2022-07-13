const express=require("express");
const app = express();
const port=3000;
const methodOverride = require("method-override");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const indexRoute= require("./src/routes/indexRoute")
const authRoute=require("./src/routes/authRoute")


// //  configura o methodOverride no express 
// // methodOverride = pacote que transforma um metodo http em outro
// Ex POst=>PUT
app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cookieParser());
app.use(session({secret:"senha"}))


// Configura pasta estática para acesso externo
app.use(express.static(path.join(__dirname,"public")));

// Configura o template engiene, troca do padrão 
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "src", "views"));



app.use("/",indexRoute);
app.use("/",authRoute);


app.listen(port, () => {
    console.log("Estamos rodando em: http://localhost:" + port);
  });
  