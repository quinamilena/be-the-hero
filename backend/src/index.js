const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
  Notas:
  Tipos de Parâmetros:
    - Query Params: Parâmentros enviados na rota após (?), para filtros, paginação
    - Routes Params: Parâmetros utilizados para identificar recursos, após (:) ex: /routa/:id
    - Request body: Corpo da requisição, utilizado para a criação e edição  
*/
