/* ============================================================
   METANOÏA — Application mobile (prototype interactif)
   Charte graphique · Édition 2026
   ============================================================ */

const I = {
  home: '<path d="M12 3 2 11h3v9h6v-6h2v6h6v-9h3L12 3z"/>',
  sermon: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 14V8l6 4-6 4z"/>',
  prayer: '<path d="M12 21s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 3.5C20 16.2 12 21 12 21z"/>',
  bible: '<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1zm0 0v14"/>',
  gift: '<path d="M20 6h-2.2A3 3 0 0 0 12 2.8 3 3 0 0 0 6.2 6H4a2 2 0 0 0-2 2v2h20V8a2 2 0 0 0-2-2zM12 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM4 12v8a2 2 0 0 0 2 2h5v-10H4zm9 10h5a2 2 0 0 0 2-2v-8h-7v10z"/>',
  bell: '<path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6v-5a6 6 0 0 0-5-5.9V4a1 1 0 0 0-2 0v1.1A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z"/>',
  calendar: '<path d="M19 4h-1V2h-2v2H8V2H6v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10h16v9z"/>',
  search: '<path d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 1 0-.7.7l.3.3v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/>',
  user: '<path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.4 0-8 2.2-8 5v2h16v-2c0-2.8-3.6-5-8-5z"/>',
  left: '<path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6 4.6-4.6z"/>',
  right: '<path d="M8.6 7.4 10 6l6 6-6 6-1.4-1.4 4.6-4.6-4.6-4.6z"/>',
  arrow: '<path d="M13 5l7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5z"/>',
  qr: '<path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm8-2h3v3h-3v-3zm5 0h3v3h-3v-3zm-5 5h3v3h-3v-3zm5 0h3v3h-3v-3z"/>',
  share: '<path d="M18 16a3 3 0 0 0-2.4 1.2l-6.7-3.9a3 3 0 0 0 0-2.6l6.7-3.9A3 3 0 1 0 15 5a3 3 0 0 0 .1.8L8.4 9.7a3 3 0 1 0 0 4.6l6.7 3.9A3 3 0 1 0 18 16z"/>',
  heart: '<path d="M12 21s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 3.5C20 16.2 12 21 12 21z"/>',
  check: '<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>',
  plus: '<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>',
  play: '<path d="M8 5v14l11-7z"/>',
  pause: '<path d="M6 5h4v14H6zm8 0h4v14h-4z"/>',
  prev: '<path d="M6 6h2v12H6zm3.5 6 8.5 6V6l-8.5 6z"/>',
  next: '<path d="M16 6h2v12h-2zM6 18l8.5-6L6 6v12z"/>',
  lock: '<path d="M18 8h-1V6a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 0 1 6 0v2H9V6zm3 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>',
  mail: '<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>',
  phone: '<path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11 11 0 0 0 3.4.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .6 3.4 1 1 0 0 1-.2 1L6.6 10.8z"/>',
  settings: '<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-4a8 8 0 0 0-.1-1.2l2-1.5-2-3.5-2.4 1a8 8 0 0 0-2-1.2L14.9 2H9.1l-.6 2.6a8 8 0 0 0-2 1.2l-2.4-1-2 3.5 2 1.5A8 8 0 0 0 4 10v0a8 8 0 0 0 .1 1.2l-2 1.5 2 3.5 2.4-1a8 8 0 0 0 2 1.2l.6 2.6h5.8l.6-2.6a8 8 0 0 0 2-1.2l2.4 1 2-3.5-2-1.5A8 8 0 0 0 20 10z"/>',
  logout: '<path d="M10 17l5-5-5-5v3H2v4h8v3zm9-15H10a2 2 0 0 0-2 2v3h2V4h9v16h-9v-3H8v3a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>',
  globe: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM4 11h3.1a13 13 0 0 1 1.3-4.3A8 8 0 0 0 4 11zm4.4 2H4a8 8 0 0 0 4.4 4.3A13 13 0 0 1 8.4 13zM12 4a10 10 0 0 0-2.9 5.8h5.8A10 10 0 0 0 12 4zm3.6 2.7A13 13 0 0 1 16.9 11H20a8 8 0 0 0-4.4-4.3zM20 13h-3.1a13 13 0 0 1-1.3 4.3A8 8 0 0 0 20 13zM12 20a10 10 0 0 0 2.9-5.8H9.1A10 10 0 0 0 12 20z"/>',
  clock: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11H7v-2h4V6h2v7z"/>',
  location: '<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>',
  close: '<path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4z"/>',
  camera: '<path d="M9 4 7 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3l-2-2H9zm3 13a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/>',
  sparkle: '<path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2z"/>',
  download: '<path d="M12 16l5-5-1.4-1.4L13 12.2V4h-2v8.2L8.4 9.6 7 11l5 5zm-7 2h14v2H5v-2z"/>',
  edit: '<path d="M3 17.2V21h3.8L18 9.8 14.2 6 3 17.2zM20.7 7.1a1 1 0 0 0 0-1.4l-2.4-2.4a1 1 0 0 0-1.4 0l-1.8 1.8L18.9 9l1.8-1.9z"/>',
  fb: '<path d="M13 22v-8h3l1-4h-4V8a2 2 0 0 1 2-2h2V2.5A28 28 0 0 0 14 2a4.5 4.5 0 0 0-4.8 5V10H6v4h3.2v8H13z"/>',
  ig: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5-10a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>',
  tt: '<path d="M16 3a5 5 0 0 0 3 1v3a3 3 0 0 1-2-1v8a6 6 0 1 1-6-6h1v3a3 3 0 1 0 2 3V3h2z"/>',
  eye: '<path d="M12 5c-6 0-10 7-10 7s4 7 10 7 10-7 10-7-4-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>',
  eyeoff: '<path d="M2.9 2.9 2 3.8l3.2 3.2A11 11 0 0 0 2 12s4 7 10 7a10 10 0 0 0 4.2-.9l3 3 .9-.9L2.9 2.9zM12 17a5 5 0 0 1-3.4-8.7l1.5 1.5A3 3 0 0 0 13.2 13l1.5 1.5A5 5 0 0 1 12 17zm8-5a12 12 0 0 1-1.7 3l-1.5-1.5A9 9 0 0 0 20 12c-1-1.6-4-5.3-8-5.3a8 8 0 0 0-2 .3L8.4 5.4A10 10 0 0 1 12 5c6 0 10 7 10 7z"/>',
  flame: '<path d="M13.5 2c.5 3-1 4.5-2.5 6-1.2 1.2-2 2.4-2 4 0 .8.2 1.5.6 2.1-.8-.3-1.5-1-1.9-1.9C6.3 14 6 15.3 6 16.6 6 20 9 23 12.5 23S19 20 19 16.6c0-4.2-2.6-6.4-4-8.6-.5 1-1.2 1.7-2 2 .3-2.7-.4-5.7-1.5-8z"/>',
  testimony: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 15-4-4 1.4-1.4L11 14.2l5.6-5.6L18 10l-7 7z"/>'
};

