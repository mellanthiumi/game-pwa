// ================= Переводы =================
const I18N = {
  en: {
    'nav.home': 'Home', 'nav.catalog': 'Games', 'nav.arcade': 'Arcade', 'nav.library': 'Favorites', 'nav.profile': 'Profile',
    'side.bonus': 'Bonus', 'offline': 'offline', 'more': 'See all', 'you': 'You', 'defaultName': 'Player',
    'genre.tycoon': 'Tycoon', 'genre.casual': 'Casual', 'genre.arcade': 'Arcade', 'genre.puzzle': 'Puzzle',
    'genre.action': 'Action', 'genre.adventure': 'Adventure', 'genre.racing': 'Racing',
    'badge.hot': 'Hot', 'badge.new': 'New', 'badge.top': 'Top',
    'home.greet': 'Welcome back, {name}!',
    'home.tag': '🔥 Game of the week',
    'home.heroTitle': 'Build your <em>arcade empire</em>',
    'home.heroText': 'Place machines, attract players and earn coins in Arcade Tycoon.',
    'home.play': 'Play now', 'home.allGames': 'All games',
    'home.quests': 'Quests', 'home.popular': 'Popular', 'home.new': 'New games', 'home.genres': 'Genres',
    'quest.explore': 'Explorer', 'quest.exploreD': 'Open 3 games',
    'quest.collect': 'Collector', 'quest.collectD': 'Add 3 games to favorites',
    'quest.run': 'First run', 'quest.runD': 'Play the arcade once',
    'quest.sniper': 'Sniper', 'quest.sniperD': 'Score 25 in the arcade',
    'catalog.title': 'Games', 'catalog.sub': '{n} games in the hub', 'catalog.search': 'Search games…',
    'catalog.found': 'Found: {n}', 'catalog.all': 'All', 'catalog.empty': 'Nothing found', 'catalog.emptyText': 'Try another search',
    'game.rating': 'rating', 'game.players': 'players', 'game.plays': 'plays', 'game.play': 'Play',
    'game.similar': 'You may also like', 'game.soon': '🚧 Coming soon! Try the Arcade meanwhile',
    'game.favAdd': '❤️ Added to favorites', 'game.favRemove': 'Removed from favorites', 'game.copied': 'Link copied',
    'library.title': 'Favorites', 'library.count': 'Saved games: {n}', 'library.emptySub': 'Your personal shelf',
    'library.empty': 'Nothing here yet', 'library.emptyText': 'Open any game and tap the heart to save it here', 'library.go': 'Browse games',
    'arcade.title': 'Star Catcher', 'arcade.sub': 'Catch the stars in 20 seconds. Gold ones give +3.',
    'arcade.score': 'score', 'arcade.time': 'seconds', 'arcade.best': 'best', 'arcade.start': 'Start',
    'arcade.hint': 'Tap the stars before they vanish', 'arcade.over': "Time's up!", 'arcade.record': 'New record!',
    'arcade.result': 'Score: {n} · +{c} coins', 'arcade.again': 'Play again',
    'profile.level': 'Level {n}', 'profile.favs': 'favorites', 'profile.best': 'best', 'profile.runs': 'runs',
    'profile.achievements': 'Achievements', 'profile.app': 'App', 'profile.install': 'Install app',
    'profile.installed': 'installed', 'profile.available': 'available', 'profile.language': 'Language',
    'profile.network': 'Network', 'profile.online': 'online', 'profile.offline': 'offline',
    'profile.reset': 'Reset progress', 'profile.resetConfirm': 'Reset favorites, coins, records and name?',
    'profile.resetDone': 'Progress reset', 'profile.namePrompt': "What's your name?",
    'bonus.title': 'Daily bonus', 'bonus.text': 'Grab 100 free coins every day', 'bonus.claim': 'Claim',
    'bonus.claimed': 'Come back tomorrow', 'bonus.got': '🪙 +100 coins!',
    'leaders': 'Top players',
    'install.hint': 'Chrome menu ⋮ → “Install app”', 'install.done': '✅ GameVault installed', 'install.already': 'Already installed'
  },
  ru: {
    'nav.home': 'Главная', 'nav.catalog': 'Игры', 'nav.arcade': 'Аркада', 'nav.library': 'Избранное', 'nav.profile': 'Профиль',
    'side.bonus': 'Бонус', 'offline': 'офлайн', 'more': 'Все', 'you': 'Ты', 'defaultName': 'Игрок',
    'genre.tycoon': 'Тайкун', 'genre.casual': 'Казуальные', 'genre.arcade': 'Аркады', 'genre.puzzle': 'Головоломки',
    'genre.action': 'Экшен', 'genre.adventure': 'Приключения', 'genre.racing': 'Гонки',
    'badge.hot': 'Хит', 'badge.new': 'Новое', 'badge.top': 'Топ',
    'home.greet': 'С возвращением, {name}!',
    'home.tag': '🔥 Игра недели',
    'home.heroTitle': 'Построй свою <em>аркадную империю</em>',
    'home.heroText': 'Расставляй автоматы, привлекай игроков и зарабатывай монеты в Arcade Tycoon.',
    'home.play': 'Играть', 'home.allGames': 'Все игры',
    'home.quests': 'Задания', 'home.popular': 'Популярное', 'home.new': 'Новинки', 'home.genres': 'Жанры',
    'quest.explore': 'Исследователь', 'quest.exploreD': 'Открой 3 игры',
    'quest.collect': 'Коллекционер', 'quest.collectD': 'Добавь 3 игры в избранное',
    'quest.run': 'Первый забег', 'quest.runD': 'Сыграй в аркаду',
    'quest.sniper': 'Снайпер', 'quest.sniperD': 'Набери 25 очков в аркаде',
    'catalog.title': 'Игры', 'catalog.sub': 'Игр в коллекции: {n}', 'catalog.search': 'Найти игру…',
    'catalog.found': 'Найдено: {n}', 'catalog.all': 'Все', 'catalog.empty': 'Ничего не нашли', 'catalog.emptyText': 'Попробуй другой запрос',
    'game.rating': 'рейтинг', 'game.players': 'игроков', 'game.plays': 'запусков', 'game.play': 'Играть',
    'game.similar': 'Похожие игры', 'game.soon': '🚧 Скоро! А пока сыграй в Аркаду',
    'game.favAdd': '❤️ Добавлено в избранное', 'game.favRemove': 'Удалено из избранного', 'game.copied': 'Ссылка скопирована',
    'library.title': 'Избранное', 'library.count': 'Сохранено игр: {n}', 'library.emptySub': 'Твоя личная полка',
    'library.empty': 'Пока пусто', 'library.emptyText': 'Открой любую игру и нажми на сердечко, чтобы сохранить её здесь', 'library.go': 'Перейти к играм',
    'arcade.title': 'Поймай звезду', 'arcade.sub': 'Лови звёзды 20 секунд. Золотые дают +3.',
    'arcade.score': 'очки', 'arcade.time': 'секунд', 'arcade.best': 'рекорд', 'arcade.start': 'Старт',
    'arcade.hint': 'Нажимай на звёзды, пока они не исчезли', 'arcade.over': 'Время вышло!', 'arcade.record': 'Новый рекорд!',
    'arcade.result': 'Очки: {n} · +{c} монет', 'arcade.again': 'Ещё раз',
    'profile.level': 'Уровень {n}', 'profile.favs': 'избранное', 'profile.best': 'рекорд', 'profile.runs': 'забегов',
    'profile.achievements': 'Достижения', 'profile.app': 'Приложение', 'profile.install': 'Установить',
    'profile.installed': 'установлено', 'profile.available': 'доступно', 'profile.language': 'Язык',
    'profile.network': 'Сеть', 'profile.online': 'онлайн', 'profile.offline': 'офлайн',
    'profile.reset': 'Сбросить прогресс', 'profile.resetConfirm': 'Сбросить избранное, монеты, рекорды и имя?',
    'profile.resetDone': 'Прогресс сброшен', 'profile.namePrompt': 'Как тебя зовут?',
    'bonus.title': 'Ежедневный бонус', 'bonus.text': 'Забирай 100 монет каждый день', 'bonus.claim': 'Забрать',
    'bonus.claimed': 'Приходи завтра', 'bonus.got': '🪙 +100 монет!',
    'leaders': 'Лучшие игроки',
    'install.hint': 'Меню Chrome ⋮ → «Установить приложение»', 'install.done': '✅ GameVault установлен', 'install.already': 'Приложение уже установлено'
  }
};

