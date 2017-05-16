var express = require('express'),
    app = express();
	_ = require('underscore'),

// carregar "banco de dados" (data/jogadores.json e data/jogosPorJogador.json)
// você pode colocar o conteúdo dos arquivos json no objeto "db" logo abaixo
// dica: 3-4 linhas de código (você deve usar o módulo de filesystem (fs))

var fs = require('fs');

let jogadoresFile = 'server/data/jogadores.json';
let jogosPorJogadorFile = 'server/data/jogosPorJogador.json';

var db = {
	jogadores: JSON.parse(fs.readFileSync(jogadoresFile)).players,
	jogosPorJogador: JSON.parse(fs.readFileSync(jogosPorJogadorFile))
};



// configurar qual templating engine usar. Sugestão: hbs (handlebars)
//app.set('view engine', '???');

app.set('view engine', 'hbs');
app.set('views', 'server/views');

// EXERCÍCIO 2
// definir rota para página inicial --> renderizar a view index, usando os
// dados do banco de dados "data/jogadores.json" com a lista de jogadores
// dica: o handler desta função é bem simples - basta passar para o template
//       os dados do arquivo data/jogadores.json

app.get('/', function(request, response) {
  response.render('index', {
		jogadores: db.jogadores
	});
});

// EXERCÍCIO 3
// definir rota para página de detalhes de um jogador --> renderizar a view
// jogador, usando os dados do banco de dados "data/jogadores.json" e
// "data/jogosPorJogador.json", assim como alguns campos calculados
// dica: o handler desta função pode chegar a ter umas 15 linhas de código




// EXERCÍCIO 1
// configurar para servir os arquivos estáticos da pasta "client"
// dica: 1 linha de código

app.use(express.static(__dirname + '/../client'));

// abrir servidor na porta 3000
// dica: 1-3 linhas de código

let server = app.listen(3000, function () {
	console.log('Listening at http://%s:%s', server.address().address, server.address().port);
});
