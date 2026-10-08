# CLAQUETE — Site de streaming (HTML + CSS + JS puro)

Atividade de HTML & CSS. Sem frameworks e sem servidor: abra `index.html` com duplo clique.

## Páginas

| Arquivo           | Conteúdo                                        |
| ----------------- | ----------------------------------------------- |
| `index.html`      | Home: destaque, TOP 3, filmes e séries recentes |
| `filmes.html`     | Todos os filmes (grade 3x4)                     |
| `series.html`     | Todas as séries (12)                            |
| `filme.html?id=N` | Filme modelo (preenchido pelo id)               |
| `serie.html?id=N` | Série modelo (preenchida pelo id)               |

## Estrutura

```
css/   base.css (comum) + um CSS por página + item.css, busca.css, comentarios.css (componentes)
js/    data.js (catálogo) · utils.js · busca.js · home.js · listagem.js · modelo.js · comentarios.js
img/   logo.svg · favicon.svg · posters/ (opcional)
```

## Como trocar as imagens

Em `js/data.js`, preencha `poster` (vertical 2:3) e/ou `backdrop` (horizontal 16:9) com um caminho relativo:

```js
poster: "img/posters/1.jpg", backdrop: "img/posters/1-wide.jpg"
```

Vazio = pôster SVG gerado automaticamente.

## Persistência

Comentários ficam no `localStorage`, chave `claquete:comentarios`.
Para apagar tudo: DevTools (F12) > Application > Local Storage.

## Observações

- Todos os caminhos são relativos: o projeto abre em qualquer máquina.
- Títulos, elenco e diretores são fictícios.
- Conteúdo principal limitado a 1000px.