// ================= Хранилище =================
const store = {
  get(key, fallback) { try { const v = localStorage.getItem('gv:' + key); return v === null ? fallback : JSON.parse(v); } catch { return fallback; } },
  set(key, value) { try { localStorage.setItem('gv:' + key, JSON.stringify(value)); } catch {} },
  del(key) { try { localStorage.removeItem('gv:' + key); } catch {} }
};

// Язык: сохранённый выбор → язык телефона/браузера → английский
function detectLang() {
  const saved = store.get('lang', null);
  if (saved && I18N[saved]) return saved;
  const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
  for (const l of langs) {
    const code = l.slice(0, 2).toLowerCase();
    if (['ru', 'be', 'kk'].includes(code)) return 'ru';
    if (code === 'en') return 'en';
  }
  return 'en';
}
let lang = detectLang();
const t = (key, vars = {}) => (I18N[lang][key] ?? I18N.en[key] ?? key).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');

// ================= Данные =================
const GAMES = [
  { id: 'arcade-tycoon', title: 'Arcade Tycoon', genre: 'tycoon', year: 2026, rating: 4.9, players: '1', plays: '2.4M', badge: 'hot',
    img: 'img/arcade-tycoon.webp', emoji: '👑', c: ['#ffb21c', '#7b2ff7'],
    desc: { en: 'Start with one slot machine and grow a glowing arcade empire. Place machines, hire staff, attract crowds and reinvest your coins into bigger halls.',
            ru: 'Начни с одного автомата и вырасти сверкающую аркадную империю. Расставляй автоматы, нанимай персонал, привлекай толпы и вкладывай монеты в новые залы.' },
    tags: { en: ['Idle', 'Strategy', 'Neon'], ru: ['Idle', 'Стратегия', 'Неон'] } },
  { id: 'tower-game', title: 'Tower Game', genre: 'casual', year: 2025, rating: 4.8, players: '1', plays: '1.8M', badge: 'top',
    img: 'img/tower-game.png', emoji: '🏗️', c: ['#53c6ff', '#ff6b4a'],
    desc: { en: 'The crane swings, you tap. Drop each floor at the perfect moment and build the tallest tower in the city. One miss and it wobbles!',
            ru: 'Кран раскачивается — ты нажимаешь. Опускай этажи в идеальный момент и построй самую высокую башню в городе. Один промах — и она шатается!' },
    tags: { en: ['One tap', 'Timing', 'Relax'], ru: ['Одно касание', 'Тайминг', 'Релакс'] } },
  { id: 'star-catcher', title: 'Star Catcher', genre: 'arcade', year: 2026, rating: 4.7, players: '1', plays: '960K', badge: 'new',
    emoji: '⭐', c: ['#a259ff', '#2c1474'],
    desc: { en: 'Stars pop up all over the arena — catch as many as you can in 20 seconds. Gold stars are worth triple. Playable right here in GameVault!',
            ru: 'Звёзды появляются по всей арене — поймай как можно больше за 20 секунд. Золотые стоят втрое больше. Играется прямо в GameVault!' },
    tags: { en: ['Reaction', 'Score attack', 'Playable'], ru: ['Реакция', 'Рекорды', 'Можно играть'] } },
  { id: 'candy-blast', title: 'Candy Blast', genre: 'puzzle', year: 2025, rating: 4.6, players: '1', plays: '3.1M',
    emoji: '🍭', c: ['#ff6fb5', '#ff9a3c'],
    desc: { en: 'Match three sweets, trigger sugar bombs and clear hundreds of colorful levels.', ru: 'Собирай по три конфеты, взрывай сахарные бомбы и проходи сотни ярких уровней.' },
    tags: { en: ['Match-3', 'Levels'], ru: ['Три в ряд', 'Уровни'] } },
  { id: 'space-runner', title: 'Space Runner', genre: 'action', year: 2026, rating: 4.5, players: '1', plays: '740K', badge: 'new',
    emoji: '🚀', c: ['#2b6dff', '#0b1a5c'],
    desc: { en: 'Dodge asteroids and collect fuel cells in an endless run through the galaxy.', ru: 'Уклоняйся от астероидов и собирай топливо в бесконечном забеге по галактике.' },
    tags: { en: ['Endless', 'Space'], ru: ['Бесконечная', 'Космос'] } },
  { id: 'pirate-gold', title: 'Pirate Gold', genre: 'adventure', year: 2024, rating: 4.6, players: '1–4', plays: '1.2M',
    emoji: '🏴‍☠️', c: ['#1fb5a8', '#0b4f6c'],
    desc: { en: 'Sail between islands, dig for treasure and raid rival ships with your crew.', ru: 'Плавай между островами, ищи клады и бери на абордаж корабли соперников.' },
    tags: { en: ['Co-op', 'Treasure'], ru: ['Кооператив', 'Сокровища'] } },
  { id: 'dragon-rush', title: 'Dragon Rush', genre: 'action', year: 2025, rating: 4.4, players: '1', plays: '880K',
    emoji: '🐉', c: ['#ff4d5e', '#7a0f2e'],
    desc: { en: 'Ride a baby dragon through fiery canyons and grow it into a legend.', ru: 'Лети на дракончике сквозь огненные каньоны и вырасти его в легенду.' },
    tags: { en: ['Flying', 'Fantasy'], ru: ['Полёты', 'Фэнтези'] } },
  { id: 'pixel-racer', title: 'Pixel Racer', genre: 'racing', year: 2024, rating: 4.5, players: '1–8', plays: '2.0M', badge: 'hot',
    emoji: '🏎️', c: ['#ffc93c', '#ff6a00'],
    desc: { en: 'Retro pixel racing with drifts, boosts and online championships.', ru: 'Ретро-гонки в пикселях: дрифт, ускорения и онлайн-чемпионаты.' },
    tags: { en: ['Retro', 'Online'], ru: ['Ретро', 'Онлайн'] } },
  { id: 'bubble-pop', title: 'Bubble Pop', genre: 'casual', year: 2023, rating: 4.3, players: '1', plays: '1.5M',
    emoji: '🫧', c: ['#3ad7ff', '#2b6dff'],
    desc: { en: 'Aim, shoot and pop bubbles of the same color. Simple, calm and addictive.', ru: 'Целься, стреляй и лопай пузыри одного цвета. Просто, спокойно и затягивает.' },
    tags: { en: ['Relax', 'Shooter'], ru: ['Релакс', 'Стрелялка'] } },
  { id: 'jungle-jump', title: 'Jungle Jump', genre: 'adventure', year: 2025, rating: 4.4, players: '1', plays: '610K',
    emoji: '🐒', c: ['#2ee59d', '#0f6b45'],
    desc: { en: 'Swing on vines, collect bananas and escape the volcano in this jungle platformer.', ru: 'Качайся на лианах, собирай бананы и убегай от вулкана в этом платформере.' },
    tags: { en: ['Platformer', 'Jungle'], ru: ['Платформер', 'Джунгли'] } }
];
const GENRES = [...new Set(GAMES.map(g => g.genre))];
const PLAYABLE = 'star-catcher';

