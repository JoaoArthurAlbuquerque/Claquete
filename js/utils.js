/* CLAQUETE — utils.js
   Depende de data.js (CATALOGO). Tudo exposto em window.Claquete.
   Sem módulos e sem fetch: funciona abrindo o HTML por file://. */

(function () {
  "use strict";

  const PALETAS = [
    { bg: "#1F3A3D", ac: "#E0B84C" },
    { bg: "#3B1F2B", ac: "#E8A87C" },
    { bg: "#22223B", ac: "#F2C14E" },
    { bg: "#2D3A1F", ac: "#D7263D" },
    { bg: "#4A1C1C", ac: "#F2EFE8" },
    { bg: "#1C1C1C", ac: "#D7263D" },
    { bg: "#3A3A2A", ac: "#E07A5F" },
    { bg: "#16324F", ac: "#F4D35E" },
  ];
  const TEXTO = "#F2EFE8";

  /* ---------- Helpers ---------- */

  function escaparHTML(valor) {
    return String(valor)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function lerIdDaUrl() {
    const id = Number(new URLSearchParams(window.location.search).get("id"));
    return Number.isInteger(id) && id > 0 ? id : null;
  }

  function buscarPorId(id) {
    return (
      CATALOGO.find(function (i) {
        return i.id === id;
      }) || null
    );
  }

  function listarPorTipo(tipo) {
    return CATALOGO.filter(function (i) {
      return i.tipo === tipo;
    });
  }

  /* Mais recentes primeiro (ano desc; empate: id desc) */
  function recentes(tipo, quantidade) {
    return listarPorTipo(tipo)
      .sort(function (a, b) {
        return b.ano - a.ano || b.id - a.id;
      })
      .slice(0, quantidade);
  }

  function urlModelo(item) {
    return (
      (item.tipo === "serie" ? "serie.html" : "filme.html") + "?id=" + item.id
    );
  }

  /* ---------- Gerador de pôster/backdrop em SVG ---------- */

  function quebrarLinhas(texto, max) {
    const linhas = [];
    let atual = "";
    texto.split(" ").forEach(function (palavra) {
      if (!atual) {
        atual = palavra;
        return;
      }
      if ((atual + " " + palavra).length <= max) {
        atual += " " + palavra;
      } else {
        linhas.push(atual);
        atual = palavra;
      }
    });
    if (atual) linhas.push(atual);
    return linhas;
  }

  /* Forma geométrica dentro da caixa (bx, by, bw, bh) */
  function forma(k, bx, by, bw, bh, cor) {
    let s = "";
    if (k === 0) {
      s =
        '<circle cx="' +
        (bx + bw / 2) +
        '" cy="' +
        (by + bh / 2) +
        '" r="' +
        Math.min(bw, bh) / 2 +
        '" fill="' +
        cor +
        '"/>';
    } else if (k === 1) {
      for (let i = 0; i < 3; i++) {
        const h = bh * (0.5 + 0.25 * i);
        s +=
          '<rect x="' +
          (bx + i * bw * 0.37) +
          '" y="' +
          (by + bh - h) +
          '" width="' +
          bw * 0.26 +
          '" height="' +
          h +
          '" fill="' +
          cor +
          '"/>';
      }
    } else if (k === 2) {
      s =
        '<polygon points="' +
        (bx + bw) +
        "," +
        by +
        " " +
        (bx + bw) +
        "," +
        (by + bh) +
        " " +
        bx +
        "," +
        (by + bh) +
        '" fill="' +
        cor +
        '"/>';
    } else {
      for (let i = 0; i < 4; i++) {
        s +=
          '<rect x="' +
          bx +
          '" y="' +
          (by + i * bh * 0.29) +
          '" width="' +
          bw * (1 - 0.15 * i) +
          '" height="' +
          bh * 0.14 +
          '" fill="' +
          cor +
          '"/>';
      }
    }
    return s;
  }

  function paraDataUri(svg) {
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function rotuloTipo(item) {
    return item.tipo === "serie" ? "SÉRIE" : "FILME";
  }

  function gerarPoster(item) {
    const W = 400,
      H = 600;
    const cor = PALETAS[item.id % PALETAS.length];
    const k = Math.floor(item.id / 2) % 4;
    const linhas = quebrarLinhas(item.titulo.toUpperCase(), 11);
    const maior = Math.max.apply(
      null,
      linhas.map(function (l) {
        return l.length;
      }),
    );
    const tam = Math.min(54, Math.floor(330 / (maior * 0.75)));
    const yIni = 480 - (linhas.length - 1) * tam * 1.1;

    let titulo = "";
    linhas.forEach(function (l, i) {
      titulo +=
        '<text x="36" y="' +
        (yIni + i * tam * 1.1) +
        '" font-size="' +
        tam +
        '">' +
        escaparHTML(l) +
        "</text>";
    });

    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' +
      W +
      " " +
      H +
      '" width="' +
      W +
      '" height="' +
      H +
      '">' +
      '<rect width="' +
      W +
      '" height="' +
      H +
      '" fill="' +
      cor.bg +
      '"/>' +
      '<rect x="16" y="16" width="368" height="568" fill="none" stroke="' +
      TEXTO +
      '" stroke-width="1"/>' +
      '<text x="36" y="52" font-family="Courier New, monospace" font-size="14" letter-spacing="3" fill="' +
      TEXTO +
      '">' +
      rotuloTipo(item) +
      "</text>" +
      forma(k, 60, 90, 280, 210, cor.ac) +
      '<g font-family="Georgia, Times New Roman, serif" font-weight="700" fill="' +
      TEXTO +
      '">' +
      titulo +
      "</g>" +
      '<text x="36" y="558" font-family="Courier New, monospace" font-size="16" letter-spacing="2" fill="' +
      cor.ac +
      '">' +
      item.ano +
      "</text>" +
      "</svg>";
    return paraDataUri(svg);
  }

  function gerarBackdrop(item) {
    const W = 1280,
      H = 720;
    const cor = PALETAS[item.id % PALETAS.length];
    const k = Math.floor(item.id / 2) % 4;
    const linhas = quebrarLinhas(item.titulo.toUpperCase(), 12);
    const maior = Math.max.apply(
      null,
      linhas.map(function (l) {
        return l.length;
      }),
    );
    const tam = Math.min(88, Math.floor(600 / (maior * 0.75)));
    const yIni = 400 - (linhas.length - 1) * tam * 0.55;

    let titulo = "";
    linhas.forEach(function (l, i) {
      titulo +=
        '<text x="80" y="' +
        (yIni + i * tam * 1.1) +
        '" font-size="' +
        tam +
        '">' +
        escaparHTML(l) +
        "</text>";
    });

    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' +
      W +
      " " +
      H +
      '" width="' +
      W +
      '" height="' +
      H +
      '">' +
      '<rect width="' +
      W +
      '" height="' +
      H +
      '" fill="' +
      cor.bg +
      '"/>' +
      '<rect x="24" y="24" width="' +
      (W - 48) +
      '" height="' +
      (H - 48) +
      '" fill="none" stroke="' +
      TEXTO +
      '" stroke-width="1"/>' +
      '<text x="80" y="90" font-family="Courier New, monospace" font-size="20" letter-spacing="5" fill="' +
      TEXTO +
      '">' +
      rotuloTipo(item) +
      "</text>" +
      forma(k, 700, 110, 480, 500, cor.ac) +
      '<g font-family="Georgia, Times New Roman, serif" font-weight="700" fill="' +
      TEXTO +
      '">' +
      titulo +
      "</g>" +
      '<text x="80" y="650" font-family="Courier New, monospace" font-size="22" letter-spacing="3" fill="' +
      cor.ac +
      '">' +
      item.ano +
      "</text>" +
      "</svg>";
    return paraDataUri(svg);
  }

  function srcPoster(item) {
    return item.poster || gerarPoster(item);
  }
  function srcBackdrop(item) {
    return item.backdrop || gerarBackdrop(item);
  }

  /* ---------- Componente de item (pôster + título + ano) ---------- */

  /* opcoes.numero: se informado, sobrepõe o número à imagem (TOP 3) */
  function criarItem(item, opcoes) {
    const numero = opcoes && opcoes.numero;
    const href = urlModelo(item);

    const article = document.createElement("article");
    article.className = "item";

    const linkImg = document.createElement("a");
    linkImg.className = "item__midia";
    linkImg.href = href;
    linkImg.tabIndex = -1;
    linkImg.setAttribute("aria-hidden", "true");

    const img = document.createElement("img");
    img.src = srcPoster(item);
    img.alt = "Pôster de " + item.titulo;
    img.width = 400;
    img.height = 600;
    img.loading = "lazy";
    linkImg.appendChild(img);

    if (numero) {
      const n = document.createElement("span");
      n.className = "item__num";
      n.textContent = numero;
      linkImg.appendChild(n);
    }

    const h3 = document.createElement("h3");
    h3.className = "item__titulo";
    const linkTitulo = document.createElement("a");
    linkTitulo.href = href;
    if (numero) {
      const sr = document.createElement("span");
      sr.className = "sr-only";
      sr.textContent = "Posição " + numero + ": ";
      linkTitulo.appendChild(sr);
    }
    linkTitulo.appendChild(document.createTextNode(item.titulo));
    h3.appendChild(linkTitulo);

    const meta = document.createElement("p");
    meta.className = "item__meta";
    meta.textContent = item.ano + " · " + item.genero;

    article.appendChild(linkImg);
    article.appendChild(h3);
    article.appendChild(meta);
    return article;
  }

  window.Claquete = {
    escaparHTML: escaparHTML,
    lerIdDaUrl: lerIdDaUrl,
    buscarPorId: buscarPorId,
    listarPorTipo: listarPorTipo,
    recentes: recentes,
    urlModelo: urlModelo,
    gerarPoster: gerarPoster,
    gerarBackdrop: gerarBackdrop,
    srcPoster: srcPoster,
    srcBackdrop: srcBackdrop,
    criarItem: criarItem,
  };
})();
