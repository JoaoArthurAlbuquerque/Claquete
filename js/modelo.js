/* CLAQUETE — modelo.js
   Preenche as páginas filme.html / serie.html a partir de ?id=
   Depende de data.js e utils.js. */

(function () {
  "use strict";

  var C = window.Claquete;
  var main = document.querySelector("[data-tipo]");
  if (!main) return;

  var tipo = main.dataset.tipo;
  var modelo = document.getElementById("modelo");
  var erro = document.getElementById("erro");

  var id = C.lerIdDaUrl();
  var item = id ? C.buscarPorId(id) : null;

  /* id existe mas é do outro tipo: manda para a página certa */
  if (item && item.tipo !== tipo) {
    window.location.replace(C.urlModelo(item));
    return;
  }

  if (!item) {
    modelo.hidden = true;
    erro.hidden = false;
    document.title =
      (tipo === "serie" ? "Série" : "Filme") + " não encontrado — CLAQUETE";
    return;
  }

  /* ---------- Cabeçalho e imagem ---------- */

  document.title = item.titulo + " — CLAQUETE";

  var img = document.getElementById("modelo-imagem");
  img.src = C.srcBackdrop(item);
  img.alt = "Imagem de destaque de " + item.titulo;

  document.getElementById("trilha-titulo").textContent = item.titulo;
  document.getElementById("modelo-titulo").textContent = item.titulo;
  document.getElementById("modelo-meta").textContent =
    item.ano + " · " + item.genero;
  document.getElementById("modelo-sinopse").textContent = item.sinopse;

  /* ---------- Ficha técnica ---------- */

  var linhas = [
    ["Ano", String(item.ano)],
    ["Duração", item.duracao],
    ["Gênero", item.genero],
    ["Diretor", item.diretor],
    ["Elenco", item.elenco.join(", ")],
  ];

  var ficha = document.getElementById("modelo-ficha");
  var frag = document.createDocumentFragment();
  linhas.forEach(function (par) {
    var linha = document.createElement("div");
    var dt = document.createElement("dt");
    var dd = document.createElement("dd");
    dt.textContent = par[0];
    dd.textContent = par[1];
    linha.appendChild(dt);
    linha.appendChild(dd);
    frag.appendChild(linha);
  });
  ficha.appendChild(frag);
})();
