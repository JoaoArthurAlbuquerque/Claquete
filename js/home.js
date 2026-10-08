/* CLAQUETE — home.js
   Preenche destaque, TOP 3, filmes e séries recentes.
   Depende de data.js e utils.js. */

(function () {
  "use strict";

  var C = window.Claquete;

  function preencherDestaque() {
    var item = C.buscarPorId(DESTAQUE_ID);
    if (!item) return;

    document.getElementById("destaque-fundo").style.backgroundImage =
      'url("' + C.srcBackdrop(item) + '")';
    document.getElementById("destaque-titulo").textContent = item.titulo;
    document.getElementById("destaque-meta").textContent =
      item.ano + " · " + item.duracao + " · " + item.genero;
    document.getElementById("destaque-sinopse").textContent = item.sinopse;

    var link = document.getElementById("destaque-link");
    link.href = C.urlModelo(item);
    link.setAttribute("aria-label", "Ver detalhes de " + item.titulo);
  }

  function preencherGrade(idGrade, itens, comNumero) {
    var grade = document.getElementById(idGrade);
    if (!grade) return;
    var frag = document.createDocumentFragment();
    itens.forEach(function (item, i) {
      frag.appendChild(C.criarItem(item, comNumero ? { numero: i + 1 } : null));
    });
    grade.appendChild(frag);
  }

  function iniciar() {
    preencherDestaque();

    var top3 = TOP3_IDS.map(C.buscarPorId).filter(Boolean);
    preencherGrade("grade-top3", top3, true);
    preencherGrade("grade-filmes", C.recentes("filme", 6), false);
    preencherGrade("grade-series", C.recentes("serie", 6), false);
  }

  iniciar();
})();
