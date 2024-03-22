module.exports = {
    async getAllParts(req, res) {
      try {
        // Algum código assíncrono aqui, se necessário
        const message = "Esta é uma mensagem de teste."; 
  
        // Envie a mensagem ao cliente (supondo que 'minhaPagina' seja a view e 'message' a variável)
        res.send('minhaPagina');
      } catch (error) {
        // Em caso de erro, envie uma resposta de erro ao cliente
        console.error(error);
        res.status(500).send('Erro ao buscar peças');
      }
    }
  };
  