const BOTS = [
  { n: 'NeoKnight', a: '🤖', s: 48 }, { n: 'LunaPlay', a: '🦄', s: 41 }, { n: 'PixelFox', a: '🦊', s: 34 },
  { n: 'Mr.Tower', a: '🐼', s: 27 }, { n: 'Kiko', a: '🐸', s: 19 }
];

// ================= Состояние игрока =================
const favs = () => store.get('favs', []);
const isFav = id => favs().includes(id);
function toggleFav(id) {
  const list = favs();
  const next = list.includes(id) ? list.filter(x => x !== id) : [...list, id];
  store.set('favs', next);
  return next.includes(id);
}
function markViewed(id) {
  const seen = store.get('seen', []);
  store.set('seen', [id, ...seen.filter(x => x !== id)].slice(0, 20));
}
const coins = () => store.get('coins', 250);
function addCoins(n) { store.set('coins', coins() + n); renderCoins(); }
const today = () => new Date().toISOString().slice(0, 10);
const bonusReady = () => store.get('bonusDay', '') !== today();

function quests() {
  const seen = store.get('seen', []).length, f = favs().length, played = store.get('played', 0), best = store.get('best', 0);
  return [
    { ico: '👀', key: 'explore', cur: seen, goal: 3 },
    { ico: '❤️', key: 'collect', cur: f, goal: 3 },
    { ico: '🎮', key: 'run', cur: played, goal: 1 },
    { ico: '🏆', key: 'sniper', cur: best, goal: 25 }
  ].map(q => ({ ...q, done: q.cur >= q.goal, pct: Math.min(100, Math.round(q.cur / q.goal * 100)) }));
}

