const Atendimentos = require("../models/atendimentos");

module.exports = (app) => {
  app.get("/atendimentos", (req, res) =>
    res.send("Você está na rota de atendimentos. utilizando get")
  );

  app.post("/EdAtentimentos", (req, res) => {
    console.log(req.body)
    const atendimentos = req.body;

    Atendimentos.adiciona(atendimentos, res);
  });
};
