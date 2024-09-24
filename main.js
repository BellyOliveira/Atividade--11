<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flores Coloridas</title>
    <style>
        body {
            margin: 0;
            overflow: hidden; /* Para evitar barras de rolagem */
        }
    </style>
</head>
<body>
    <script>
        function criarFlor(x, y, cor) {
            const flor = document.createElement('div');
            flor.style.position = 'absolute';
            flor.style.width = '50px';
            flor.style.height = '50px';
            flor.style.borderRadius = '50%';
            flor.style.backgroundColor = cor;
            flor.style.left = `${x}px`;
            flor.style.top = `${y}px`;
            flor.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
            
            document.body.appendChild(flor);
        }

        function gerarFlores(numFlores) {
            const cores = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
            
            for (let i = 0; i < numFlores; i++) {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const cor = cores[Math.floor(Math.random() * cores.length)];
                criarFlor(x, y, cor);
            }
        }

        // Chama a função para gerar 20 flores
        gerarFlores(20);
    </script>
</body>
</html>