// ================= Утилиты =================
const $ = (sel, root = document) => root.querySelector(sel);
const view = $('#view');
const esc = s => String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const byId = id => GAMES.find(g => g.id === id);
const genreName = g => t('genre.' + g);
const heart = '<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.4-9.3C1.3 8.4 3.4 5 6.8 5c2 0 3.5 1.1 5.2 3 1.7-1.9 3.2-3 5.2-3 3.4 0 5.5 3.4 4.2 6.7C19.5 16.4 12 21 12 21z"/></svg>';
const playIco = '<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z"/></svg>';

// Обложка: настоящая картинка, если есть, иначе нарисованная
function art(g) {
  if (g.img) return `<div class="art"><img src="${g.img}" alt="${esc(g.title)}" loading="lazy"></div>`;
  return `<div class="art gen" style="background:linear-gradient(160deg, ${g.c[0]}, ${g.c[1]})"><span class="gen-title">${esc(g.title)}</span><span class="glyph">${g.emoji}</span></div>`;
}

function card(g) {
  return `<a class="card" href="#/game/${g.id}">
    ${art(g)}
    ${g.badge ? `<span class="badge ${g.badge}">${t('badge.' + g.badge)}</span>` : ''}
    ${isFav(g.id) ? `<span class="fav-dot">${heart}</span>` : ''}
    <div class="card-foot"><div><h4>${esc(g.title)}</h4><small>${genreName(g.genre)} · ★ ${g.rating}</small></div><span class="play">${playIco}</span></div>
  </a>`;
}

let toastTimer;
function toast(text) {
  const el = $('#toast');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1900);
}
const buzz = ms => { if (navigator.vibrate) navigator.vibrate(ms); };

// ================= Общие блоки =================
function bonusCard() {
  const ready = bonusReady();
  return `<div class="bonus-card">
    <h3>${t('bonus.title')}</h3><p>${t('bonus.text')}</p>
    <button class="btn btn-gold" data-action="claim" ${ready ? '' : 'disabled'}>${ready ? t('bonus.claim') + ' +100' : t('bonus.claimed')}</button>
  </div>`;
}

