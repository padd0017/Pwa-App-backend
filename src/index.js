const express = require('express');
const cors = require('cors');
const Routers = require('./routers/movieRouters');
const { errorHandler } = require("./utils/errors");

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, _res, next)=>{
    console.log(`[${req.method}] ${req.url}`);
    next();
})
app.use("/api/movies", Routers);

app.get("/", (_req, res) => {
    res.send("Server Running..");
  });

  app.use(errorHandler);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

