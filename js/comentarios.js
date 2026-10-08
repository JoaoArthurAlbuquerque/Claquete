/* CLAQUETE — comentarios.js
   Comentários por título, salvos em localStorage.
   Depende de data.js e utils.js. Usado em filme.html e serie.html. */

(function () {
  "use strict";

  var C = window.Claquete;
  var main = document.querySelector("[data-tipo]");
  var form = document.getElementById("comentario-form");
  if (!main || !form) return;

  var item = C.buscarPorId(C.lerIdDaUrl());
  if (!item || item.tipo !== main.dataset.tipo) return;

  var CHAVE = "claquete:comentarios";
  var NOME_MIN = 2,
    NOME_MAX = 40,
    TEXTO_MIN = 3,
    TEXTO_MAX = 500;

  var campoNome = document.getElementById("c-nome");
  var campoTexto = document.getElementById("c-texto");
  var contador = document.getElementById("c-contador");
  var aviso = document.getElementById("c-aviso");
  var lista = document.getElementById("lista-comentarios");
  var qtd = document.getElementById("comentarios-qtd");
  var titulo = document.getElementById("h-comentarios");
  titulo.tabIndex = -1;

  var memoria = {};
  var usaMemoria = false;

  var formatador = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });

  /* ---------- Armazenamento ---------- */

  function lerTudo() {
    if (usaMemoria) return memoria;
    try {
      var dados = JSON.parse(window.localStorage.getItem(CHAVE) || "{}");
      return dados && typeof dados === "object" && !Array.isArray(dados)
        ? dados
        : {};
    } catch (e) {
      if (e instanceof SyntaxError) return {};
      usaMemoria = true;
      return memoria;
    }
  }

  function gravarTudo(dados) {
    if (!usaMemoria) {
      try {
        window.localStorage.setItem(CHAVE, JSON.stringify(dados));
        return;
      } catch (e) {
        usaMemoria = true;
      }
    }
    memoria = dados;
  }

  function listar() {
    var bruta = lerTudo()[item.id];
    if (!Array.isArray(bruta)) return [];
    return bruta
      .filter(function (c) {
        return (
          c &&
          typeof c.id === "string" &&
          typeof c.nome === "string" &&
          typeof c.texto === "string" &&
          typeof c.data === "string"
        );
      })
      .sort(function (a, b) {
        return a.data < b.data ? 1 : -1;
      });
  }

  function adicionar(nome, texto) {
    var dados = lerTudo();
    var atual = Array.isArray(dados[item.id]) ? dados[item.id] : [];
    atual.push({
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      nome: nome,
      texto: texto,
      data: new Date().toISOString(),
    });
    dados[item.id] = atual;
    gravarTudo(dados);
  }

  function remover(idComentario) {
    var dados = lerTudo();
    if (!Array.isArray(dados[item.id])) return;
    dados[item.id] = dados[item.id].filter(function (c) {
      return c.id !== idComentario;
    });
    gravarTudo(dados);
  }

  /* ---------- Renderização ---------- */

  function formatarData(iso) {
    var d = new Date(iso);
    return isNaN(d.getTime()) ? "" : formatador.format(d);
  }

  function criarComentario(c) {
    var li = document.createElement("li");
    li.className = "comentario";

    var cab = document.createElement("div");
    cab.className = "comentario__cab";

    var nome = document.createElement("strong");
    nome.className = "comentario__nome";
    nome.textContent = c.nome;

    var data = document.createElement("time");
    data.className = "comentario__data";
    data.dateTime = c.data;
    data.textContent = formatarData(c.data);

    var excluir = document.createElement("button");
    excluir.type = "button";
    excluir.className = "comentario__excluir";
    excluir.dataset.id = c.id;
    excluir.textContent = "Excluir";
    excluir.setAttribute("aria-label", "Excluir comentário de " + c.nome);

    cab.appendChild(nome);
    cab.appendChild(data);
    cab.appendChild(excluir);

    var texto = document.createElement("p");
    texto.className = "comentario__texto";
    texto.textContent = c.texto;

    li.appendChild(cab);
    li.appendChild(texto);
    return li;
  }

  function renderizar() {
    var itens = listar();
    lista.textContent = "";
    qtd.textContent = String(itens.length).padStart(2, "0");

    if (!itens.length) {
      var vazio = document.createElement("li");
      vazio.className = "vazio";
      vazio.textContent =
        "Nenhum comentário ainda. Seja a primeira pessoa a comentar.";
      lista.appendChild(vazio);
      return;
    }

    var frag = document.createDocumentFragment();
    itens.forEach(function (c) {
      frag.appendChild(criarComentario(c));
    });
    lista.appendChild(frag);
  }

  /* ---------- Feedback e validação ---------- */

  function mostrarAviso(mensagem, estado) {
    aviso.textContent = mensagem;
    aviso.dataset.estado = estado || "";
  }

  function marcarInvalido(campo, invalido) {
    if (invalido) campo.setAttribute("aria-invalid", "true");
    else campo.removeAttribute("aria-invalid");
  }

  function atualizarContador() {
    contador.textContent = campoTexto.value.length + " / " + TEXTO_MAX;
  }

  function limparNome(valor) {
    return valor.replace(/\s+/g, " ").trim().slice(0, NOME_MAX);
  }

  function limparTexto(valor) {
    return valor
      .replace(/\r\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
      .slice(0, TEXTO_MAX);
  }

  /* ---------- Eventos ---------- */

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var nome = limparNome(campoNome.value);
    var texto = limparTexto(campoTexto.value);

    var nomeInvalido = nome.length < NOME_MIN;
    var textoInvalido = texto.length < TEXTO_MIN;
    marcarInvalido(campoNome, nomeInvalido);
    marcarInvalido(campoTexto, textoInvalido);

    if (nomeInvalido) {
      mostrarAviso(
        "Informe um nome com pelo menos " + NOME_MIN + " caracteres.",
        "erro",
      );
      campoNome.focus();
      return;
    }
    if (textoInvalido) {
      mostrarAviso(
        "Escreva um comentário com pelo menos " + TEXTO_MIN + " caracteres.",
        "erro",
      );
      campoTexto.focus();
      return;
    }

    adicionar(nome, texto);
    form.reset();
    atualizarContador();
    renderizar();
    mostrarAviso(
      usaMemoria
        ? "Publicado, mas o navegador bloqueou o armazenamento: o comentário vale só nesta visita."
        : "Comentário publicado.",
      "ok",
    );
  });

  campoNome.addEventListener("input", function () {
    marcarInvalido(campoNome, false);
    mostrarAviso("", "");
  });

  campoTexto.addEventListener("input", function () {
    marcarInvalido(campoTexto, false);
    mostrarAviso("", "");
    atualizarContador();
  });

  lista.addEventListener("click", function (evento) {
    var botao = evento.target.closest(".comentario__excluir");
    if (!botao) return;
    if (!window.confirm("Excluir este comentário?")) return;
    remover(botao.dataset.id);
    renderizar();
    mostrarAviso("Comentário excluído.", "ok");
    titulo.focus();
  });

  /* Outra aba alterou os comentários */
  window.addEventListener("storage", function (evento) {
    if (evento.key === CHAVE) renderizar();
  });

  atualizarContador();
  renderizar();
})();