function leaderboard() {
  const me = { n: store.get('name', t('defaultName')), a: store.get('avatar', '🦊'), s: store.get('best', 0), me: true };
  const rows = [...BOTS, me].sort((a, b) => b.s - a.s);
  return `<div class="panel"><h3>🏆 ${t('leaders')}</h3>
    ${rows.map((r, i) => `<div class="leader${r.me ? ' me' : ''}"><span class="pos">${i + 1}</span><span class="ava">${r.a}</span>
      <span class="nm">${esc(r.n)}${r.me ? ` (${t('you')})` : ''}</span><span class="sc">${r.s}</span></div>`).join('')}
  </div>`;
}

function questsPanel() {
  return `<div class="panel"><h3>🎯 ${t('home.quests')}</h3>
    ${quests().map(q => `<div class="leader"><span class="ava">${q.ico}</span><span class="nm">${t('quest.' + q.key)}<div class="bar"><i style="width:${q.pct}%"></i></div></span><span class="sc">${q.done ? '✓' : `${Math.min(q.cur, q.goal)}/${q.goal}`}</span></div>`).join('')}
  </div>`;
}

function renderRightbar() { $('#rightbar').innerHTML = bonusCard() + leaderboard() + questsPanel(); }
function renderCoins() { $('#coinCount').textContent = coins().toLocaleString(lang); }
function renderAvatar() { $('#topAvatar').textContent = store.get('avatar', '🦊'); }

