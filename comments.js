// Create web server
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    try {
        // Configurar cabeçalhos CORS e tipo de conteúdo
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');

        // Responder apenas a requisições GET
        if (req.method === 'GET') {
            res.writeHead(200);
            res.end(JSON.stringify({ message: 'Servidor funcionando!' }));
        } else {
            res.writeHead(405);
            res.end(JSON.stringify({ error: 'Método não permitido' }));
        }
    } catch (error) {
        console.error('Erro no servidor:', error);
        res.writeHead(500);
        res.end(JSON.stringify({ error: 'Erro interno do servidor' }));
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Tratamento de erros do servidor
server.on('error', (error) => {
    console.error('Erro fatal no servidor:', error);
    process.exit(1);
});
