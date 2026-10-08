/* CLAQUETE — busca.js
   Pesquisa ao vivo no catálogo (todas as páginas).
   Depende de data.js e utils.js. */

(function () {
  "use strict";

  var C = window.Claquete;
  var form = document.querySelector("form.busca");
  var input = document.getElementById("busca-input");
  var painel = document.getElementById("busca-resultados");
  if (!form || !input || !painel) return;

  var MAX = 6;
  var MIN = 2;
  var resultados = [];
  var ativo = -1;

  /* Região para leitores de tela */
  var vivo = document.createElement("p");
  vivo.className = "sr-only";
  vivo.setAttribute("role", "status");
  form.appendChild(vivo);

  /* ARIA: padrão combobox + listbox */
  input.setAttribute("role", "combobox");
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-haspopup", "listbox");
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("aria-controls", painel.id);
  painel.setAttribute("role", "listbox");
  painel.setAttribute("aria-label", "Resultados da pesquisa");

  /* ---------- Busca ---------- */

  function normalizar(texto) {
    return String(texto)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function pontuar(item, q) {
    var titulo = normalizar(item.titulo);
    if (titulo.indexOf(q) === 0) return 3;
    if (titulo.indexOf(q) > -1) return 2;
    var outros = normalizar(
      [item.genero, item.diretor].concat(item.elenco).join(" "),
    );
    return outros.indexOf(q) > -1 ? 1 : 0;
  }

  function buscar(q) {
    return CATALOGO.map(function (item) {
      return { item: item, pontos: pontuar(item, q) };
    })
      .filter(function (r) {
        return r.pontos > 0;
      })
      .sort(function (a, b) {
        return b.pontos - a.pontos || b.item.ano - a.item.ano;
      })
      .slice(0, MAX)
      .map(function (r) {
        return r.item;
      });
  }

  /* ---------- Painel ---------- */

  function abrir() {
    painel.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }

  function fechar() {
    painel.hidden = true;
    input.setAttribute("aria-expanded", "false");
    definirAtivo(-1);
  }

  function definirAtivo(indice) {
    var opcoes = painel.querySelectorAll(".busca__op");
    if (ativo > -1 && opcoes[ativo]) {
      opcoes[ativo].classList.remove("is-ativo");
      opcoes[ativo].setAttribute("aria-selected", "false");
    }
    ativo = indice;
    if (ativo > -1 && opcoes[ativo]) {
      opcoes[ativo].classList.add("is-ativo");
      opcoes[ativo].setAttribute("aria-selected", "true");
      input.setAttribute("aria-activedescendant", opcoes[ativo].id);
    } else {
      input.removeAttribute("aria-activedescendant");
    }
  }

  function criarOpcao(item, indice) {
    var a = document.createElement("a");
    a.className = "busca__op";
    a.id = "busca-op-" + indice;
    a.href = C.urlModelo(item);
    a.tabIndex = -1;
    a.setAttribute("role", "option");
    a.setAttribute("aria-selected", "false");

    var img = document.createElement("img");
    img.src = C.srcPoster(item);
    img.alt = "";
    img.width = 36;
    img.height = 54;

    var texto = document.createElement("span");
    texto.className = "busca__op-texto";

    var titulo = document.createElement("strong");
    titulo.className = "busca__op-titulo";
    titulo.textContent = item.titulo;

    var meta = document.createElement("span");
    meta.className = "busca__op-meta";
    meta.textContent =
      (item.tipo === "serie" ? "SÉRIE" : "FILME") + " · " + item.ano;

    texto.appendChild(titulo);
    texto.appendChild(meta);
    a.appendChild(img);
    a.appendChild(texto);

    a.addEventListener("mouseenter", function () {
      definirAtivo(indice);
    });
    return a;
  }

  function renderizar(consulta) {
    painel.textContent = "";
    ativo = -1;
    input.removeAttribute("aria-activedescendant");

    if (!resultados.length) {
      var vazio = document.createElement("div");
      vazio.className = "busca__vazio";
      vazio.textContent = "Nenhum título encontrado para “" + consulta + "”.";
      painel.appendChild(vazio);
      return;
    }

    var frag = document.createDocumentFragment();
    resultados.forEach(function (item, i) {
      frag.appendChild(criarOpcao(item, i));
    });
    painel.appendChild(frag);
  }

  function atualizar() {
    var q = normalizar(input.value);
    if (q.length < MIN) {
      resultados = [];
      painel.textContent = "";
      fechar();
      vivo.textContent = "";
      return;
    }
    resultados = buscar(q);
    renderizar(input.value.trim());
    abrir();
    vivo.textContent = resultados.length
      ? resultados.length +
        (resultados.length === 1 ? " resultado" : " resultados") +
        ". Use as setas para navegar."
      : "Nenhum resultado.";
  }

  /* ---------- Eventos ---------- */

  input.addEventListener("input", atualizar);

  input.addEventListener("focus", function () {
    if (normalizar(input.value).length >= MIN) atualizar();
  });

  input.addEventListener("keydown", function (evento) {
    var n = resultados.length;

    if (evento.key === "ArrowDown") {
      if (!n) return;
      evento.preventDefault();
      if (painel.hidden) {
        abrir();
        return;
      }
      definirAtivo((ativo + 1) % n);
    } else if (evento.key === "ArrowUp") {
      if (!n) return;
      evento.preventDefault();
      if (painel.hidden) {
        abrir();
        return;
      }
      definirAtivo(ativo <= 0 ? n - 1 : ativo - 1);
    } else if (evento.key === "Escape") {
      if (!painel.hidden) {
        evento.preventDefault();
        fechar();
      }
    }
  });

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    var q = normalizar(input.value);

    if (q.length < MIN) {
      vivo.textContent = "Digite pelo menos " + MIN + " letras para pesquisar.";
      input.focus();
      return;
    }

    var alvo = resultados[ativo > -1 ? ativo : 0];
    if (alvo) {
      window.location.href = C.urlModelo(alvo);
    } else {
      atualizar();
    }
  });

  form.addEventListener("focusout", function (evento) {
    if (!form.contains(evento.relatedTarget)) fechar();
  });
  /* Safari não foca links ao clicar: evita fechar o painel antes do clique */
  painel.addEventListener("mousedown", function (evento) {
    evento.preventDefault();
  });
})();
