/* CLAQUETE — listagem.js
   Preenche a grade de filmes ou séries (12 itens).
   O tipo vem de data-tipo na grade. Depende de data.js e utils.js. */

(function () {
  "use strict";

  var C = window.Claquete;
  var grade = document.querySelector("[data-tipo]");
  if (!grade) return;

  var itens = C.listarPorTipo(grade.dataset.tipo)
    .sort(function (a, b) {
      return b.ano - a.ano || b.id - a.id;
    })
    .slice(0, 12);

  var frag = document.createDocumentFragment();
  itens.forEach(function (item) {
    frag.appendChild(C.criarItem(item));
  });
  grade.appendChild(frag);

  var contagem = document.getElementById("contagem");
  if (contagem) contagem.textContent = String(itens.length).padStart(2, "0");
})();
