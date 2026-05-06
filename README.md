# Glass Effect from ThreeJS

Pagina React inspirada no visual "glass effect": uma interface escura com placas de vidro interativas, brilho suave e profundidade visual. O foco do projeto e reproduzir o conceito de um fundo composto por paineis que reagem ao movimento do cursor, criando uma sensacao de material translucido e responsivo.

## Funcionalidades

- Fundo em placas interativas que acompanham a posicao do mouse.
- Realce dinamico na placa ativa, com mudanca de brilho e contraste.
- Efeito de profundidade com deslocamento sutil dos paineis e inclinacao da moldura principal.
- Camadas visuais de vidro com blur, sombras internas, reflexos e linhas de separacao.
- Layout responsivo para desktop e mobile.
- Barra superior, chamada principal e botoes no mesmo clima visual da referencia.

## Stack

- React: estrutura da interface e controle do estado do cursor.
- Vite: ambiente de desenvolvimento, build rapido e servidor local.
- CSS moderno: gradients, backdrop-filter, clip-path, custom properties e media queries.
- SVG: linhas de separacao entre as placas no layout desktop.
- JavaScript no navegador: eventos de ponteiro para calcular posicao, placa ativa e intensidade do efeito.

## Como rodar

```bash
npm install
npm run dev
```

Depois acesse:

```text
http://localhost:5173/
```

## Observacao

O visual e inspirado em experiencias feitas com ThreeJS, mas esta versao foi implementada com React e CSS para manter o projeto leve e simples. As pastas `.browser-profile-*` eram apenas perfis temporarios criados durante a validacao visual com navegador headless e nao fazem parte do site.
