const Parts = require('../models/Parts');

module.exports = class PartsController {
    static async getAllParts(req, res) {
      try {
        
        parts = new Parts();

        res.send(parts.getParts());
      } catch (error) {
        // Em caso de erro, envie uma resposta de erro ao cliente
        console.error(error);
        res.status(500).send('Erro ao buscar peças');
      }
    }
  };
  
