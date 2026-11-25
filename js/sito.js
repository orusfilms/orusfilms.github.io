/* Orus Distribution – script del sito
   - lingua IT / EN
   - progetti letti da data/progetti.json (Home, Progetti in distribuzione, Profilo)
   - trailer YouTube caricato solo al clic */
(function () {
  'use strict';

  // ---------- Impostazioni ----------
  // Selezioni e festival: per ora nascosti (decisione del 25/11/2026). Metti true per mostrarli
  // di nuovo sotto le schede dei progetti, nel filtro "Con selezioni" e nel profilo.
  var MOSTRA_SELEZIONI = false;

  // ---------- Testi dell'interfaccia ----------
  var T = {
    it: {
      menu_progetti: 'Progetti in distribuzione', menu_servizi: 'Servizi', menu_films: 'Orus Films',
      menu_chi: 'Chi siamo', menu_contatti: 'Contatti', menu_invia: 'Invia il tuo corto', menu: 'Menu',
      home_occhiello: 'Distribuzione festivaliera di cortometraggi',
      home_titolo: 'Portiamo il tuo corto dove deve essere visto.',
      home_testo: 'Strategia festival, iscrizioni e follow-up per registi e produzioni. Ogni film ha il suo percorso: lo costruiamo insieme, festival dopo festival.',
      home_in_distr: 'In distribuzione', home_in_distr_titolo: 'I nostri film nei festival', home_tutti: 'Tutti i progetti →',
      servizi_titolo: 'Cosa facciamo per il tuo film',
      s1_t: 'Strategia festival', s1_p: 'Scegliamo i festival adatti al film, alle sue premiere e al budget, con un calendario chiaro.',
      s2_t: 'Iscrizioni', s2_p: 'Gestiamo piattaforme, materiali, sottotitoli e scadenze, senza che tu debba pensarci.',
      s3_t: 'Selezioni e premi', s3_p: 'Seguiamo ogni selezione: proiezioni, ospitalità, comunicazione e laurels.',
      s4_t: 'Report', s4_p: 'Ricevi aggiornamenti periodici su iscrizioni, esiti e prossimi passi.',
      films_titolo: 'Produciamo anche le nostre storie.',
      films_testo: 'Orus Films è la casa di produzione di Orus: sviluppiamo e realizziamo cortometraggi e progetti audiovisivi con giovani autori.',
      chi_titolo: 'Chi siamo',
      chi_testo: 'Orus nasce dall’incontro tra persone che scrivono, producono e distribuiscono cinema. Seguiamo ogni film come se fosse nostro, dalla prima iscrizione all’ultima proiezione.',
      invia_titolo: 'Hai un cortometraggio? Raccontacelo.',
      invia_testo: 'Mandaci il link di visione e due righe sul film. Ti rispondiamo con una prima valutazione del suo percorso nei festival.',
      invia_pulsante: 'Proponi il tuo corto',
      piede_scrivici: 'Scrivici', piede_seguici: 'Seguici', piede_sito: 'Sito',
      progetti_testo: 'I cortometraggi che stiamo accompagnando nei festival in Italia e all’estero. Ogni film ha il suo profilo con sinossi, crew, selezioni e trailer.',
      filtro_tutti: 'Tutti', filtro_selezioni: 'Con selezioni',
      locandina_arrivo: 'Locandina in arrivo', selezioni: 'selezioni', in_distribuzione: 'In distribuzione',
      indietro: '← Progetti in distribuzione', di: 'di', cortometraggio: 'Cortometraggio',
      guarda_trailer: 'Guarda il trailer', scarica_presskit: 'Scarica il press kit',
      sinossi: 'Sinossi', note: 'Note di regia', festival: 'Festival e selezioni', trailer: 'Trailer',
      crew: 'Cast e crew', tecnica: 'Scheda tecnica', regista: 'Il regista',
      t_titolo_int: 'Titolo internazionale', t_produzione: 'Produzione', t_paese: 'Paese', t_anno: 'Anno',
      t_durata: 'Durata', t_formato: 'Formato', t_lingua: 'Lingua',
      video_nota: 'YouTube · si carica al clic', non_trovato: 'Progetto non trovato.',
      riproduci: 'Riproduci il trailer di', locandina_di: 'Locandina di',
      trailer_arrivo: 'Trailer in arrivo',
      proponi_testo: 'Compila il modulo con i dati del film e un link per vederlo. Valutiamo ogni proposta e ti ricontattiamo con una prima idea del suo percorso nei festival.',
      proponi_nota: 'I campi con * sono obbligatori. Se il film è protetto da password, indicala: la useremo solo per la visione.',
      f_email: 'Email', f_nome: 'Nome e cognome', f_tel: 'Numero di telefono', f_indirizzo: 'Indirizzo',
      f_progetto: 'Nome del progetto', f_link: 'Link al video', f_password: 'Password (eventuale)', f_commenti: 'Commenti',
      f_consenso: 'Acconsento all’uso dei miei dati per essere ricontattato da Orus Distribution riguardo a questa proposta.',
      f_invia: 'Invia la proposta', f_invio: 'Invio in corso…',
      err_campi: 'Compila tutti i campi obbligatori (*) e controlla email e link.', err_consenso: 'Per inviare la proposta serve il consenso.',
      err_rete: 'Invio non riuscito. Controlla la connessione e riprova, oppure scrivici a orus.distribution@gmail.com.',
      grazie_titolo: 'Grazie, abbiamo ricevuto la tua proposta.',
      grazie_testo: 'La guardiamo con attenzione e ti rispondiamo all’indirizzo email che ci hai lasciato.',
      piede_cookie: 'Questo sito non usa cookie di profilazione. I trailer YouTube si caricano solo se premi play.'
    },
    en: {
      menu_progetti: 'Films in distribution', menu_servizi: 'Services', menu_films: 'Orus Films',
      menu_chi: 'About us', menu_contatti: 'Contact', menu_invia: 'Submit your film', menu: 'Menu',
      home_occhiello: 'Festival distribution for short films',
      home_titolo: 'We take your short where it needs to be seen.',
      home_testo: 'Festival strategy, submissions and follow-up for directors and producers. Every film has its own path: we build it together, festival after festival.',
      home_in_distr: 'In distribution', home_in_distr_titolo: 'Our films on the festival circuit', home_tutti: 'All films →',
      servizi_titolo: 'What we do for your film',
      s1_t: 'Festival strategy', s1_p: 'We pick the right festivals for the film, its premiere status and budget, with a clear calendar.',
      s2_t: 'Submissions', s2_p: 'We handle platforms, materials, subtitles and deadlines, so you don’t have to.',
      s3_t: 'Selections and awards', s3_p: 'We follow every selection: screenings, hospitality, communication and laurels.',
      s4_t: 'Reports', s4_p: 'You get regular updates on submissions, results and next steps.',
      films_titolo: 'We also produce our own stories.',
      films_testo: 'Orus Films is Orus’s production company: we develop and make short films and audiovisual projects with young filmmakers.',
      chi_titolo: 'About us',
      chi_testo: 'Orus was born from people who write, produce and distribute films. We follow every film as if it were our own, from the first submission to the last screening.',
      invia_titolo: 'Got a short film? Tell us about it.',
      invia_testo: 'Send us a screener link and a few lines about the film. We’ll reply with a first assessment of its festival path.',
      invia_pulsante: 'Submit your short',
      piede_scrivici: 'Write to us', piede_seguici: 'Follow us', piede_sito: 'Site',
      progetti_testo: 'The short films we are taking to festivals in Italy and abroad. Each film has its own page with synopsis, crew, selections and trailer.',
      filtro_tutti: 'All', filtro_selezioni: 'With selections',
      locandina_arrivo: 'Poster coming soon', selezioni: 'selections', in_distribuzione: 'In distribution',
      indietro: '← Films in distribution', di: 'by', cortometraggio: 'Short film',
      guarda_trailer: 'Watch the trailer', scarica_presskit: 'Download the press kit',
      sinossi: 'Synopsis', note: 'Director’s statement', festival: 'Festivals and selections', trailer: 'Trailer',
      crew: 'Cast and crew', tecnica: 'Technical details', regista: 'The director',
      t_titolo_int: 'International title', t_produzione: 'Production', t_paese: 'Country', t_anno: 'Year',
      t_durata: 'Running time', t_formato: 'Format', t_lingua: 'Language',
      video_nota: 'YouTube · loads on click', non_trovato: 'Film not found.',
      riproduci: 'Play the trailer of', locandina_di: 'Poster of',
      trailer_arrivo: 'Trailer coming soon',
      proponi_testo: 'Fill in the form with your film’s details and a screener link. We review every submission and get back to you with a first idea of its festival path.',
      proponi_nota: 'Fields marked * are required. If the film is password-protected, add the password: we will only use it to watch the film.',
      f_email: 'Email', f_nome: 'Full name', f_tel: 'Phone number', f_indirizzo: 'Address',
      f_progetto: 'Project title', f_link: 'Screener link', f_password: 'Password (if any)', f_commenti: 'Comments',
      f_consenso: 'I agree that Orus Distribution may use my details to contact me about this submission.',
      f_invia: 'Send submission', f_invio: 'Sending…',
      err_campi: 'Please fill in all required fields (*) and check the email and link.', err_consenso: 'Your consent is required to send the submission.',
      err_rete: 'Sending failed. Check your connection and try again, or write to orus.distribution@gmail.com.',
      grazie_titolo: 'Thank you, we received your submission.',
      grazie_testo: 'We’ll watch it carefully and reply to the email address you gave us.',
      piede_cookie: 'This site uses no profiling cookies. YouTube trailers load only when you press play.'
    }
  };

  // ---------- Lingua ----------
  var parametri = new URLSearchParams(location.search);
  var lingua = parametri.get('lang');
  if (lingua !== 'it' && lingua !== 'en') {
    try { lingua = localStorage.getItem('orus_lingua'); } catch (e) { lingua = null; }
  }
  if (lingua !== 'it' && lingua !== 'en') lingua = (navigator.language || 'it').toLowerCase().indexOf('it') === 0 ? 'it' : 'en';

  function t(chiave) { return (T[lingua] && T[lingua][chiave]) || T.it[chiave] || chiave; }
  function campo(oggetto) { // testo nella lingua scelta, con ripiego sull'italiano
    if (!oggetto) return '';
    if (typeof oggetto === 'string') return oggetto;
    return oggetto[lingua] || oggetto.it || '';
  }
  function tr(s) { // poche parole fisse dei dati tradotte in inglese
    if (lingua !== 'en' || !s) return s;
    return String(s).replace(/Bianco e nero/g, 'Black and white').replace(/Colore/g, 'Colour').replace(/colore/g, 'colour').replace(/^Italia$/, 'Italy');
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function applicaLingua() {
    document.documentElement.lang = lingua;
    document.querySelectorAll('[data-t]').forEach(function (el) { el.textContent = t(el.getAttribute('data-t')); });
    document.querySelectorAll('.lingua').forEach(function (b) {
      b.innerHTML = lingua === 'it' ? '<b>IT</b> / EN' : 'IT / <b>EN</b>';
      b.setAttribute('aria-label', lingua === 'it' ? 'Switch to English' : 'Passa all’italiano');
    });
  }

  function cambiaLingua() {
    lingua = lingua === 'it' ? 'en' : 'it';
    try { localStorage.setItem('orus_lingua', lingua); } catch (e) { /* niente */ }
    applicaLingua();
    disegna();
  }

  // ---------- Menu sul telefono ----------
  function preparaMenu() {
    var bottone = document.querySelector('.apri-menu');
    var menu = document.querySelector('.menu');
    if (bottone && menu) {
      bottone.addEventListener('click', function () {
        var aperto = menu.classList.toggle('aperto');
        bottone.setAttribute('aria-expanded', aperto ? 'true' : 'false');
      });
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { menu.classList.remove('aperto'); bottone.setAttribute('aria-expanded', 'false'); });
      });
    }
    document.querySelectorAll('.lingua').forEach(function (b) { b.addEventListener('click', cambiaLingua); });
  }

  // ---------- Dati ----------
  var progetti = null;
  function caricaProgetti() {
    return fetch('data/progetti.json', { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (d) { progetti = d.progetti || []; return progetti; });
  }

  function riconoscimenti(p) {
    var n = (p.festival || []).length;
    if (n === 0) return t('in_distribuzione');
    if (n === 1) return campo(p.festival[0]) + ' · ' + p.festival[0].nome;
    return n + ' ' + t('selezioni');
  }
  function titolo(p) { return lingua === 'en' && p.titolo_en ? p.titolo_en : p.titolo; }

  function htmlLocandina(p, classe) {
    if (p.locandina) {
      return '<img class="' + classe + '" src="' + esc(p.locandina) + '" alt="' + esc(t('locandina_di') + ' ' + titolo(p)) + '" loading="lazy">';
    }
    return '<div class="senza-locandina"><img src="img/occhio.png" alt=""><span>' + esc(titolo(p)) +
      '</span><small class="occhiello" style="font-size:11px">' + esc(t('locandina_arrivo')) + '</small></div>';
  }

  function htmlScheda(p) {
    return '<a class="scheda" href="progetto.html?id=' + encodeURIComponent(p.id) + '">' +
      htmlLocandina(p, 'locandina') +
      '<div style="display:flex;flex-direction:column;gap:6px">' +
      '<h3>' + esc(titolo(p)) + '</h3>' +
      '<p>' + esc(p.regia) + ' · ' + esc(p.anno) + ' · ' + esc(p.durata) + '</p>' +
      (MOSTRA_SELEZIONI ? '<p class="riconoscimenti">' + esc(riconoscimenti(p)) + '</p>' : '') +
      '</div></a>';
  }

  // ---------- Pagine ----------
  var filtro = 'tutti';

  function disegnaHome() {
    var box = document.getElementById('progetti-home');
    if (!box || !progetti) return;
    var scelti = progetti.filter(function (p) { return p.inHome; }).slice(0, 4);
    if (!scelti.length) scelti = progetti.slice(0, 4);
    box.innerHTML = scelti.map(htmlScheda).join('');
  }

  function disegnaElenco() {
    var box = document.getElementById('elenco-progetti');
    if (!box || !progetti) return;
    var anni = [];
    progetti.forEach(function (p) { if (anni.indexOf(p.anno) === -1) anni.push(p.anno); });
    anni.sort(function (a, b) { return b - a; });
    var filtri = [['tutti', t('filtro_tutti')]].concat(anni.map(function (a) { return [String(a), String(a)]; }), MOSTRA_SELEZIONI ? [['selezioni', t('filtro_selezioni')]] : []);
    document.getElementById('filtri').innerHTML = filtri.map(function (f) {
      return '<button type="button" data-filtro="' + f[0] + '" aria-pressed="' + (filtro === f[0]) + '">' + esc(f[1]) + '</button>';
    }).join('');
    document.querySelectorAll('[data-filtro]').forEach(function (b) {
      b.addEventListener('click', function () { filtro = b.getAttribute('data-filtro'); disegnaElenco(); });
    });
    var lista = progetti.filter(function (p) {
      if (filtro === 'tutti') return true;
      if (filtro === 'selezioni') return (p.festival || []).length > 0;
      return String(p.anno) === filtro;
    });
    box.innerHTML = lista.map(htmlScheda).join('');
  }

  function disegnaProfilo() {
    var box = document.getElementById('profilo');
    if (!box || !progetti) return;
    var id = parametri.get('id');
    var p = progetti.filter(function (x) { return x.id === id; })[0];
    if (!p) { box.innerHTML = '<div class="contenitore" style="padding:120px 40px"><p class="titolo-m">' + esc(t('non_trovato')) + '</p></div>'; return; }

    document.title = titolo(p) + ' – ' + p.regia + ' | Orus Distribution';
    var descr = document.querySelector('meta[name="description"]');
    if (descr) descr.setAttribute('content', campo(p.sinossi_breve));

    var lungo = titolo(p).length > 16 ? ' lungo' : '';
    var sinossi = campo(p.sinossi) || campo(p.sinossi_breve);
    var bio = campo(p.bio);
    var idVideo = p.trailer ? encodeURIComponent(p.trailer) : '';
    var h = '<div class="contenitore profilo">';

    h += '<a class="indietro" href="progetti.html">' + esc(t('indietro')) + '</a>';

    // 1. Locandina a sinistra, titolo e sinossi a destra
    h += '<section class="p-apertura">' + htmlLocandina(p, 'locandina-grande') +
      '<div class="p-testi">' +
      '<p class="occhiello">' + esc(t('cortometraggio') + ' · ' + campo(p.genere) + ' · ' + p.anno + ' · ' + p.durata) + '</p>' +
      '<h1 class="profilo-titolo' + lungo + '">' + esc(titolo(p)) + '</h1>' +
      '<p class="p-regia">' + esc(t('di') + ' ' + p.regia) + '</p>' +
      '<p class="p-sinossi">' + esc(sinossi) + '</p>' +
      (p.presskit ? '<div><a class="pulsante vuoto piccolo" href="' + esc(p.presskit) + '" target="_blank" rel="noopener">' + esc(t('scarica_presskit')) + '</a></div>' : '') +
      '</div></section>';

    // 2. Trailer da una parte, regista dall'altra
    h += '<section class="p-centro">';
    h += '<div class="p-trailer" id="trailer"><p class="occhiello">' + esc(t('trailer')) + '</p>';
    if (idVideo) {
      h += '<div class="video" id="video"><button type="button" aria-label="' + esc(t('riproduci') + ' ' + titolo(p)) + '">' +
        '<img src="https://i.ytimg.com/vi/' + idVideo + '/hqdefault.jpg" alt="" loading="lazy">' +
        '<span class="play"><svg aria-hidden="true" width="28" height="28" viewBox="0 0 16 16"><path d="M4 2.5v11l9-5.5z" fill="#0A0A0A"/></svg></span>' +
        '</button><span class="nota">' + esc(t('video_nota')) + '</span></div>';
    } else {
      h += '<div class="video in-arrivo"><img src="img/occhio.png" alt=""><span>' + esc(t('trailer_arrivo')) + '</span></div>';
    }
    h += '</div>';
    h += '<div class="p-regista"><p class="occhiello">' + esc(t('regista')) + '</p>' +
      '<div class="p-regista-testa">' +
      (p.foto_regista ? '<img class="foto-regista" src="' + esc(p.foto_regista) + '" alt="' + esc(p.regia) + '" loading="lazy">' : '') +
      '<h2>' + esc(p.regia) + '</h2></div>' +
      (bio ? '<p>' + esc(bio) + '</p>' : '') + '</div>';
    h += '</section>';

    // (facoltativo) selezioni
    if (MOSTRA_SELEZIONI && (p.festival || []).length) {
      h += '<section class="p-dettagli"><div class="p-blocco" style="grid-column:1/-1"><p class="occhiello">' + esc(t('festival')) + '</p><div class="elenco-festival">' +
        p.festival.map(function (f) { return '<div><span>' + esc(f.nome) + '</span><span>' + esc(campo(f)) + '</span></div>'; }).join('') +
        '</div></div></section>';
    }

    // 3. Sotto: scheda tecnica e cast & crew
    var crew = p.crew || [];
    var tecnica = [
      [t('t_titolo_int'), p.titolo_en], [t('t_produzione'), p.produzione], [t('t_paese'), tr(p.paese)],
      [t('t_anno'), p.anno], [t('t_durata'), p.durata], [t('t_formato'), tr(p.formato)], [t('t_lingua'), campo(p.lingua)]
    ].filter(function (r) { return r[1]; });
    h += '<section class="p-dettagli">' +
      '<div class="p-blocco"><p class="occhiello">' + esc(t('tecnica')) + '</p><dl class="scheda-tecnica">' +
      tecnica.map(function (r) { return '<dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd>'; }).join('') + '</dl></div>' +
      (crew.length ? '<div class="p-blocco"><p class="occhiello">' + esc(t('crew')) + '</p><dl class="scheda-tecnica">' +
        crew.map(function (r) { return '<dt>' + esc(lingua === 'en' ? r[1] : r[0]) + '</dt><dd>' + esc(r[2]) + '</dd>'; }).join('') + '</dl></div>' : '') +
      '</section>';

    h += '</div>';
    box.innerHTML = h;

    var video = document.getElementById('video');
    if (video) {
      video.querySelector('button').addEventListener('click', function () {
        video.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + idVideo +
          '?autoplay=1&rel=0" title="' + esc(t('trailer') + ' – ' + titolo(p)) +
          '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
      });
    }
  }

  function disegna() { disegnaHome(); disegnaElenco(); disegnaProfilo(); }

  // ---------- Modulo "Proponi il tuo corto" ----------
  // I dati vanno nel modulo Google delle proposte (stesse domande, stesso foglio risposte,
  // stessa notifica). Se nel modulo Google si aggiunge o si cambia una domanda, va aggiornato
  // anche proponi.html (gli identificativi "entry.XXXX").
  var MODULO_GOOGLE = 'https://docs.google.com/forms/d/e/1FAIpQLSfGQFNwrbSfHFvVYClT97Hg_4LafMhqb1AuNEmvhgbYvV4lTQ/formResponse';
  function preparaModulo() {
    var form = document.getElementById('modulo-proposta');
    if (!form) return;
    var errore = document.getElementById('modulo-errore');
    var bottone = document.getElementById('modulo-invia');
    function mostraErrore(chiave) { errore.textContent = t(chiave); errore.hidden = false; }
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      errore.hidden = true;
      if (form.elements.sito.value) return; // trappola anti-spam: le persone non la vedono
      var ok = true;
      form.querySelectorAll('input[required]:not([type=checkbox]), textarea[required]').forEach(function (el) {
        var valido = el.value.trim() !== '' && el.checkValidity();
        el.setAttribute('aria-invalid', valido ? 'false' : 'true');
        if (!valido) ok = false;
      });
      if (!ok) { mostraErrore('err_campi'); form.querySelector('[aria-invalid="true"]').focus(); return; }
      if (!document.getElementById('f-consenso').checked) { mostraErrore('err_consenso'); return; }
      var dati = new URLSearchParams();
      form.querySelectorAll('input[name], textarea[name]').forEach(function (el) {
        if (el.name !== 'sito' && el.value.trim()) dati.append(el.name, el.value.trim());
      });
      bottone.disabled = true; bottone.textContent = t('f_invio');
      fetch(MODULO_GOOGLE, { method: 'POST', mode: 'no-cors', body: dati })
        .then(function () {
          form.hidden = true;
          var grazie = document.getElementById('modulo-grazie');
          grazie.hidden = false; grazie.focus();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch(function () { mostraErrore('err_rete'); })
        .then(function () { bottone.disabled = false; bottone.textContent = t('f_invia'); });
    });
  }

  // ---------- Avvio ----------
  document.addEventListener('DOMContentLoaded', function () {
    preparaMenu();
    applicaLingua();
    preparaModulo();
    var anno = document.getElementById('anno');
    if (anno) anno.textContent = new Date().getFullYear();
    if (document.getElementById('progetti-home') || document.getElementById('elenco-progetti') || document.getElementById('profilo')) {
      caricaProgetti().then(disegna).catch(function () {
        var box = document.getElementById('progetti-home') || document.getElementById('elenco-progetti') || document.getElementById('profilo');
        box.innerHTML = '<p style="color:#A3A3A3">I progetti non si sono caricati. Se hai aperto il file dal computer, prova dalla versione online.</p>';
      });
    }
  });
})();