// ================= Навигация =================
const NAV = [
  { id: 'home', ico: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>' },
  { id: 'catalog', ico: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>' },
  { id: 'arcade', ico: '<path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z"/>', center: true },
  { id: 'library', ico: '<path d="M12 21s-7.5-4.6-9.4-9.3C1.3 8.4 3.4 5 6.8 5c2 0 3.5 1.1 5.2 3 1.7-1.9 3.2-3 5.2-3 3.4 0 5.5 3.4 4.2 6.7C19.5 16.4 12 21 12 21z"/>' },
  { id: 'profile', ico: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>' }
];
function renderNav() {
  const link = n => `<a href="#/${n.id}" data-tab="${n.id}"${n.center ? ' class="tab-center"' : ''}><svg viewBox="0 0 24 24">${n.ico}</svg><span>${t('nav.' + n.id)}</span></a>`;
  $('#tabbar').innerHTML = NAV.map(link).join('');
  $('#sideNav').innerHTML = NAV.map(n => link({ ...n, center: false })).join('');
}

// Статичные подписи в index.html
function applyStaticI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('.lang-switch button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}

function setLang(next) {
  if (!I18N[next] || next === lang) return;
  lang = next;
  store.set('lang', next);
  renderShell();
  router();
}

// ================= Экраны =================
const screens = {};

// 1. Лобби
screens.home = () => {
  const name = store.get('name', t('defaultName'));
  const featured = GAMES[0];
  const popular = [...GAMES].sort((a, b) => parseFloat(b.plays) * (b.plays.endsWith('M') ? 1000 : 1) - parseFloat(a.plays) * (a.plays.endsWith('M') ? 1000 : 1));
  const fresh = [...GAMES].sort((a, b) => b.year - a.year || b.rating - a.rating);

  view.innerHTML = `
    <section class="hero">
      <div class="hero-media"><img src="${featured.img}" alt="${featured.title}"></div>
      <div class="hero-body">
        <span class="hero-tag">${t('home.tag')}</span>
        <h1>${t('home.heroTitle')}</h1>
        <p>${t('home.heroText')}</p>
        <div class="hero-actions">
          <a class="btn btn-red" href="#/game/${featured.id}">${playIco}${t('home.play')}</a>
          <a class="btn btn-ghost" href="#/catalog">${t('home.allGames')}</a>
        </div>
      </div>
    </section>

    <div class="section">
      <div class="section-head"><span class="h-ico">🎯</span><h2>${t('home.quests')}</h2></div>
      <div class="quests">${quests().slice(0, 3).map(q => `
        <div class="quest${q.done ? ' done' : ''}"><div class="q-ico">${q.done ? '✅' : q.ico}</div>
          <div class="q-body"><b>${t('quest.' + q.key)}</b><small>${t('quest.' + q.key + 'D')}</small><div class="bar"><i style="width:${q.pct}%"></i></div></div></div>`).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-head"><span class="h-ico">🔥</span><h2>${t('home.popular')}</h2><a class="more" href="#/catalog">${t('more')}</a></div>
      <div class="rail">${popular.slice(0, 6).map(card).join('')}</div>
    </div>

    <div class="section">
      <div class="section-head"><span class="h-ico">🕹️</span><h2>${t('home.genres')}</h2></div>
      <div class="chips">${GENRES.map(g => `<a class="chip" href="#/catalog?genre=${g}">${genreName(g)}</a>`).join('')}</div>
    </div>

    <div class="section">
      <div class="section-head"><span class="h-ico">✨</span><h2>${t('home.new')}</h2></div>
      <div class="rail">${fresh.slice(0, 6).map(card).join('')}</div>
    </div>

    <div class="mobile-extra">${bonusCard()}${leaderboard()}</div>`;
};

// 2. Каталог
screens.catalog = (params) => {
  let genre = params.get('genre') || 'all';
  let query = params.get('q') || '';

  view.innerHTML = `
    <h1 class="page-title">${t('catalog.title')}</h1>
    <p class="page-sub">${t('catalog.sub', { n: GAMES.length })}</p>
    <label class="search">
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
      <input type="search" id="q" placeholder="${t('catalog.search')}" autocomplete="off" value="${esc(query)}">
    </label>
    <div class="chips" id="genres">${['all', ...GENRES].map(g => `<button class="chip${g === genre ? ' active' : ''}" data-g="${g}">${g === 'all' ? t('catalog.all') : genreName(g)}</button>`).join('')}</div>
    <p class="count" id="count"></p>
    <div class="grid" id="list"></div>`;

  const render = () => {
    const q = query.trim().toLowerCase();
    const items = GAMES.filter(g => (genre === 'all' || g.genre === genre) && g.title.toLowerCase().includes(q));
    $('#count').textContent = t('catalog.found', { n: items.length });
    $('#list').innerHTML = items.length ? items.map(card).join('')
      : `<div class="empty" style="grid-column:1/-1"><div class="big">🕹️</div><h3>${t('catalog.empty')}</h3><p>${t('catalog.emptyText')}</p></div>`;
  };

  $('#q').addEventListener('input', e => { query = e.target.value; render(); });
  $('#genres').addEventListener('click', e => {
    const b = e.target.closest('.chip');
    if (!b) return;
    genre = b.dataset.g;
    document.querySelectorAll('#genres .chip').forEach(c => c.classList.toggle('active', c === b));
    render();
  });
  render();
};

// 3. Страница игры
screens.game = (params, id) => {
  const g = byId(id);
  if (!g) { location.hash = '#/catalog'; return; }
  markViewed(g.id);
  const similar = GAMES.filter(x => x.genre === g.genre && x.id !== g.id)
    .concat(GAMES.filter(x => x.genre !== g.genre && x.id !== g.id)).slice(0, 6);

  view.innerHTML = `
    <div class="detail">
      <div class="detail-cover">${art(g)}</div>
      <div>
        <h1>${esc(g.title)}</h1>
        <div class="meta">${genreName(g.genre)} · ${g.year}</div>
        <div class="stats">
          <div class="stat"><b>★ ${g.rating}</b><small>${t('game.rating')}</small></div>
          <div class="stat"><b>${g.plays}</b><small>${t('game.plays')}</small></div>
          <div class="stat"><b>${g.players}</b><small>${t('game.players')}</small></div>
        </div>
        <p class="desc">${esc(g.desc[lang] || g.desc.en)}</p>
        <div class="tags">${(g.tags[lang] || g.tags.en).map(x => `<span class="tag">#${esc(x)}</span>`).join('')}</div>
        <div class="actions">
          <button class="btn btn-red" id="playBtn">${playIco}${t('game.play')}</button>
          <button class="btn btn-ghost${isFav(g.id) ? ' on' : ''}" id="favBtn" aria-label="Favorite">${heart}</button>
          <button class="btn btn-ghost" id="shareBtn" aria-label="Share"><svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg></button>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-head"><span class="h-ico">🎲</span><h2>${t('game.similar')}</h2></div>
      <div class="rail">${similar.map(card).join('')}</div>
    </div>`;

  $('#favBtn').addEventListener('click', e => {
    const on = toggleFav(g.id);
    e.currentTarget.classList.toggle('on', on);
    buzz(20);
    toast(on ? t('game.favAdd') : t('game.favRemove'));
    renderRightbar();
  });
  $('#playBtn').addEventListener('click', () => {
    buzz(30);
    if (g.id === PLAYABLE) location.hash = '#/arcade';
    else toast(t('game.soon'));
  });
  $('#shareBtn').addEventListener('click', async () => {
    const data = { title: g.title, text: `${g.title} — GameVault`, url: location.href };
    if (navigator.share) { try { await navigator.share(data); } catch {} }
    else { try { await navigator.clipboard.writeText(location.href); toast(t('game.copied')); } catch {} }
  });
};

// 4. Избранное
screens.library = () => {
  const list = favs().map(byId).filter(Boolean);
  view.innerHTML = `
    <h1 class="page-title">${t('library.title')}</h1>
    <p class="page-sub">${list.length ? t('library.count', { n: list.length }) : t('library.emptySub')}</p>
    ${list.length
      ? `<div class="grid">${list.map(card).join('')}</div>`
      : `<div class="empty"><div class="big">💜</div><h3>${t('library.empty')}</h3><p>${t('library.emptyText')}</p><a class="btn btn-gold" href="#/catalog">${t('library.go')}</a></div>`}`;
};

// 5. Аркада — мини-игра «Поймай звезду»
let game = null;
screens.arcade = () => {
  view.innerHTML = `
    <div class="arcade-wrap">
      <h1 class="page-title">⭐ ${t('arcade.title')}</h1>
      <p class="page-sub">${t('arcade.sub')}</p>
      <div class="arcade-hud">
        <div class="stat"><b id="score">0</b><small>${t('arcade.score')}</small></div>
        <div class="stat"><b id="time">20</b><small>${t('arcade.time')}</small></div>
        <div class="stat"><b id="best">${store.get('best', 0)}</b><small>${t('arcade.best')}</small></div>
      </div>
      <div class="arena" id="arena">
        <div class="arena-overlay" id="overlay">
          <h2>${t('arcade.title')}</h2>
          <p>${t('arcade.hint')}</p>
          <button class="btn btn-red" id="startBtn">${playIco}${t('arcade.start')}</button>
        </div>
      </div>
    </div>`;
  $('#startBtn').addEventListener('click', startGame);
};

function startGame() {
  const arena = $('#arena');
  $('#overlay').hidden = true;
  game = { score: 0, left: 20, timers: [] };
  $('#score').textContent = 0;
  $('#time').textContent = 20;

  const spawn = () => {
    if (!game) return;
    const s = document.createElement('button');
    const gold = Math.random() < 0.18;
    s.className = 'target' + (gold ? ' gold' : '');
    s.textContent = gold ? '🌟' : '⭐';
    s.style.left = 12 + Math.random() * 76 + '%';
    s.style.top = 14 + Math.random() * 72 + '%';
    s.addEventListener('pointerdown', () => {
      if (!game) return;
      const pts = gold ? 3 : 1;
      game.score += pts;
      $('#score').textContent = game.score;
      buzz(15);
      const b = document.createElement('span');
      b.className = 'burst'; b.textContent = '+' + pts;
      b.style.left = s.style.left; b.style.top = s.style.top;
      arena.appendChild(b);
      setTimeout(() => b.remove(), 600);
      s.remove();
    });
    arena.appendChild(s);
    setTimeout(() => s.remove(), Math.max(550, 1100 - (20 - game.left) * 25));
  };

  game.timers.push(setInterval(spawn, 520));
  game.timers.push(setInterval(() => {
    game.left--;
    $('#time').textContent = game.left;
    if (game.left <= 0) endGame();
  }, 1000));
  spawn();
}

function endGame() {
  if (!game) return;
  game.timers.forEach(clearInterval);
  const score = game.score;
  game = null;
  const best = store.get('best', 0);
  const record = score > best;
  if (record) store.set('best', score);
  store.set('played', store.get('played', 0) + 1);
  const earned = score * 2;
  addCoins(earned);
  document.querySelectorAll('.target').forEach(el => el.remove());
  $('#best').textContent = Math.max(score, best);
  const overlay = $('#overlay');
  overlay.innerHTML = `<h2>${record ? '🏆 ' + t('arcade.record') : t('arcade.over')}</h2><p>${t('arcade.result', { n: score, c: earned })}</p><button class="btn btn-red" id="startBtn">${t('arcade.again')}</button>`;
  overlay.hidden = false;
  $('#startBtn').addEventListener('click', startGame);
  buzz(record ? [40, 60, 40] : 40);
  renderRightbar();
}
function stopGame() { if (game) { game.timers.forEach(clearInterval); game = null; } }

// 6. Профиль
const AVATARS = ['🦊', '🐱', '🐼', '👾', '🤖', '🐸', '🦄', '🐙'];
screens.profile = () => {
  const name = store.get('name', t('defaultName'));
  const avatar = store.get('avatar', '🦊');
  const f = favs().length, best = store.get('best', 0), played = store.get('played', 0), seen = store.get('seen', []).length;
  const xp = f * 40 + best * 5 + played * 25 + seen * 10;
  const lvl = Math.floor(xp / 200) + 1, inLvl = xp % 200;

  view.innerHTML = `
    <div class="profile-grid">
      <div class="profile-card">
        <button class="avatar" id="avatarBtn" aria-label="Avatar">${avatar}</button>
        <div class="name-row"><h2>${esc(name)}</h2>
          <button id="editName" aria-label="Edit name"><svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg></button></div>
        <div class="level"><span>${t('profile.level', { n: lvl })}</span><span>${inLvl} / 200 XP</span></div>
        <div class="bar"><i style="width:${inLvl / 2}%"></i></div>
        <div class="stats">
          <div class="stat"><b>${f}</b><small>${t('profile.favs')}</small></div>
          <div class="stat"><b>${best}</b><small>${t('profile.best')}</small></div>
          <div class="stat"><b>${played}</b><small>${t('profile.runs')}</small></div>
        </div>
      </div>

      <div>
        <div class="section-head"><span class="h-ico">🏅</span><h2>${t('profile.achievements')}</h2><span class="more">${quests().filter(q => q.done).length}/4</span></div>
        <div class="achievements">${quests().map(q => `<div class="ach${q.done ? '' : ' locked'}"><div class="ico">${q.ico}</div><div><b>${t('quest.' + q.key)}</b><small>${t('quest.' + q.key + 'D')}</small></div></div>`).join('')}</div>

        <div class="section">
          <div class="section-head"><span class="h-ico">⚙️</span><h2>${t('profile.app')}</h2></div>
          <div class="list">
            <button data-action="install"><svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>${t('profile.install')}<span class="val" id="installState"></span></button>
            <div class="row"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>${t('profile.language')}
              <div class="lang-switch"><button data-lang="en" class="${lang === 'en' ? 'active' : ''}">EN</button><button data-lang="ru" class="${lang === 'ru' ? 'active' : ''}">RU</button></div></div>
            <div class="row"><svg viewBox="0 0 24 24"><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 20h.01"/></svg>${t('profile.network')}<span class="val">${navigator.onLine ? t('profile.online') : t('profile.offline')}</span></div>
            <button id="resetBtn"><svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/></svg>${t('profile.reset')}</button>
          </div>
        </div>
      </div>
    </div>`;

  $('#avatarBtn').addEventListener('click', () => {
    store.set('avatar', AVATARS[(AVATARS.indexOf(avatar) + 1) % AVATARS.length]);
    buzz(10); renderAvatar(); renderRightbar(); screens.profile();
  });
  $('#editName').addEventListener('click', () => {
    const n = prompt(t('profile.namePrompt'), name);
    if (n && n.trim()) { store.set('name', n.trim().slice(0, 20)); renderRightbar(); screens.profile(); }
  });
  $('#resetBtn').addEventListener('click', () => {
    if (!confirm(t('profile.resetConfirm'))) return;
    ['favs', 'seen', 'best', 'played', 'name', 'avatar', 'coins', 'bonusDay'].forEach(store.del);
    toast(t('profile.resetDone')); renderShell(); screens.profile();
  });
  updateInstallUI();
};

// ================= Установка PWA =================
let deferredPrompt = null;
const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();          // не показываем стандартный баннер сразу
  deferredPrompt = e;          // сохраняем, чтобы вызвать по кнопке
  updateInstallUI();
});
window.addEventListener('appinstalled', () => { deferredPrompt = null; toast(t('install.done')); updateInstallUI(); });

function updateInstallUI() {
  const s = $('#installState');
  if (s) s.textContent = isStandalone() ? t('profile.installed') : deferredPrompt ? t('profile.available') : '';
}
async function installApp() {
  if (isStandalone()) return toast(t('install.already'));
  if (deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    updateInstallUI();
  } else {
    toast(t('install.hint'));
  }
}

// Общие кнопки: бонус, установка, язык
document.addEventListener('click', e => {
  const langBtn = e.target.closest('[data-lang]');
  if (langBtn) return setLang(langBtn.dataset.lang);
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  if (btn.dataset.action === 'install') installApp();
  if (btn.dataset.action === 'claim') {
    if (!bonusReady()) return toast(t('bonus.claimed'));
    store.set('bonusDay', today());
    addCoins(100);
    buzz([20, 40, 20]);
    toast(t('bonus.got'));
    renderRightbar();
    document.querySelectorAll('.mobile-extra').forEach(el => { el.innerHTML = bonusCard() + leaderboard(); });
  }
});

$('#topSearch').addEventListener('submit', e => {
  e.preventDefault();
  const q = e.target.q.value.trim();
  location.hash = '#/catalog' + (q ? '?q=' + encodeURIComponent(q) : '');
});

// ================= Роутер =================
function router() {
  stopGame();
  const raw = location.hash.replace(/^#\/?/, '') || 'home';
  const [path, qs] = raw.split('?');
  const [name, id] = path.split('/');
  const screen = screens[name] ? name : 'home';
  screens[screen](new URLSearchParams(qs || ''), id);

  const tab = screen === 'game' ? 'catalog' : screen;
  document.querySelectorAll('[data-tab]').forEach(a => a.classList.toggle('active', a.dataset.tab === tab));
  $('#backBtn').hidden = screen !== 'game';
  view.style.animation = 'none'; view.offsetHeight; view.style.animation = '';
  window.scrollTo(0, 0);
}

function renderShell() {
  applyStaticI18n();
  renderNav();
  renderRightbar();
  renderCoins();
  renderAvatar();
}

window.addEventListener('hashchange', router);
$('#backBtn').addEventListener('click', () => history.length > 1 ? history.back() : (location.hash = '#/catalog'));

// Индикатор офлайна
const updateOnline = () => { $('#offlinePill').hidden = navigator.onLine; };
window.addEventListener('online', updateOnline);
window.addEventListener('offline', updateOnline);
updateOnline();

renderShell();
router();

// ================= Service Worker =================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js'));
}