const ico = (n, s = 20) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="currentColor" aria-hidden="true">${I[n] || ''}</svg>`;

/* ------------------------------------------------------------------
   LIENS EXTERNES — à remplacer par vos vraies pages officielles
   ------------------------------------------------------------------ */
const LINKS = {
  facebook:  'https://www.facebook.com/metanoia',
  instagram: 'https://www.instagram.com/metanoia',
  tiktok:    'https://www.tiktok.com/@metanoia',
  brochure:  ''
};

/* ------------------------------------------------------------------
   VIDÉOS YOUTUBE — COLLEZ VOS LIENS ICI
   ------------------------------------------------------------------
   Pour ajouter un message :
   1. Copiez le lien YouTube (ex: https://www.youtube.com/watch?v=AbCdEf123)
   2. Remplacez la valeur "url: ''" par votre lien
   3. Renseignez le titre, le prédicateur et la date
   Les vignettes et le lecteur se génèrent automatiquement.
   ------------------------------------------------------------------ */

// La prédication en vedette (premier écran)
const FEATURED_VIDEO = {
  t: 'De gloire en gloire',
  url: '',                       // ← collez le lien YouTube ici
  pasteur: 'Pasteur [Nom]',
  date: '13 déc. 2026',
  duree: '52 min',
  cat: 'Cultes en direct',
  desc: '[Résumé de la prédication et références bibliques citées pendant le message.]'
};

// Extrait l'ID YouTube depuis n'importe quel format de lien
function ytId(u) {
  if (!u) return '';
  const m = String(u).match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : '';
}
function ytThumb(id) { return 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg'; }
function ytEmbed(id) { return 'https://www.youtube-nocookie.com/embed/' + id + '?rel=0&modestbranding=1'; }
function ytWatch(id) { return 'https://www.youtube.com/watch?v=' + id; }

/* ---------------- État ---------------- */

const state = {
  screen: 'splash',
  history: [],
  tab: 'accueil',
  tabs: { notif: 'Toutes', agenda: 'À venir', sermons: 'Toutes', prayer: 'War Room', meditation: 'Plan annuel' },
  track: { prie: null, medite: null },
  streak: { prie: 12, medite: 8 },
  celebrated: [],
  subjects: [
    { t: 'Pour ma famille et la paix dans notre foyer', d: 'Ajouté le 2 nov.', done: false },
    { t: 'Sagesse pour mon nouveau projet professionnel', d: 'Ajouté le 9 nov.', done: false },
    { t: 'Pour la réussite de mes examens', d: 'Ajouté le 12 nov.', done: false },
    { t: 'Que mes proches découvrent Christ', d: 'Ajouté le 18 nov.', done: true }
  ],
  wall: [
    { ini: 'AK', name: 'Aya K.', time: "Aujourd’hui · 08:12", text: 'Je confie à vos prières l’opération de ma maman prévue lundi. Que la main de DIEU guide les médecins.', count: 23 },
    { ini: 'JM', name: 'Jean-Marc D.', time: 'Hier · 19:40', text: 'Priez pour notre groupe de jeunes : unité, zèle et persévérance pendant les jeûnes de décembre.', count: 41 },
    { ini: 'SB', name: 'Sarah B.', time: '14 nov. · Prière exaucée', text: 'Merci à tous ceux qui ont prié pour mon emploi : j’ai signé mon contrat cette semaine !', count: 67 }
  ],
  testimonies: [
    { ini: 'NC', name: 'Nadège C.', time: "Aujourd’hui · 07:45", text: 'Après trois mois de recherche, DIEU m’a ouvert une porte inattendue. Je témoigne de sa fidélité : Il n’a jamais tardé.', count: 34 },
    { ini: 'KB', name: 'Koffi B.', time: 'Hier · 18:20', text: 'Mon fils était malade, nous avons prié ensemble et le Seigneur l’a restauré. À Lui soit la gloire !', count: 58 },
    { ini: 'AM', name: 'Aminata M.', time: '16 nov. · Témoignage', text: 'J’ai trouvé une nouvelle famille ici. Merci pour votre accueil et vos prières, ma vie a changé.', count: 72 }
  ],
  joined: [],
  readings: [true, false, true],
  amount: 25000,
  pay: 'momo',
  notifRead: false,
  showPassword: false,
  currentUser: null,
  regSexe: '',
  regStatut: 'Membre'
};

/* ---------------- Comptes & espace personnel (localStorage) ---------------- */

const USERS_KEY = 'metanoia_users';
const SESSION_KEY = 'metanoia_session';
const DATA_KEY = id => 'metanoia_data_' + id;

function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || '[]'); }
  catch (e) { return []; }
}
function saveUsers(list) { localStorage.setItem(USERS_KEY, JSON.stringify(list)); }

const USER_FIELDS = ['track','streak','subjects','wall','testimonies','joined','celebrated','readings','amount','pay','notifRead'];

function defaultUserData() {
  return {
    track: { prie: null, medite: null },
    streak: { prie: 0, medite: 0 },
    subjects: [],
    wall: [],
    testimonies: [],
    joined: [],
    celebrated: [],
    readings: [false, false, false],
    amount: 25000,
    pay: 'momo',
    notifRead: false
  };
}
function saveUserData() {
  if (!state.currentUser) return;
  const data = {};
  USER_FIELDS.forEach(f => data[f] = state[f]);
  try { localStorage.setItem(DATA_KEY(state.currentUser.id), JSON.stringify(data)); } catch (e) {}
}
function loadUserData(user) {
  let data = null;
  try { data = JSON.parse(localStorage.getItem(DATA_KEY(user.id)) || 'null'); } catch (e) {}
  const base = defaultUserData();
  USER_FIELDS.forEach(f => { state[f] = (data && data[f] !== undefined) ? data[f] : base[f]; });
}
function initials(u) {
  return ((u.prenoms || '').trim()[0] || '') + ((u.nom || '').trim()[0] || '') || 'MK';
}

const TABS = [
  { id: 'accueil', label: 'Accueil', icon: 'home' },
  { id: 'predications', label: 'Prédications', icon: 'sermon' },
  { id: 'priere', label: 'Prière', icon: 'prayer' },
  { id: 'meditation', label: 'Méditation', icon: 'bible' },
  { id: 'don', label: 'Don', icon: 'gift' }
];

/* ---------------- Utilitaires ---------------- */

const segmented = (group, values, red = false) => `
  <div class="segment ${red ? 'segment--red' : ''}" data-segment="${group}">
    <div class="segment__ind"></div>
    ${values.map((v, i) => `<button data-action="segment" data-group="${group}" data-i="${i}" data-v="${v}" class="${state.tabs[group] === v ? 'active' : ''}">${v}</button>`).join('')}
  </div>`;

const chips = (group, values, red = false) => `
  <div class="chips">
    ${values.map(v => `<button class="chip ${red ? 'chip--red' : ''} ${state.tabs[group] === v ? 'active' : ''}" data-action="chip" data-group="${group}" data-v="${v}">${v}</button>`).join('')}
  </div>`;

const header = (title, opts = {}) => `
  <div class="app-header">
    <div style="display:flex;align-items:center;gap:10px">
      ${opts.back ? `<button class="icon-btn" data-action="back" aria-label="Retour">${ico('left', 18)}</button>` : ''}
      <div class="app-header__title">${title}</div>
    </div>
    <div style="display:flex;gap:8px">
      ${opts.search ? `<button class="icon-btn" data-action="toast" data-msg="Recherche — bientôt disponible">${ico('search', 18)}</button>` : ''}
      ${opts.bell ? `<button class="icon-btn" data-action="nav" data-id="notifications" aria-label="Notifications">${ico('bell', 18)}${state.notifRead ? '' : '<i class="icon-btn__dot"></i>'}</button>` : ''}
    </div>
  </div>`;

/* ---------------- Écrans ---------------- */

const screens = {};

/* Ancienne page d'accueil conservée en secours (non utilisée) */
screens.landing = () => screens.splash();

screens.splash = () => `
  <div class="screen screen--center splash">
    <div class="splash__top">
      <div class="splash__alpha">α</div>
      <div class="splash__name">METANOÏA</div>
      <div class="splash__sub">CENTRE APOSTOLIQUE</div>
      <div class="splash__motto">CONTEMPLER · ÊTRE TRANSFORMÉ · MANIFESTER</div>
    </div>
    <div class="splash__bottom">
      <div class="splash__dots"><i class="active"></i><i></i><i></i></div>
      <button class="btn btn--primary" data-action="nav" data-id="login">Commencer ${ico('arrow', 17)}</button>
      <div class="auth__link" style="margin:16px 0 0">Nouveau sur METANOÏA ? <b data-action="nav" data-id="register">Créer un compte</b></div>
    </div>
  </div>`;

screens.login = () => `
  <div class="screen auth auth--login">
    <div class="auth__logo"><div class="alpha">α</div><h1>METANOÏA</h1></div>
    <div class="auth__intro">
      <h2>Bon retour parmi nous</h2>
      <p>Connectez-vous pour retrouver votre espace personnel.</p>
    </div>
    <div class="field">
      <label>E-mail ou téléphone</label>
      <div class="input-ico">${ico('mail', 17)}<input class="input" id="loginId" type="text" placeholder="vous@exemple.com" autocomplete="username" /></div>
    </div>
    <div class="field">
      <label>Mot de passe</label>
      <div class="input-ico" style="position:relative">
        ${ico('lock', 17)}
        <input class="input input--with-eye" id="loginPass" type="${state.showPassword ? 'text' : 'password'}" placeholder="••••••••" autocomplete="current-password" />
        <button class="eye-btn" data-action="eye" aria-label="${state.showPassword ? 'Masquer' : 'Afficher'} le mot de passe">${ico(state.showPassword ? 'eyeoff' : 'eye', 18)}</button>
      </div>
      <button class="auth__forgot" data-action="toast" data-msg="Contactez le secrétariat de l'église pour réinitialiser votre mot de passe">Mot de passe oublié ?</button>
    </div>
    <button class="btn btn--primary" data-action="do-login">Se connecter</button>
    <div class="auth__link">Nouveau sur METANOÏA ? <b data-action="nav" data-id="register">Créer un compte</b></div>
    <div class="auth__link"><b data-action="nav" data-id="splash">← Retour à l'accueil</b></div>
  </div>`;

screens.register = () => `
  <div class="screen auth">
    ${header('', { back: true })}
    <div class="auth__logo" style="margin-top:0"><div class="alpha">α</div><h1>METANOÏA</h1></div>
    <div class="auth__intro"><h2>Créer mon compte</h2><p>Rejoignez la communauté METANOÏA.</p></div>
    <div class="photo-pick" data-action="toast" data-msg="Ajouter une photo de profil"><span class="alpha">α</span></div>
    <p class="tiny muted" style="text-align:center;margin:0 0 18px">Photo de profil · modifiable à tout moment</p>
    <div class="field-row">
      <div class="field"><label>Nom *</label><input class="input" id="regNom" placeholder="Kouassi" autocomplete="family-name" /></div>
      <div class="field"><label>Prénoms *</label><input class="input" id="regPrenoms" placeholder="Esther Akoua" autocomplete="given-name" /></div>
    </div>
    <div class="field"><label>Date de naissance</label><input class="input" id="RegNaissance" type="date" /></div>
    <div class="field"><label>Numéro de téléphone *</label><input class="input" id="regTel" type="tel" placeholder="+225 07 •• •• •• ••" autocomplete="tel" /></div>
    <div class="field"><label>Adresse e-mail *</label><input class="input" id="regEmail" type="email" placeholder="vous@exemple.com" autocomplete="email" /></div>
    <div class="field"><label>Mot de passe * (8 caractères minimum)</label><input class="input" id="regPass" type="password" placeholder="••••••••" autocomplete="new-password" /></div>
    <div class="field"><label>Sexe (facultatif)</label><div class="sex-pick"><button data-action="sex" data-v="Homme" class="${state.regSexe === 'Homme' ? 'active' : ''}">Homme</button><button data-action="sex" data-v="Femme" class="${state.regSexe === 'Femme' ? 'active' : ''}">Femme</button></div></div>
    <div class="field"><label>Ville ou commune (facultatif)</label><input class="input" id="regVille" placeholder="Cocody, Abidjan" /></div>
    <div class="field"><label>Statut (facultatif)</label><div class="sex-pick"><button data-action="status" data-v="Membre" class="${state.regStatut === 'Membre' ? 'active' : ''}">Membre</button><button data-action="status" data-v="Visiteur" class="${state.regStatut === 'Visiteur' ? 'active' : ''}">Visiteur</button></div></div>
    <div class="field"><label>Date d’adhésion (facultatif)</label><input class="input" id="regAdhesion" type="date" /></div>
    <p class="privacy">Vos informations personnelles restent privées et ne sont jamais visibles par les autres membres.</p>
    <button class="btn btn--primary" data-action="do-register">Créer mon compte</button>
  </div>`;

screens.accueil = () => `
  <div class="screen">
    <div class="greeting stagger">
      <button class="avatar" data-action="nav" data-id="profil" aria-label="Mon profil" title="Mon profil">${initials(state.currentUser || { prenoms: 'E', nom: 'K' })}</button>
      <div class="greeting__text">
        <p class="eyebrow">${new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).toUpperCase()}</p>
        <h2 class="h2">Bonjour ${(state.currentUser?.prenoms || 'Membre').split(' ')[0]},</h2>
        <div class="muted">Aujourd’hui est une nouvelle opportunité de se rapprocher d’ABBA.</div>
      </div>
      <button class="icon-btn" data-action="nav" data-id="notifications">${ico('bell', 18)}${state.notifRead ? '' : '<i class="icon-btn__dot"></i>'}</button>
    </div>

    <div class="verse stagger">
      <div class="verse__label">VERSET DU JOUR</div>
      <div class="verse__text">« Ne vous conformez pas au siècle présent, mais soyez transformés par le renouvellement de l’intelligence. »</div>
      <div class="verse__ref">Romains 12:2</div>
    </div>

    <div class="section-head"><h3>Mon suivi du jour</h3></div>
    <div class="card track-card stagger" id="track-prie" style="margin-top:0">
      <div>
        <div class="track-card__date">PRIÈRE QUOTIDIENNE</div>
        <div class="track-card__q">Avez-vous prié<br/>aujourd’hui ?</div>
        <div class="streak-badge">${ico('flame', 13)} <b>${state.streak.prie}</b> jours consécutifs</div>
      </div>
      <div class="yesno">
        <button data-action="yesno" data-q="prie" data-v="yes" class="${state.track.prie === 'yes' ? 'active' : ''}">Oui</button>
        <button data-action="yesno" data-q="prie" data-v="no" class="${state.track.prie === 'no' ? 'active' : ''}">Non</button>
      </div>
    </div>
    <div class="card track-card stagger" id="track-medite" style="margin-top:-4px">
      <div>
        <div class="track-card__date">MÉDITATION QUOTIDIENNE</div>
        <div class="track-card__q">Avez-vous médité<br/>aujourd’hui ?</div>
        <div class="streak-badge">${ico('flame', 13)} <b>${state.streak.medite}</b> jours consécutifs</div>
      </div>
      <div class="yesno">
        <button data-action="yesno" data-q="medite" data-v="yes" class="${state.track.medite === 'yes' ? 'active' : ''}">Oui</button>
        <button data-action="yesno" data-q="medite" data-v="no" class="${state.track.medite === 'no' ? 'active' : ''}">Non</button>
      </div>
    </div>

    <div class="section-head"><h3>Accès rapide</h3></div>
    <div class="quick-grid stagger">
      <button class="quick" data-action="tab" data-id="predications"><div class="quick__ico">${ico('sermon', 20)}</div><span>Prédications</span></button>
      <button class="quick" data-action="tab" data-id="priere"><div class="quick__ico">${ico('prayer', 20)}</div><span>Ma prière</span></button>
      <button class="quick" data-action="tab" data-id="meditation"><div class="quick__ico">${ico('bible', 20)}</div><span>Méditation</span></button>
      <button class="quick quick--dark" data-action="nav" data-id="scan"><div class="quick__ico">${ico('qr', 20)}</div><span>Pointage QR</span></button>
    </div>

    <div class="section-head"><h3>Prochain programme</h3><button data-action="tab" data-id="agenda">Voir l’agenda ${ico('right', 13)}</button></div>
    <div class="card next-card stagger" data-action="nav" data-id="event">
      <div class="next-card__date"><b>13</b><span>Déc.</span></div>
      <div class="next-card__info">
        <div class="eyebrow">PROGRAMME SPÉCIAL</div>
        <div class="h3">Culte d’ouverture</div>
        <div class="tiny muted" style="margin-top:5px">Dimanche · 15h00 – 18h00</div>
      </div>
      ${ico('right', 17)}
    </div>
  </div>`;

screens.notifications = () => `
  <div class="screen">
    ${header('Notifications', { back: true })}
    ${chips('notif', ['Toutes', 'Programmes', 'Informations', 'Prédications'])}
    <div class="card" style="display:flex;align-items:center;justify-content:space-between">
      <b style="font-size:13px">${state.notifRead ? 'Tout est marqué comme lu' : '3 notifications non lues'}</b>
      <button class="btn btn--small btn--outline" data-action="mark-read">Tout marquer comme lu</button>
    </div>
    <div class="card stagger">
      <div class="notif"><i class="notif__dot ${state.notifRead ? 'notif__dot--read' : ''}"></i><div>
        <div class="notif__t">METANOÏA · RAPPEL DE PROGRAMME · IL Y A 2 H</div>
        <p class="notif__b">Culte d’ouverture</p>
        <p class="notif__p">« Notre culte commence aujourd’hui à 15h. Nous vous attendons pour un merveilleux moment dans la présence de DIEU. »</p>
      </div></div>
      <div class="notif"><i class="notif__dot ${state.notifRead ? 'notif__dot--read' : ''}"></i><div>
        <div class="notif__t">METANOÏA · INFORMATION IMPORTANTE · IL Y A 5 H</div>
        <p class="notif__b">Communication importante</p>
        <p class="notif__p">Une communication concernant notre prochain programme est disponible. Cliquez pour en prendre connaissance.</p>
      </div></div>
      <div class="notif"><i class="notif__dot ${state.notifRead ? 'notif__dot--read' : ''}"></i><div>
        <div class="notif__t">METANOÏA · NOUVELLE PRÉDICATION · HIER</div>
        <p class="notif__b">De gloire en gloire</p>
        <p class="notif__p">Une nouvelle prédication est disponible. Retrouvez le dernier enseignement sur votre application.</p>
      </div></div>
      <div class="notif"><i class="notif__dot notif__dot--read"></i><div>
        <div class="notif__t">METANOÏA · CHANGEMENT DE LIEU · MAR. 17 NOV.</div>
        <p class="notif__b">Veillée de prière</p>
        <p class="notif__p">La veillée de prière du vendredi se tiendra dans la grande salle.</p>
      </div></div>
    </div>
  </div>`;

const DEC_EVENTS = [
  [13, '15h00', 'Culte d’ouverture', 'Programmes spéciaux · Auditorium'],
  [13, '09h00', 'Culte du dimanche', 'Cultes ordinaires · Auditorium'],
  [4, '21h00', 'Veillée de prière', 'Veillées de prière · Auditorium'],
  [2, '19h00', 'Réunion des responsables', 'Réunions · Salle de conférence']
];

screens.agenda = () => {
  const days = ['L','M','M','J','V','S','D'];
  let cells = '';
  for (let i = 1; i <= 31; i++) {
    const dow = (i + 1) % 7;
    const ev = DEC_EVENTS.some(e => e[0] === i);
    cells += `<div class="calendar__day ${ev ? 'event' : ''} ${i === 20 ? 'today' : ''}">${i}</div>`;
  }
  return `
  <div class="screen">
    ${header('Agenda de l’Église', { back: true, search: true })}
    ${segmented('agenda', ['Calendrier', 'À venir'])}
    ${state.tabs.agenda === 'Calendrier' ? `
      <div class="calendar stagger">
        <div class="calendar__head"><button class="icon-btn" data-action="toast" data-msg="Mois précédent">${ico('left', 16)}</button><b>Décembre 2026</b><button class="icon-btn" data-action="toast" data-msg="Mois suivant">${ico('right', 16)}</button></div>
        <div class="calendar__grid">${days.map(d => `<div class="calendar__dow">${d}</div>`).join('')}${cells}</div>
      </div>
      <div class="section-head"><h3>Événements du mois</h3></div>
    ` : ''}
    ${chips('agendaCat', ['Cultes', 'Veillées', 'Enseignements', 'Jeûnes', 'Réunions', 'Évangélisation', 'Spéciaux'])}
    <div class="card stagger">
      ${[['24 NOV.','21h00','Veillée de prière','Veillées de prière · Auditorium'],
         ['29 NOV.','09h00','Culte du dimanche','Cultes ordinaires · Auditorium'],
         ['29 NOV.','14h00','Formation des ouvriers','Enseignements et formations · Salle 2'],
         ['2 DÉC.','19h00','Réunion des responsables','Réunions et rencontres · Salle de conférence'],
         ['4 DÉC.','21h00','Veillée de prière','Veillées de prière · Auditorium'],
         ['13 DÉC.','15h00','Culte d’ouverture','Programmes spéciaux · Auditorium']]
        .map(e => `<div class="event-line" data-action="nav" data-id="event">
          <div class="event-line__date"><b>${e[0].split(' ')[0]}</b><span>${e[0].split(' ')[1]}</span></div>
          <div><div class="event-line__time">${e[1]}</div><div class="event-line__title">${e[2]}</div><div class="event-line__sub">${e[3]}</div></div>
        </div>`).join('')}
    </div>
  </div>`;
};

screens.event = () => `
  <div class="screen">
    ${header('Programme', { back: true })}
    <div class="featured stagger" style="height:230px">
      <div class="featured__art"></div>
      <div class="featured__body">
        <span class="featured__badge">PROGRAMME SPÉCIAL</span>
        <div><div class="featured__title">Culte d’ouverture</div><div class="featured__meta">Dimanche 13 décembre 2026</div></div>
      </div>
    </div>
    <div class="card stagger" style="margin-top:16px">
      ${[['calendar','Date','Dimanche 13 décembre 2026'],['clock','Heure','15h00 – 18h00'],['location','Lieu','Auditorium principal']]
        .map(x => `<div class="row"><div class="row__ico">${ico(x[0],18)}</div><div class="row__body"><b>${x[1]}</b><small>${x[2]}</small></div></div>`).join('')}
    </div>
    <div class="card stagger">
      <p class="eyebrow">DESCRIPTION</p>
      <p class="body" style="margin:0">[Description du programme : thème, intervenants, déroulé et informations pratiques communiquées par l’Église.]</p>
    </div>
    <div class="stagger" style="display:flex;gap:10px">
      <button class="btn btn--primary" data-action="toast" data-msg="Ajouté à votre calendrier">${ico('calendar',17)} Ajouter à mon calendrier</button>
      <button class="btn btn--icon" data-action="toast" data-msg="Lien copié">${ico('share',18)}</button>
    </div>
  </div>`;

const SERMONS = [
  { t: 'Culte du dimanche — En direct', d: 'Culte en direct · 13 déc. 2026', type: 'Vidéo', cat: 'Cultes en direct', live: true, cls: 'sermon__thumb--r', mark: 'α', url: '' },
  { t: 'Le renouvellement de l’intelligence', d: 'Pasteur [Nom] · 6 déc. 2026', type: 'Audio', cat: 'Enseignements bibliques', cls: 'sermon__thumb--v', mark: 'α', url: '' },
  { t: 'Une génération transformée', d: 'Pasteur [Nom] · 22 nov. 2026', type: 'Vidéo', cat: 'Enseignements bibliques', cls: 'sermon__thumb--a', mark: 'α', url: '' },
  { t: 'Contempler Christ', d: 'Louange · 29 nov. 2026', type: 'Vidéo', cat: 'Louanges et adorations', cls: 'sermon__thumb--v', mark: 'α', url: '' },
  { t: 'Manifester sa gloire', d: 'Adoration · 15 nov. 2026', type: 'Audio', cat: 'Louanges et adorations', cls: 'sermon__thumb--r', mark: 'α', url: '' },
  { t: 'Formation des ouvriers', d: 'Équipe · 29 nov. 2026', type: 'Vidéo', cat: 'Formations', cls: 'sermon__thumb--a', mark: 'α', url: '' },
  { t: 'Culte d’ouverture', d: 'Programme spécial · 13 déc. 2026', type: 'Vidéo', cat: 'Conférences et événements', cls: 'sermon__thumb--v', mark: 'α', url: '' }
];

// Le sermon sélectionné pour le lecteur : -1 = vedette, sinon index dans SERMONS
state.currentSermon = -1;

function selectedVideo() {
  return state.currentSermon === -1
    ? FEATURED_VIDEO
    : SERMONS[state.currentSermon] || FEATURED_VIDEO;
}

screens.predications = () => `
  <div class="screen">
    ${header('Prédications', { back: false, search: true })}
    ${chips('sermons', ['Toutes', 'Enseignements bibliques', 'Cultes en direct', 'Louanges et adorations', 'Formations', 'Conférences et événements'])}
    <div class="featured stagger" data-action="open-video" data-i="-1">
      ${ytId(FEATURED_VIDEO.url)
        ? `<div class="featured__art" style="background:url('${ytThumb(ytId(FEATURED_VIDEO.url))}') center/cover"></div>`
        : `<div class="featured__art"></div>`}
      <div class="featured__body">
        <span class="featured__badge">DERNIÈRE PRÉDICATION</span>
        <div><div class="featured__title">${FEATURED_VIDEO.t}</div><div class="featured__meta">${FEATURED_VIDEO.pasteur} · ${FEATURED_VIDEO.date} · Vidéo · ${FEATURED_VIDEO.duree}</div></div>
      </div>
      <div class="featured__play">${ico('play', 22)}</div>
    </div>
    ${state.tabs.sermons === 'Cultes en direct' ? `
      <div class="card stagger" style="border-left:3px solid var(--red)">
        <b style="font-size:12px">Cultes en direct</b>
        <p class="tiny muted" style="margin:6px 0 0">Les cultes sont diffusés ici lorsqu'un lien YouTube est disponible. Collez le lien de votre diffusion dans le champ <code>url</code> de la catégorie « Cultes en direct » dans <code>app.js</code>.</p>
      </div>` : ''}
    <div class="section-head"><h3>${state.tabs.sermons === 'Toutes' ? 'Toutes les prédications' : state.tabs.sermons}</h3><button data-action="toast" data-msg="Toutes les prédications">Voir tout ${ico('right',13)}</button></div>
    <div class="card stagger">
      ${SERMONS.filter(s => {
        const f = state.tabs.sermons;
        return f === 'Toutes' || s.type === f || s.cat === f;
      }).map((s, i) => {
        const idx = SERMONS.indexOf(s);
        const id = ytId(s.url);
        return `<div class="sermon" data-action="open-video" data-i="${idx}">
          <div class="sermon__thumb ${s.cls}" ${id ? `style="background:url('${ytThumb(id)}') center/cover"` : ''}>${id ? '' : `<span>${s.mark}</span>`}<i class="${s.live ? 'live' : ''}">${s.live ? '● DIRECT' : s.type.toUpperCase()}</i></div>
          <div class="sermon__b"><b>${s.t}</b><small>${s.d}</small></div>
          ${ico('right',16)}
        </div>`;
      }).join('')}
    </div>
  </div>`;

screens.lecteur = () => {
  const v = selectedVideo();
  const id = ytId(v.url);
  return `
  <div class="screen">
    ${header('Lecture', { back: true })}
    ${id
      ? `<div class="yt-player stagger">
           <iframe src="${ytEmbed(id)}" title="${v.t}" frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
         </div>`
      : `<div class="player-art stagger">
           <button class="player-art__play" data-action="toast" data-msg="Collez un lien YouTube dans FEATURED_VIDEO.url (app.js)">${ico('play', 28)}</button>
         </div>
         <div class="card stagger" style="margin-top:14px;border-left:3px solid var(--red)">
           <b style="font-size:12px">Aucune vidéo configurée</b>
           <p class="tiny muted" style="margin:6px 0 0">Collez le lien YouTube dans <code>FEATURED_VIDEO.url</code> ou dans le champ <code>url</code> d'une prédication, en haut de <code>app.js</code>.</p>
         </div>`}
    <h2 class="h2" style="font-size:19px;margin-top:18px">${v.t}</h2>
    <p class="tiny muted" style="margin:6px 0 12px">${v.pasteur || ''} · ${v.date || ''}${v.duree ? ' · ' + v.duree : ''}</p>
    ${id ? `<a class="btn btn--outline" style="margin-bottom:16px;text-decoration:none" href="${ytWatch(id)}" target="_blank" rel="noopener">${ico('globe',17)} Ouvrir sur YouTube</a>` : ''}
    <p class="body" style="margin:0 0 20px">${v.desc || '[Résumé de la prédication et références bibliques citées pendant le message.]'}</p>
    <div class="section-head"><h3>À écouter ensuite</h3></div>
    <div class="card stagger">
      ${SERMONS.slice(0,3).map(s => {
        const idx = SERMONS.indexOf(s);
        const sid = ytId(s.url);
        return `<div class="sermon" data-action="open-video" data-i="${idx}">
          <div class="sermon__thumb ${s.cls}" ${sid ? `style="background:url('${ytThumb(sid)}') center/cover"` : ''}>${sid ? '' : `<span>${s.mark}</span>`}<i class="${s.live ? 'live' : ''}">${s.live ? '● DIRECT' : s.type.toUpperCase()}</i></div>
          <div class="sermon__b"><b>${s.t}</b><small>${s.d}</small></div>
          ${ico('right',16)}
        </div>`;
      }).join('')}
    </div>
  </div>`;
};

screens.priere = () => {
  const tab = state.tabs.prayer;
  let content = '';
  if (tab === 'War Room') {
    content = `
      <div class="card" style="background:linear-gradient(135deg,var(--violet),var(--violet-deep));color:#fff">
        <b style="font-size:13px">Espace privé</b>
        <p class="tiny" style="margin:6px 0 0;opacity:.85">Vos sujets ne sont visibles que par vous.</p>
      </div>
      <div class="section-head"><h3>Mes sujets</h3><span class="tiny muted">Cochez un sujet exaucé</span></div>
      <div class="card stagger">
        ${state.subjects.map((s, i) => `<div class="prayer-card" style="padding:12px 0 ${i ? 12 : 4}px;border-bottom:1px solid var(--line)">
          <div class="prayer-card__head">
            <div><div class="prayer-card__title">${s.t}</div><div class="prayer-card__date">${s.d}</div></div>
            <button class="checkbox ${s.done ? 'done' : ''}" data-action="check" data-i="${i}">${ico('check',13)}</button>
          </div>
        </div>`).join('')}
      </div>
      <button class="fab" data-action="sheet" data-msg="newPrayer" aria-label="Nouveau sujet">${ico('plus',24)}</button>`;
  } else if (tab === 'Exaucements') {
    content = `
      <div class="answered-banner stagger">
        <div class="answered-banner__n">4</div>
        <div class="answered-banner__l">PRIÈRES EXAUCÉES</div>
        <div class="answered-banner__t">Une mémoire de la fidélité de DIEU dans votre vie.</div>
      </div>
      <div class="section-head"><h3>NOVEMBRE 2026</h3></div>
      <div class="card prayer-card prayer-card--answered stagger">
        <div class="prayer-card__title">Un nouvel emploi pour mon mari</div>
        <div class="prayer-card__date">Exaucé le 18 nov. · Prié depuis le 3 sept.</div>
      </div>
      <div class="card prayer-card prayer-card--answered stagger">
        <div class="prayer-card__title">Réconciliation avec mon frère</div>
        <div class="prayer-card__date">Exaucé le 6 nov. · Prié depuis le 20 oct.</div>
      </div>
      <div class="section-head"><h3>OCTOBRE 2026</h3></div>
      <div class="card prayer-card prayer-card--answered stagger">
        <div class="prayer-card__title">Réussite à mon examen de fin d’année</div>
        <div class="prayer-card__date">Exaucé le 24 oct. · Prié depuis le 1er sept.</div>
      </div>`;
  } else if (tab === 'Mur des témoignages') {
    content = `
      <div class="card stagger" style="display:flex;gap:12px;align-items:center">
        <div class="avatar" style="background:linear-gradient(135deg,#F01220,#A80416)">EK</div>
        <button class="input" style="text-align:left;color:rgba(255,255,255,.3)" data-action="sheet" data-msg="newTestimony">Publier un témoignage…</button>
      </div>
      ${state.testimonies.map((p, i) => `<div class="wall-post stagger">
        <div class="wall-post__head"><div class="avatar avatar--sm" style="background:${i === 2 ? 'var(--red)' : 'var(--violet)'}">${p.ini}</div><div><b>${p.name}</b><small>${p.time}</small></div></div>
        <p class="wall-post__text">${p.text}</p>
        <div class="wall-post__foot">
          <span class="wall-post__count">${p.count + (state.celebrated.includes(i) ? 1 : 0)} personnes célèbrent avec vous</span>
          <button class="wall-post__join ${state.celebrated.includes(i) ? 'joined' : ''}" data-action="celebrate" data-i="${i}">${ico('testimony',14)} ${state.celebrated.includes(i) ? 'Amen, je célèbre !' : 'Célébrer avec vous'}</button>
        </div>
      </div>`).join('')}`;
  } else {
    content = `
      <div class="card stagger" style="display:flex;gap:12px;align-items:center">
        <div class="avatar" style="background:var(--red)">EK</div>
        <button class="input" style="text-align:left;color:rgba(255,255,255,.3)" data-action="sheet" data-msg="newPrayer">Publier un sujet de prière…</button>
      </div>
      ${state.wall.map((p, i) => `<div class="wall-post stagger">
        <div class="wall-post__head"><div class="avatar avatar--sm" style="background:${i === 2 ? 'var(--red)' : 'var(--violet)'}">${p.ini}</div><div><b>${p.name}</b><small>${p.time}</small></div></div>
        <p class="wall-post__text">${p.text}</p>
        <div class="wall-post__foot">
          <span class="wall-post__count">${p.count + (state.joined.includes(i) ? 1 : 0)} personnes prient</span>
          <button class="wall-post__join ${state.joined.includes(i) ? 'joined' : ''}" data-action="join" data-i="${i}">${ico('heart',14)} ${state.joined.includes(i) ? 'Je prie avec vous' : 'Je me joins à vous en prière'}</button>
        </div>
      </div>`).join('')}`;
  }
  return `
  <div class="screen">
    ${header('Ma vie de prière', { back: false, bell: true })}
    ${segmented('prayer', ['War Room', 'Exaucements', 'Mur de prière', 'Mur des témoignages'], true)}
    ${content}
  </div>`;
};

screens.meditation = () => `
  <div class="screen">
    ${header('Ma vie de méditation', { back: false, bell: true })}
    ${segmented('meditation', ['Plan annuel', 'Mon plan personnel'])}
    ${state.tabs.meditation === 'Plan annuel' ? `
      <div class="card stagger" style="text-align:center">
        <p class="eyebrow" style="margin-bottom:16px">PLAN DE LECTURE 2026</p>
        <div class="progress-ring">
          <svg viewBox="0 0 120 120"><circle class="track" cx="60" cy="60" r="52"/><circle class="value" cx="60" cy="60" r="52"/></svg>
          <div class="progress-ring__label"><b>86%</b><span>de la Bible lue</span></div>
        </div>
        <p class="tiny muted" style="margin:14px 0 0">Jour 324 sur 365</p>
      </div>
      <div class="section-head"><h3>Lectures du jour</h3><span class="eyebrow" style="margin:0">VEN. 20 NOV.</span></div>
      <div class="card stagger">
        ${[['Ézéchiel 40','Ancien Testament',false],['Ézéchiel 41','Ancien Testament',false],['1 Pierre 3','Nouveau Testament',true]]
          .map((r,i) => `<div class="reading"><span class="reading__tag ${r[2] ? 'reading__tag--nt' : ''}">${r[1]}</span><div class="reading__b"><b>${r[0]}</b><small>${r[1]}</small></div>${state.readings[i] ? `<span class="reading__check">${ico('check',17)}</span>` : `<button class="btn btn--small btn--outline" data-action="reading" data-i="${i}" style="min-height:32px;font-size:10px">Lu</button>`}</div>`).join('')}
        <p class="tiny muted" style="margin:12px 0 0">${state.readings.filter(Boolean).length} lecture(s) sur 3 — votre avancement est enregistré automatiquement.</p>
      </div>
      <div class="section-head"><h3>Ma régularité cette semaine</h3></div>
      <div class="card stagger">
        <div class="week-dots">${['L','M','M','J','V','S','D'].map((d,i) => `<div><i class="${i < 4 ? 'on' : ''} ${i === 4 ? 'today' : ''}">${i < 4 ? '✓' : ''}</i><span>${d}</span></div>`).join('')}</div>
      </div>
    ` : `
      <div class="calendar stagger">
        <div class="calendar__head"><button class="icon-btn" data-action="toast" data-msg="Mois précédent">${ico('left',16)}</button><b>Novembre 2026</b><button class="icon-btn" data-action="toast" data-msg="Mois suivant">${ico('right',16)}</button></div>
        <div class="calendar__grid">${['L','M','M','J','V','S','D'].map(d => `<div class="calendar__dow">${d}</div>`).join('')}${[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map(d => `<div class="calendar__day ${d === 20 ? 'today' : ''}">${d}</div>`).join('')}</div>
      </div>
      <div class="section-head"><h3>Vendredi 20 novembre</h3><span class="tiny muted">3 passages enregistrés</span></div>
      <div class="card stagger">
        ${[['Psaume 23','Lu à 06:30'],['Jean 15:1-17','Lu à 06:45'],['Proverbes 3','Lu à 21:10']].map(r => `<div class="reading"><div class="reading__b"><b>${r[0]}</b><small>${r[1]}</small></div><span class="reading__check">${ico('check',17)}</span></div>`).join('')}
      </div>
      <button class="btn btn--outline" data-action="toast" data-msg="Nouveau passage enregistré">${ico('plus',17)} Enregistrer un passage</button>
    `}
  </div>`;

screens.don = () => `
  <div class="screen">
    ${header('Faire un don', { back: false })}
    <div class="don-hero stagger">
      <div class="don-hero__alpha">α</div>
      <h2>Combien souhaitez-vous donner ?</h2>
      <p>Soutenez la vision du Centre Apostolique METANOÏA.</p>
    </div>
    <div class="amount stagger">
      <div class="amount__value">${state.amount.toLocaleString('fr-FR')} <small>FCFA</small></div>
      <div class="amount__label">MONTANT DE VOTRE DON</div>
    </div>
    <div class="amount-grid stagger">
      ${[5000,10000,25000,50000].map(a => `<button class="${state.amount === a ? 'active' : ''}" data-action="amount" data-v="${a}">${(a/1000)}k</button>`).join('')}
    </div>
    <div class="field"><label>Ou saisissez un montant libre</label><input class="input" type="number" value="${state.amount}" data-action="custom-amount" placeholder="Montant en FCFA" /></div>
    <div class="section-head"><h3>Moyen de paiement</h3></div>
    ${[['momo','Mobile Money','Paiement depuis votre téléphone','sparkle'],
       ['carte','Carte bancaire','Visa, Mastercard','gift'],
       ['paypal','PayPal','Compte PayPal','globe']]
      .map(m => `<div class="pay-method ${state.pay === m[0] ? 'active' : ''}" data-action="pay" data-v="${m[0]}">
        <div class="pay-method__ico">${ico(m[3],19)}</div>
        <div class="pay-method__b"><b>${m[1]}</b><small>${m[2]}</small></div>
        <div class="radio ${state.pay === m[0] ? 'active' : ''}"></div>
      </div>`).join('')}
    <div class="secure-note">${ico('lock',13)} Paiement sécurisé · reçu envoyé par e-mail</div>
    <button class="btn btn--red" data-action="donate">Donner ${state.amount.toLocaleString('fr-FR')} FCFA</button>
    <p class="verse-quote">« Dieu aime celui qui donne avec joie. » — 2 Corinthiens 9:7</p>
  </div>`;

screens.scan = () => `
  <div class="screen">
    ${header('Pointage par QR Code', { back: true })}
    <div class="scan-stage stagger">
      <div class="scan-frame"><span></span><span></span><span></span><span></span><div class="scan-line"></div></div>
    </div>
    <p class="body stagger" style="text-align:center;margin:18px 10px">Placez le QR Code de votre carte de membre dans le cadre pour enregistrer votre présence au culte.</p>
    <button class="btn btn--outline" data-action="toast" data-msg="Saisissez le nom du membre dans la recherche">Rechercher un membre</button>
  </div>`;

screens.aPropos = () => `
  <div class="screen">
    ${header('À propos de nous', { back: true })}
    <div class="about-hero stagger">
      <div class="about-hero__alpha">α</div>
      <h1>METANOÏA</h1>
      <div class="about-hero__sub">CENTRE APOSTOLIQUE</div>
      <div class="about-hero__motto">CONTEMPLER · ÊTRE TRANSFORMÉ · MANIFESTER</div>
    </div>
    <div class="card stagger">
      <p class="eyebrow">UNE MAISON APOSTOLIQUE DE TRANSFORMATION</p>
      <p class="body" style="margin:0">Le Centre Apostolique METANOÏA (CAM) est une institution chrétienne à vocation apostolique, consacrée à la révélation de JÉSUS-CHRIST, à la transformation des vies et à la formation de disciples.</p>
    </div>
    <div class="card stagger">
      <p class="eyebrow">NOTRE VISION</p>
      <p class="body" style="margin:0">Voir émerger une génération transformée à l’image de JÉSUS-CHRIST, consciente de son identité, libre d’accomplir sa vocation et capable de manifester la gloire de DIEU.</p>
    </div>
    <div class="card stagger">
      <p class="eyebrow">NOTRE MISSION</p>
      <p class="body" style="margin:0">Révéler CHRIST, former des disciples et les équiper pour accomplir leur vocation.</p>
    </div>
    <div class="section-head"><h3>Nos valeurs</h3></div>
    <div class="values-grid stagger">
      ${['Christocentrisme','Vérité','Transformation','Excellence','Communion','Unicité','Liberté','Multiplication'].map(v => `<div class="value"><b>${v}</b></div>`).join('')}
    </div>
    <button class="btn btn--outline" style="margin-top:16px" data-action="brochure">${ico('download',17)} Consulter la plaquette officielle</button>
    <div class="section-head"><h3>Suivez-nous</h3></div>
    <div class="socials stagger">
      <button data-action="social" data-v="facebook" aria-label="Facebook @metanoia" title="Facebook @metanoia">${ico('fb',19)}</button>
      <button data-action="social" data-v="instagram" aria-label="Instagram @metanoia" title="Instagram @metanoia">${ico('ig',19)}</button>
      <button data-action="social" data-v="tiktok" aria-label="TikTok @metanoia" title="TikTok @metanoia">${ico('tt',19)}</button>
    </div>
  </div>`;

screens.profil = () => `
  <div class="screen">
    ${header('Mon profil', { back: true })}
    <div class="profile-head stagger">
      <div class="avatar avatar--lg">${initials(state.currentUser || { prenoms: 'E', nom: 'K' })}</div>
      <h2>${(state.currentUser?.prenoms || '')} ${(state.currentUser?.nom || '')}</h2>
      <p>${state.currentUser?.statut || 'Membre'} · ${state.currentUser?.dateAdhesion ? 'depuis ' + state.currentUser.dateAdhesion : 'membre de CAM'}</p>
    </div>
    <div class="card stagger">
      <p class="eyebrow">MES INFORMATIONS PRIVÉES</p>
      ${[['Date de naissance', state.currentUser?.dateNaissance || 'Non renseignée'],
         ['Téléphone', state.currentUser?.telephone || 'Non renseigné'],
         ['E-mail', state.currentUser?.email || 'Non renseigné'],
         ['Ville', state.currentUser?.ville || 'Non renseignée']]
        .map(x => `<div class="info-line"><span>${x[0]}</span><b>${x[1]}</b></div>`).join('')}
    </div>
    <div class="section-head"><h3>Paramètres</h3></div>
    <div class="card stagger">
      ${[['edit','Modifier mes informations'],['camera','Changer ma photo'],['lock','Modifier mon mot de passe'],['bell','Gérer mes notifications'],['lock','Confidentialité et données'],['globe','À propos de nous']]
        .map((x,i) => `<div class="row" data-action="${i === 5 ? 'nav' : 'toast'}" ${i === 5 ? 'data-id="aPropos"' : `data-msg="${x[1]}"`}>
          <div class="row__ico">${ico(x[0],17)}</div><div class="row__body"><b>${x[1]}</b></div><span class="row__chev">${ico('right',16)}</span>
        </div>`).join('')}
    </div>
    <button class="btn btn--outline" style="margin-bottom:10px" data-action="logout">${ico('logout',17)} Me déconnecter</button>
    <button class="btn btn--small btn--ghost-light" style="width:100%;background:transparent;color:var(--red);border-color:rgba(227,6,19,.3)" data-action="delete-account">Supprimer mon compte</button>
  </div>`;

/* ---------------- Navigation ---------------- */

const viewport = document.getElementById('viewport');
const tabbar = document.getElementById('tabbar');
const statusbar = document.getElementById('statusbar'); // absent en mode autonome
const toastEl = document.getElementById('toast');
const screenEl = document.getElementById('screen');

function renderTabbar() {
  const show = TABS.some(t => t.id === state.screen) || ['notifications','agenda','event','lecteur','scan','aPropos'].includes(state.screen);
  tabbar.classList.toggle('hidden', !show);
  tabbar.innerHTML = `<div class="tab__ind" id="tabInd"></div>` + TABS.map(t => `
    <button class="tab ${t.id === 'don' ? 'tab--don' : ''} ${state.tab === t.id ? 'active' : ''}" data-action="tab" data-id="${t.id}">
      ${ico(t.icon, 21)}<span>${t.label}</span>
    </button>`).join('');
  updateTabInd();
}

function updateTabInd() {
  const ind = document.getElementById('tabInd');
  const tabs = tabbar.querySelectorAll('.tab');
  if (!ind || !tabs.length) return;
  const idx = TABS.findIndex(t => t.id === state.tab);
  if (idx < 0) { ind.style.opacity = '0'; return; }
  ind.style.opacity = '1';
  const w = tabbar.clientWidth / TABS.length;
  ind.style.width = '40px';
  ind.style.transform = `translateX(${idx * w + (w - 40) / 2}px)`;
}

function updateStatus() {
  if (statusbar) statusbar.classList.toggle('statusbar--light', state.screen === 'splash');
}

function navigate(id, opts = {}) {
  if (!screens[id]) return;
  const cur = viewport.querySelector('.screen');
  const el = document.createElement('div');
  // le contenu de chaque écran est déjà enveloppé dans .screen
  el.innerHTML = screens[id]();
  const node = el.firstElementChild;
  node.classList.add(opts.animate === false ? 'screen--nofade' : (opts.back ? 'enter-back' : 'enter-next'));

  if (cur) {
    cur.classList.add(opts.back ? 'exit-back' : 'exit-next');
    setTimeout(() => cur.remove(), 320);
  }
  viewport.appendChild(node);
  viewport.scrollTop = 0;

  state.screen = id;
  if (opts.back) state.history.pop();
  else if (!opts.replace) state.history.push(id);

  if (TABS.some(t => t.id === id)) state.tab = id;
  renderTabbar();
  updateStatus();
  setTimeout(updateTabInd, 30);
}

function goBack() {
  const prev = state.history[state.history.length - 2];
  navigate(prev || 'accueil', { back: true });
}

function refresh() {
  const cur = viewport.querySelector('.screen');
  if (!cur) return;
  const scroll = cur.scrollTop;
  cur.innerHTML = screens[state.screen]();
  cur.scrollTop = scroll;
  saveUserData();
  renderTabbar();
}

/* ---------------- Interactions ---------------- */

let toastTimer;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2400);
}

function sheet(type) {
  const back = document.createElement('div');
  back.className = 'sheet-backdrop';
  if (type === 'donate') {
    back.innerHTML = `
      <div class="sheet" style="text-align:center">
        <div class="sheet__grab"></div>
        <div style="width:64px;height:64px;border-radius:50%;background:var(--violet);color:#fff;display:grid;place-items:center;margin:0 auto 16px;box-shadow:0 12px 24px rgba(106,64,196,.3)">${ico('check', 30)}</div>
        <h3 class="h2" style="font-size:20px;margin-bottom:8px">Merci pour votre don !</h3>
        <p class="body muted" style="margin:0 0 18px">Votre contribution de <b style="color:var(--violet)">${state.amount.toLocaleString('fr-FR')} FCFA</b> a été enregistrée. Un reçu vous sera envoyé par e-mail.</p>
        <p class="verse-quote">« Dieu aime celui qui donne avec joie. »</p>
        <button class="btn btn--primary" data-action="close-sheet" style="margin-top:16px">Terminer</button>
      </div>`;
    back.addEventListener('click', e => { if (e.target === back) back.remove(); });
    screenEl.appendChild(back);
    return;
  }

  const titles = {
    newPrayer: ['Nouveau sujet de prière', 'Confiez votre sujet à DIEU. Il reste privé et visible seulement par vous.', 'Enregistrer', 'Écrivez votre sujet de prière…', 'save-prayer'],
    newTestimony: ['Publier un témoignage', 'Partagez ce que DIEU a fait pour vous. Votre témoignage sera visible par tous les membres.', 'Publier le témoignage', 'Racontez ce que DIEU a fait pour vous…', 'save-testimony']
  };
  const [title, desc, cta, placeholder, action] = titles[type] || titles.newPrayer;
  back.innerHTML = `
    <div class="sheet">
      <div class="sheet__grab"></div>
      <h3 class="h2" style="font-size:19px;margin-bottom:6px">${title}</h3>
      <p class="tiny muted" style="margin:0 0 18px">${desc}</p>
      <div class="field"><textarea class="input" id="prayerInput" style="height:110px;padding-top:14px;resize:none" placeholder="${placeholder}"></textarea></div>
      <button class="btn btn--red" data-action="${action}">${cta}</button>
    </div>`;
  back.addEventListener('click', e => { if (e.target === back) back.remove(); });
  screenEl.appendChild(back);
  setTimeout(() => document.getElementById('prayerInput')?.focus(), 350);
}

/* Animation de feu — validation prière / méditation */
function fireAnimation(q) {
  const card = document.getElementById('track-' + q);
  if (!card) return;
  card.classList.remove('fire-active');
  void card.offsetWidth;
  card.classList.add('fire-active');

  const layer = document.createElement('div');
  layer.className = 'fire-layer';
  for (let i = 0; i < 16; i++) {
    const p = document.createElement('i');
    p.style.setProperty('--x', (Math.random() * 88 + 6) + '%');
    p.style.setProperty('--d', (Math.random() * .55 + .05) + 's');
    p.style.setProperty('--s', (Math.random() * 7 + 6) + 'px');
    layer.appendChild(p);
  }
  card.appendChild(layer);
  setTimeout(() => layer.remove(), 1600);
  setTimeout(() => card.classList.remove('fire-active'), 1300);
}

function ripple(e) {
  const t = e.target.closest('.btn, .quick, .icon-btn, .fab, .amount-grid button');
  if (!t) return;
  const r = document.createElement('span');
  r.className = 'ripple';
  const rect = t.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  r.style.width = r.style.height = size + 'px';
  r.style.left = (e.clientX - rect.left - size / 2) + 'px';
  r.style.top = (e.clientY - rect.top - size / 2) + 'px';
  t.appendChild(r);
  setTimeout(() => r.remove(), 600);
}

document.addEventListener('click', e => {
  ripple(e);
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const a = el.dataset.action;

  switch (a) {
    case 'nav': navigate(el.dataset.id); break;
    case 'open-video':
      state.currentSermon = +el.dataset.i;
      navigate('lecteur');
      break;
    case 'back': goBack(); break;
    case 'tab': navigate(el.dataset.id, { replace: true }); break;
    case 'toast': toast(el.dataset.msg); break;
    case 'do-register': {
      const nom = document.getElementById('regNom')?.value.trim();
      const prenoms = document.getElementById('regPrenoms')?.value.trim();
      const telephone = document.getElementById('regTel')?.value.trim();
      const email = document.getElementById('regEmail')?.value.trim().toLowerCase();
      const password = document.getElementById('regPass')?.value || '';
      if (!nom || !prenoms || !telephone || !email) { toast('Renseignez le nom, les prénoms, le téléphone et l’e-mail'); break; }
      if (password.length < 8) { toast('Le mot de passe doit contenir au moins 8 caractères'); break; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { toast('Adresse e-mail invalide'); break; }
      const users = getUsers();
      if (users.some(u => u.email === email || u.telephone === telephone)) { toast('Ce compte existe déjà — connectez-vous'); break; }
      const user = {
        id: 'u' + Date.now(),
        nom, prenoms, telephone, email, password,
        dateNaissance: document.getElementById('RegNaissance')?.value || '',
        ville: document.getElementById('regVille')?.value.trim() || '',
        statut: state.regStatut,
        sexe: state.regSexe,
        dateAdhesion: document.getElementById('regAdhesion')?.value || '',
        createdAt: new Date().toISOString()
      };
      users.push(user); saveUsers(users);
      localStorage.setItem(SESSION_KEY, user.id);
      state.currentUser = user;
      const base = defaultUserData();
      base.subjects = [
        { t: 'Pour ma famille et la paix dans notre foyer', d: 'Ajouté à l’instant', done: false },
        { t: 'Pour la réussite de mes examens', d: 'Ajouté à l’instant', done: false }
      ];
      USER_FIELDS.forEach(f => state[f] = base[f]);
      saveUserData();
      toast('Bienvenue ' + prenoms.split(' ')[0] + ' ! Votre espace est prêt.');
      setTimeout(() => { state.history = []; navigate('accueil'); }, 600);
      break;
    }
    case 'do-login': {
      const id = (document.getElementById('loginId')?.value || '').trim().toLowerCase();
      const pass = document.getElementById('loginPass')?.value || '';
      if (!id || !pass) { toast('Renseignez votre identifiant et votre mot de passe'); break; }
      const user = getUsers().find(u => u.email === id || u.telephone === id || u.telephone.replace(/\s/g, '') === id.replace(/\s/g, ''));
      if (!user) { toast('Aucun compte trouvé avec cet identifiant'); break; }
      if (user.password !== pass) { toast('Mot de passe incorrect'); break; }
      localStorage.setItem(SESSION_KEY, user.id);
      state.currentUser = user;
      loadUserData(user);
      toast('Bon retour ' + user.prenoms.split(' ')[0] + ' !');
      setTimeout(() => { state.history = []; navigate('accueil'); }, 500);
      break;
    }
    case 'logout':
      localStorage.removeItem(SESSION_KEY);
      state.currentUser = null;
      state.tab = 'accueil';
      toast('Vous êtes déconnecté');
      setTimeout(() => { state.history = []; navigate('splash'); }, 400);
      break;
    case 'delete-account': {
      const user = state.currentUser;
      if (!user) break;
      saveUsers(getUsers().filter(u => u.id !== user.id));
      try { localStorage.removeItem(DATA_KEY(user.id)); } catch (e) {}
      localStorage.removeItem(SESSION_KEY);
      state.currentUser = null;
      toast('Votre compte a été supprimé');
      setTimeout(() => { state.history = []; navigate('splash'); }, 500);
      break;
    }
    case 'eye': state.showPassword = !state.showPassword; refresh(); break;
    case 'sex': state.regSexe = el.dataset.v; el.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active')); el.classList.add('active'); break;
    case 'status': state.regStatut = el.dataset.v; el.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active')); el.classList.add('active'); break;
    case 'yesno': {
      const q = el.dataset.q;
      const was = state.track[q];
      state.track[q] = el.dataset.v;
      let celebrated = false;
      if (el.dataset.v === 'yes' && was !== 'yes') { state.streak[q] += 1; celebrated = true; }
      refresh();
      if (celebrated) {
        requestAnimationFrame(() => fireAnimation(q));
        toast(q === 'prie'
          ? `Série de ${state.streak.prie} jours de prière !`
          : `Série de ${state.streak.medite} jours de méditation !`);
      } else toast('Suivi du jour enregistré');
      break;
    }
    case 'chip': state.tabs[el.dataset.group] = el.dataset.v; refresh(); break;
    case 'segment': state.tabs[el.dataset.group] = el.dataset.v; refresh(); break;
    case 'mark-read': state.notifRead = true; refresh(); toast('Notifications marquées comme lues'); break;
    case 'check': state.subjects[+el.dataset.i].done = !state.subjects[+el.dataset.i].done; refresh(); toast('Sujet mis à jour'); break;
    case 'join': {
      const i = +el.dataset.i;
      state.joined.includes(i) ? state.joined.splice(state.joined.indexOf(i), 1) : state.joined.push(i);
      refresh(); toast('Votre prière a été ajoutée'); break;
    }
    case 'celebrate': {
      const i = +el.dataset.i;
      state.celebrated.includes(i) ? state.celebrated.splice(state.celebrated.indexOf(i), 1) : state.celebrated.push(i);
      refresh(); toast('Amen, gloire à DIEU !'); break;
    }
    case 'reading': state.readings[+el.dataset.i] = true; refresh(); toast('Lecture enregistrée'); break;
    case 'amount': state.amount = +el.dataset.v; refresh(); break;
    case 'pay': state.pay = el.dataset.v; refresh(); break;
    case 'donate': sheet('donate'); break;
    case 'close-sheet': document.querySelector('.sheet-backdrop')?.remove(); break;
    case 'social': {
      const url = LINKS[el.dataset.v];
      if (url) window.open(url, '_blank', 'noopener,noreferrer');
      else toast('Lien à configurer dans LINKS');
      break;
    }
    case 'brochure': {
      if (LINKS.brochure) window.open(LINKS.brochure, '_blank', 'noopener,noreferrer');
      else toast('Déposez la plaquette puis renseignez LINKS.brochure');
      break;
    }
    case 'sheet': sheet(el.dataset.msg); break;
    case 'save-prayer': {
      const v = document.getElementById('prayerInput')?.value.trim();
      if (v) { state.subjects.unshift({ t: v, d: 'Ajouté à l’instant', done: false }); toast('Sujet de prière enregistré'); }
      document.querySelector('.sheet-backdrop')?.remove();
      if (state.screen === 'priere') refresh();
      break;
    }
    case 'save-testimony': {
      const v = document.getElementById('prayerInput')?.value.trim();
      if (v) {
        const initials = v.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
        state.testimonies.unshift({ ini: initials || 'EK', name: 'Esther Kouassi', time: 'À l’instant · Témoignage', text: v, count: 0 });
        toast('Témoignage publié pour tous les membres');
      }
      document.querySelector('.sheet-backdrop')?.remove();
      if (state.screen === 'priere') refresh();
      break;
    }
    case 'play': {
      const bar = document.getElementById('playerBar');
      const main = document.getElementById('mainPlay');
      if (bar) {
        const playing = bar.dataset.playing === '1';
        bar.dataset.playing = playing ? '0' : '1';
        bar.style.width = playing ? '35%' : '62%';
        if (main) main.innerHTML = ico(playing ? 'play' : 'pause', 24);
        toast(playing ? 'Lecture en pause' : 'Lecture en cours');
      } else toast('Lecteur audio');
      break;
    }
  }
});

// Saisie libre du montant
document.addEventListener('input', e => {
  if (e.target.dataset.action === 'custom-amount') {
    state.amount = +e.target.value || 0;
    const val = document.querySelector('.amount__value');
    if (val) val.innerHTML = `${state.amount.toLocaleString('fr-FR')} <small>FCFA</small>`;
    const btn = document.querySelector('[data-action="donate"]');
    if (btn) btn.textContent = `Donner ${state.amount.toLocaleString('fr-FR')} FCFA`;
  }
});

// Swipe entre écrans
let touchX = null, touchY = null;
viewport.addEventListener('touchstart', e => {
  touchX = e.touches[0].clientX; touchY = e.touches[0].clientY;
}, { passive: true });
viewport.addEventListener('touchend', e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  const dy = e.changedTouches[0].clientY - touchY;
  if (Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) * 1.5 && dx > 0) goBack();
  touchX = touchY = null;
}, { passive: true });

window.addEventListener('resize', updateTabInd);

// Horloge
function tick() {
  const clock = document.getElementById('clock');
  if (!clock) return;
  const d = new Date();
  clock.textContent =
    String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}
tick(); setInterval(tick, 20000);

// Mode « application installée » : mise en cache hors-ligne
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// Démarrage : on restaure la session si elle existe, sinon page d'accueil publique
(function start() {
  const savedId = localStorage.getItem(SESSION_KEY);
  if (savedId) {
    const user = getUsers().find(u => u.id === savedId);
    if (user) {
      state.currentUser = user;
      loadUserData(user);
      navigate('accueil', { animate: false, replace: true });
      return;
    }
    localStorage.removeItem(SESSION_KEY);
  }
  navigate('splash', { animate: false, replace: true });
})();
