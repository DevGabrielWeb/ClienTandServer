const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Configuração da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sistema_solar'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados');
  }
});
// Configuração de arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(__dirname + '/public'));

// Configuração do mecanismo de visualização EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('index', { informacoesDoPlaneta: null });
});

// Rota para obter informações do planeta
app.get('/obter-informacoes', (req, res) => {
  const planetaSelecionado = req.query.planeta; // Supondo que você está usando um query parameter para obter o planeta selecionado.

  // Consulta SQL para buscar informações do planeta com base em 'planetaSelecionado'
  const sql = 'SELECT * FROM planetas WHERE nome = ?';

  connection.query(sql, [planetaSelecionado], (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.send('Erro ao buscar informações do planeta.');
    } else {
      // Os resultados contêm as informações do planeta selecionado
      const informacoesDoPlaneta = results[0];

      // Renderize a página e passe as informações para o modelo
      res.render('index', { informacoesDoPlaneta });
    }
  });
});

// Lidando com desconexão do banco de dados
process.on('exit', () => {
  connection.end();
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
