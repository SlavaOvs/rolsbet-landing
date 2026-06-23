const BONUS_DATA = {
  EUR: {
    geo: "default",
    casino: [
      "до 1500 EUR + 150 FS",
      "100 FS",
      "до 700 EUR",
      "70 FS",
      "до 350 EUR",
      "50 FS",
      "до 200 EUR",
      "25 FS",
    ],
    sport: [
      "бонус до 100 EUR",
      "70% на депозит",
      "бонус до 50 EUR",
      "50% на депозит",
      "бонус до 30 EUR",
      "25% на депозит",
      "бонус до 15 EUR",
      "10% на депозит",
    ],
  },
  SOS: {
    geo: "so",
    casino: [
      "до 1,000,000 SOS + 150 FS",
      "100 FS",
      "до 500,000 SOS",
      "70 FS",
      "до 250,000 SOS",
      "50 FS",
      "до 100,000 SOS",
      "25 FS",
    ],
    sport: [
      "бонус до 66,000 SOS",
      "70% на депозит",
      "бонус до 33,000 SOS",
      "50% на депозит",
      "бонус до 20,000 SOS",
      "25% на депозит",
      "бонус до 10,000 SOS",
      "10% на депозит",
    ],
  },
  EGP: {
    geo: "eg",
    casino: [
      "до 90,000 EGP + 150 FS",
      "100 FS",
      "до 50,000 EGP",
      "70 FS",
      "до 25,000 EGP",
      "50 FS",
      "до 10,000 EGP",
      "25 FS",
    ],
    sport: [
      "бонус до 6,000 EGP",
      "70% на депозит",
      "бонус до 3,000 EGP",
      "50% на депозит",
      "бонус до 2,000 EGP",
      "25% на депозит",
      "бонус до 1,000 EGP",
      "10% на депозит",
    ],
  },
  MAD: {
    geo: "ma",
    casino: [
      "до 16,000 MAD + 150 FS",
      "100 FS",
      "до 9,000 MAD",
      "70 FS",
      "до 4,500 MAD",
      "50 FS",
      "до 2,500 MAD",
      "25 FS",
    ],
    sport: [
      "бонус до 1,100 MAD",
      "70% на депозит",
      "бонус до 550 MAD",
      "50% на депозит",
      "бонус до 300 MAD",
      "25% на депозит",
      "бонус до 150 MAD",
      "10% на депозит",
    ],
  },
  KZT: {
    geo: "kz",
    casino: [
      "до 800,000 KZT + 150 FS",
      "100 FS",
      "до 400,000 KZT",
      "70 FS",
      "до 200,000 KZT",
      "50 FS",
      "до 100,000 KZT",
      "25 FS",
    ],
    sport: [
      "бонус до 56,000 KZT",
      "70% на депозит",
      "бонус до 30,000 KZT",
      "50% на депозит",
      "бонус до 15,000 KZT",
      "25% на депозит",
      "бонус до 10,000 KZT",
      "10% на депозит",
    ],
  },
  UZS: {
    geo: "uz",
    casino: [
      "до 21,000,000 UZS + 150 FS",
      "100 FS",
      "до 10,000,000 UZS",
      "70 FS",
      "до 5,000,000 UZS",
      "50 FS",
      "до 3,000,000 UZS",
      "25 FS",
    ],
    sport: [
      "бонус до 1,400,000 UZS",
      "70% на депозит",
      "бонус до 700,000 UZS",
      "50% на депозит",
      "бонус до 450,000 UZS",
      "25% на депозит",
      "бонус до 300,000 UZS",
      "10% на депозит",
    ],
  },
  KGS: {
    geo: "kg",
    casino: [
      "до 150,000 KGS + 150 FS",
      "100 FS",
      "до 7,500 KGS",
      "70 FS",
      "до 4,000 KGS",
      "50 FS",
      "до 2,000 KGS",
      "25 FS",
    ],
    sport: [
      "бонус до 10,000 KGS",
      "70% на депозит",
      "бонус до 5,000 KGS",
      "50% на депозит",
      "бонус до 3,000 KGS",
      "25% на депозит",
      "бонус до 1,500 KGS",
      "10% на депозит",
    ],
  },
  SYP: {
    geo: "sy",
    casino: [
      "до 200,000 SYP + 150 FS",
      "100 FS",
      "до 100,000 SYP",
      "70 FS",
      "до 50,000 SYP",
      "50 FS",
      "до 30,000 SYP",
      "25 FS",
    ],
    sport: [
      "бонус до 13,000 SYP",
      "70% на депозит",
      "бонус до 6,000 SYP",
      "50% на депозит",
      "бонус до 4,000 SYP",
      "25% на депозит",
      "бонус до 2,000 SYP",
      "10% на депозит",
    ],
  },
  ETB: {
    geo: "et",
    casino: [
      "до 270,000 ETB + 150 FS",
      "100 FS",
      "до 150,000 ETB",
      "70 FS",
      "до 70,000 ETB",
      "50 FS",
      "до 40,000 ETB",
      "25 FS",
    ],
    sport: [
      "бонус до 18,000 ETB",
      "70% на депозит",
      "бонус до 9,000 ETB",
      "50% на депозит",
      "бонус до 5,000 ETB",
      "25% на депозит",
      "бонус до 2,500 ETB",
      "10% на депозит",
    ],
  },
};

const GEO_TO_CURRENCY = {
  so: "SOS",
  somalia: "SOS",
  eg: "EGP",
  egypt: "EGP",
  ma: "MAD",
  morocco: "MAD",
  kz: "KZT",
  kazakhstan: "KZT",
  uz: "UZS",
  uzbekistan: "UZS",
  kg: "KGS",
  kyrgyzstan: "KGS",
  sy: "SYP",
  syria: "SYP",
  et: "ETB",
  ethiopia: "ETB",
};

const I18N = {
  ru: {
    eyebrow: "Welcome-бонус RolsBet",
    title: "Выбери бонус<br>и крути колесо",
    subtitle: "Получи welcome-бонус для Казино или Спорта и переходи к регистрации.",
    casino: "Казино",
    sport: "Спорт",
    selectedBonus: "Твой welcome-бонус",
    instant: "Результат сразу после прокрутки",
    spin: "Крутить колесо",
    legal: "18+ · Играйте ответственно",
    casinoBonus: "Casino bonus",
    sportBonus: "Sport bonus",
    youWon: "Твой выигрыш",
    congrats: "Поздравляем!",
    claim: "Бонус закреплен за тобой. Создай аккаунт, чтобы активировать его.",
    register: "Регистрация",
    spinAgain: "Крутить ещё раз",
    createAccount: "Создать аккаунт",
    emailPhone: "Email или телефон",
    password: "Пароль",
    currencyLabel: "Валюта",
    languageLabel: "Язык",
    agree: "Я принимаю правила и подтверждаю, что мне исполнилось 18 лет.",
    create: "Создать аккаунт",
    upTo: "до",
    bonusUpTo: "бонус до",
    deposit: "на депозит",
  },
  en: {
    eyebrow: "RolsBet welcome bonus",
    title: "Choose your bonus<br>and spin the wheel",
    subtitle: "Get a Casino or Sports welcome bonus and continue to registration.",
    casino: "Casino",
    sport: "Sports",
    selectedBonus: "Your welcome bonus",
    instant: "See your result immediately",
    spin: "Spin the wheel",
    legal: "18+ · Play responsibly",
    casinoBonus: "Casino bonus",
    sportBonus: "Sports bonus",
    youWon: "Your prize",
    congrats: "Congratulations!",
    claim: "Your bonus is reserved. Create an account to activate it.",
    register: "Register",
    spinAgain: "Spin again",
    createAccount: "Create account",
    emailPhone: "Email or phone",
    password: "Password",
    currencyLabel: "Currency",
    languageLabel: "Language",
    agree: "I accept the rules and confirm that I am at least 18 years old.",
    create: "Create account",
    upTo: "up to",
    bonusUpTo: "bonus up to",
    deposit: "on deposit",
  },
  fr: {
    eyebrow: "Bonus de bienvenue RolsBet",
    title: "Choisis ton bonus<br>et tourne la roue",
    subtitle: "Obtiens un bonus de bienvenue Casino ou Sport, puis inscris-toi.",
    casino: "Casino",
    sport: "Sport",
    selectedBonus: "Ton bonus de bienvenue",
    instant: "Résultat immédiat après le tour",
    spin: "Tourner la roue",
    legal: "18+ · Jouez responsablement",
    casinoBonus: "Bonus Casino",
    sportBonus: "Bonus Sport",
    youWon: "Ton gain",
    congrats: "Félicitations !",
    claim: "Ton bonus est réservé. Crée un compte pour l’activer.",
    register: "Inscription",
    spinAgain: "Tourner encore",
    createAccount: "Créer un compte",
    emailPhone: "E-mail ou téléphone",
    password: "Mot de passe",
    currencyLabel: "Devise",
    languageLabel: "Langue",
    agree: "J’accepte les règles et confirme avoir au moins 18 ans.",
    create: "Créer un compte",
    upTo: "jusqu’à",
    bonusUpTo: "bonus jusqu’à",
    deposit: "sur le dépôt",
  },
  ar: {
    eyebrow: "مكافأة الترحيب من RolsBet",
    title: "اختر مكافأتك<br>وأدر العجلة",
    subtitle: "احصل على مكافأة ترحيبية للكازينو أو الرياضة ثم انتقل إلى التسجيل.",
    casino: "كازينو",
    sport: "رياضة",
    selectedBonus: "مكافأة الترحيب الخاصة بك",
    instant: "تظهر النتيجة فور توقف العجلة",
    spin: "أدر العجلة",
    legal: "+18 · العب بمسؤولية",
    casinoBonus: "مكافأة الكازينو",
    sportBonus: "مكافأة الرياضة",
    youWon: "ربحك",
    congrats: "تهانينا!",
    claim: "تم حجز مكافأتك. أنشئ حسابًا لتفعيلها.",
    register: "التسجيل",
    spinAgain: "أدر مرة أخرى",
    createAccount: "إنشاء حساب",
    emailPhone: "البريد الإلكتروني أو الهاتف",
    password: "كلمة المرور",
    currencyLabel: "العملة",
    languageLabel: "اللغة",
    agree: "أوافق على القواعد وأؤكد أن عمري 18 عامًا أو أكثر.",
    create: "إنشاء حساب",
    upTo: "حتى",
    bonusUpTo: "مكافأة حتى",
    deposit: "على الإيداع",
  },
  uz: {
    eyebrow: "RolsBet welcome-bonusi",
    title: "Bonusni tanlang<br>va g‘ildirakni aylantiring",
    subtitle: "Kazino yoki Sport uchun welcome-bonus oling va ro‘yxatdan o‘ting.",
    casino: "Kazino",
    sport: "Sport",
    selectedBonus: "Sizning welcome-bonusingiz",
    instant: "Natija aylantirishdan so‘ng darhol",
    spin: "G‘ildirakni aylantirish",
    legal: "18+ · Mas’uliyat bilan o‘ynang",
    casinoBonus: "Kazino bonusi",
    sportBonus: "Sport bonusi",
    youWon: "Sizning yutug‘ingiz",
    congrats: "Tabriklaymiz!",
    claim: "Bonus siz uchun saqlandi. Uni faollashtirish uchun akkaunt yarating.",
    register: "Ro‘yxatdan o‘tish",
    spinAgain: "Yana aylantirish",
    createAccount: "Akkaunt yaratish",
    emailPhone: "Email yoki telefon",
    password: "Parol",
    currencyLabel: "Valyuta",
    languageLabel: "Til",
    agree: "Qoidalarni qabul qilaman va 18 yoshdan katta ekanimni tasdiqlayman.",
    create: "Akkaunt yaratish",
    upTo: "gacha",
    bonusUpTo: "bonus",
    deposit: "depozitga",
  },
  tr: {
    eyebrow: "RolsBet hoş geldin bonusu",
    title: "Bonusunu seç<br>ve çarkı çevir",
    subtitle: "Casino veya Spor hoş geldin bonusunu al ve kayda geç.",
    casino: "Casino",
    sport: "Spor",
    selectedBonus: "Hoş geldin bonusun",
    instant: "Sonucu çevirir çevirmez gör",
    spin: "Çarkı çevir",
    legal: "18+ · Sorumlu oynayın",
    casinoBonus: "Casino bonusu",
    sportBonus: "Spor bonusu",
    youWon: "Kazancın",
    congrats: "Tebrikler!",
    claim: "Bonusun ayrıldı. Etkinleştirmek için hesap oluştur.",
    register: "Kayıt ol",
    spinAgain: "Tekrar çevir",
    createAccount: "Hesap oluştur",
    emailPhone: "E-posta veya telefon",
    password: "Şifre",
    currencyLabel: "Para birimi",
    languageLabel: "Dil",
    agree: "Kuralları kabul ediyor ve 18 yaşından büyük olduğumu onaylıyorum.",
    create: "Hesap oluştur",
    upTo: "kadar",
    bonusUpTo: "bonus",
    deposit: "yatırıma",
  },
  kk: {
    eyebrow: "RolsBet welcome-бонусы",
    title: "Бонусты таңда<br>және дөңгелекті айналдыр",
    subtitle: "Казино немесе Спорт welcome-бонусын алып, тіркелуге өт.",
    casino: "Казино",
    sport: "Спорт",
    selectedBonus: "Сенің welcome-бонусың",
    instant: "Нәтиже айналдырғаннан кейін бірден",
    spin: "Дөңгелекті айналдыру",
    legal: "18+ · Жауапкершілікпен ойнаңыз",
    casinoBonus: "Казино бонусы",
    sportBonus: "Спорт бонусы",
    youWon: "Сенің ұтысың",
    congrats: "Құттықтаймыз!",
    claim: "Бонус саған бекітілді. Белсендіру үшін аккаунт аш.",
    register: "Тіркелу",
    spinAgain: "Тағы айналдыру",
    createAccount: "Аккаунт ашу",
    emailPhone: "Email немесе телефон",
    password: "Құпиясөз",
    currencyLabel: "Валюта",
    languageLabel: "Тіл",
    agree: "Ережелерді қабылдаймын және 18 жастан асқанымды растаймын.",
    create: "Аккаунт ашу",
    upTo: "дейін",
    bonusUpTo: "бонус",
    deposit: "депозитке",
  },
  so: {
    eyebrow: "Gunno-soo-dhawaynta RolsBet",
    title: "Dooro gunno<br>oo wareeji giraangirta",
    subtitle: "Hel gunno Casino ama Sport ah kadibna isdiiwaangeli.",
    casino: "Casino",
    sport: "Sport",
    selectedBonus: "Gunnadaada soo-dhawaynta",
    instant: "Natiijada isla markiiba arag",
    spin: "Wareeji giraangirta",
    legal: "18+ · U ciyaar si mas’uuliyad leh",
    casinoBonus: "Gunnada Casino",
    sportBonus: "Gunnada Sport",
    youWon: "Abaalmarintaada",
    congrats: "Hambalyo!",
    claim: "Gunnada waa laguu hayaa. Samee akoon si aad u dhaqaajiso.",
    register: "Isdiiwaangeli",
    spinAgain: "Mar kale wareeji",
    createAccount: "Samee akoon",
    emailPhone: "Email ama telefoon",
    password: "Furaha sirta",
    currencyLabel: "Lacagta",
    languageLabel: "Luqadda",
    agree: "Waan aqbalayaa xeerarka, waxaanan xaqiijinayaa inaan 18 jir ahay.",
    create: "Samee akoon",
    upTo: "ilaa",
    bonusUpTo: "gunno ilaa",
    deposit: "dhigaalka",
  },
  it: {
    eyebrow: "Bonus di benvenuto RolsBet",
    title: "Scegli il bonus<br>e gira la ruota",
    subtitle: "Ottieni il bonus Casino o Sport e passa alla registrazione.",
    casino: "Casino",
    sport: "Sport",
    selectedBonus: "Il tuo bonus di benvenuto",
    instant: "Risultato immediato dopo il giro",
    spin: "Gira la ruota",
    legal: "18+ · Gioca responsabilmente",
    casinoBonus: "Bonus Casino",
    sportBonus: "Bonus Sport",
    youWon: "La tua vincita",
    congrats: "Congratulazioni!",
    claim: "Il bonus è riservato. Crea un account per attivarlo.",
    register: "Registrati",
    spinAgain: "Gira ancora",
    createAccount: "Crea account",
    emailPhone: "Email o telefono",
    password: "Password",
    currencyLabel: "Valuta",
    languageLabel: "Lingua",
    agree: "Accetto le regole e confermo di avere almeno 18 anni.",
    create: "Crea account",
    upTo: "fino a",
    bonusUpTo: "bonus fino a",
    deposit: "sul deposito",
  },
  es: {
    eyebrow: "Bono de bienvenida RolsBet",
    title: "Elige tu bono<br>y gira la ruleta",
    subtitle: "Consigue un bono de Casino o Deportes y continúa al registro.",
    casino: "Casino",
    sport: "Deportes",
    selectedBonus: "Tu bono de bienvenida",
    instant: "Resultado inmediato después del giro",
    spin: "Girar la ruleta",
    legal: "18+ · Juega con responsabilidad",
    casinoBonus: "Bono de Casino",
    sportBonus: "Bono de Deportes",
    youWon: "Tu premio",
    congrats: "¡Enhorabuena!",
    claim: "Tu bono está reservado. Crea una cuenta para activarlo.",
    register: "Registrarse",
    spinAgain: "Girar de nuevo",
    createAccount: "Crear cuenta",
    emailPhone: "Email o teléfono",
    password: "Contraseña",
    currencyLabel: "Moneda",
    languageLabel: "Idioma",
    agree: "Acepto las reglas y confirmo que tengo al menos 18 años.",
    create: "Crear cuenta",
    upTo: "hasta",
    bonusUpTo: "bono hasta",
    deposit: "en el depósito",
  },
  de: {
    eyebrow: "RolsBet Willkommensbonus",
    title: "Bonus wählen<br>und Rad drehen",
    subtitle: "Hol dir einen Casino- oder Sport-Willkommensbonus und registriere dich.",
    casino: "Casino",
    sport: "Sport",
    selectedBonus: "Dein Willkommensbonus",
    instant: "Ergebnis direkt nach dem Dreh",
    spin: "Rad drehen",
    legal: "18+ · Verantwortungsbewusst spielen",
    casinoBonus: "Casino-Bonus",
    sportBonus: "Sport-Bonus",
    youWon: "Dein Gewinn",
    congrats: "Glückwunsch!",
    claim: "Dein Bonus ist reserviert. Erstelle ein Konto, um ihn zu aktivieren.",
    register: "Registrieren",
    spinAgain: "Noch einmal drehen",
    createAccount: "Konto erstellen",
    emailPhone: "E-Mail oder Telefon",
    password: "Passwort",
    currencyLabel: "Währung",
    languageLabel: "Sprache",
    agree: "Ich akzeptiere die Regeln und bestätige, mindestens 18 Jahre alt zu sein.",
    create: "Konto erstellen",
    upTo: "bis zu",
    bonusUpTo: "Bonus bis zu",
    deposit: "auf Einzahlung",
  },
};

const state = {
  mode: "casino",
  currency: "EUR",
  lang: "ru",
  spinning: false,
};

const canvas = document.querySelector("#wheel-canvas");
const ctx = canvas.getContext("2d");
const wheelFrame = document.querySelector("#wheel-frame");
const resultModal = document.querySelector("#result-modal");
const registrationModal = document.querySelector("#registration-modal");
const currencySelect = document.querySelector("#currency-select");
const languageSelect = document.querySelector("#language-select");
const formCurrency = document.querySelector("#form-currency");
const spinButtons = [
  document.querySelector("#spin-button"),
  document.querySelector("#mobile-spin-button"),
];

function detectInitialState() {
  const params = new URLSearchParams(window.location.search);
  const currencyParam = (params.get("currency") || "").toUpperCase();
  const geoParam = (params.get("geo") || "").toLowerCase();
  const langParam = (params.get("lang") || "").toLowerCase();
  const modeParam = (params.get("mode") || "").toLowerCase();

  if (BONUS_DATA[currencyParam]) state.currency = currencyParam;
  else if (GEO_TO_CURRENCY[geoParam]) state.currency = GEO_TO_CURRENCY[geoParam];

  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  state.lang = I18N[langParam] ? langParam : I18N[browserLang] ? browserLang : "ru";
  state.mode = modeParam === "sport" ? "sport" : "casino";

  currencySelect.value = state.currency;
  formCurrency.value = state.currency;
  languageSelect.value = state.lang;
}

function t(key) {
  return I18N[state.lang]?.[key] || I18N.ru[key] || key;
}

function localizeBonus(raw, mode = state.mode) {
  if (state.lang === "ru") return raw;
  let value = raw;

  value = value.replace(/^до\s/i, `${t("upTo")} `);
  value = value.replace(/^бонус до\s/i, `${t("bonusUpTo")} `);
  value = value.replace(/\sна депозит$/i, ` ${t("deposit")}`);

  if (["uz", "tr", "kk"].includes(state.lang)) {
    const amount = raw.match(/[\d,]+\s[A-Z]{3}/)?.[0];
    if (raw.startsWith("до ") && amount) {
      value = `${amount} ${t("upTo")}${raw.includes("+ 150 FS") ? " + 150 FS" : ""}`;
    }
    if (raw.startsWith("бонус до ") && amount) {
      value = `${amount} ${t("bonusUpTo")}`;
    }
  }

  return value;
}

function getSegments() {
  return BONUS_DATA[state.currency][state.mode].map((item) => localizeBonus(item));
}

function getPrize() {
  return getSegments()[0];
}

function splitLabel(text) {
  if (text.length <= 13) return [text];
  const words = text.split(" ");
  const lines = [];
  let current = "";
  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > 14 && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  });
  if (current) lines.push(current);
  if (lines.length <= 3) return lines;
  return [lines[0], lines.slice(1, -1).join(" "), lines.at(-1)];
}

function fitFont(lines, maxWidth, initial) {
  let size = initial;
  ctx.font = `800 ${size}px "Montserrat Alternates", Arial, sans-serif`;
  while (size > 16 && Math.max(...lines.map((line) => ctx.measureText(line).width)) > maxWidth) {
    size -= 1;
    ctx.font = `800 ${size}px "Montserrat Alternates", Arial, sans-serif`;
  }
  return size;
}

function drawWheel() {
  const scale = window.devicePixelRatio || 1;
  const logicalSize = 760;
  canvas.width = logicalSize * scale;
  canvas.height = logicalSize * scale;
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  ctx.clearRect(0, 0, logicalSize, logicalSize);

  const center = logicalSize / 2;
  const radius = 344;
  const innerRadius = 92;
  const slice = (Math.PI * 2) / 8;
  const startOffset = -Math.PI / 2 - slice / 2;
  const segments = getSegments();
  const casinoColors = [
    ["#ff1b1b", "#8d0010"],
    ["#1a1a1a", "#070707"],
    ["#c20d1d", "#5e000a"],
    ["#292929", "#0b0b0b"],
    ["#ff2424", "#8c0010"],
    ["#1b1b1b", "#050505"],
    ["#bd0919", "#570009"],
    ["#2b2b2b", "#0a0a0a"],
  ];
  const sportColors = [
    ["#f5f5f5", "#949494"],
    ["#181818", "#050505"],
    ["#e11925", "#71000a"],
    ["#ededed", "#777777"],
    ["#b70a18", "#520007"],
    ["#1e1e1e", "#070707"],
    ["#eeeeee", "#858585"],
    ["#980814", "#400006"],
  ];
  const colors = state.mode === "casino" ? casinoColors : sportColors;

  for (let i = 0; i < 8; i += 1) {
    const start = startOffset + i * slice;
    const end = start + slice;
    const mid = start + slice / 2;
    const gradient = ctx.createRadialGradient(center, center, innerRadius, center, center, radius);
    gradient.addColorStop(0, colors[i][0]);
    gradient.addColorStop(1, colors[i][1]);

    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,.18)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(mid + Math.PI / 2);

    const lines = splitLabel(segments[i]);
    const maxWidth = 154;
    const fontSize = fitFont(lines, maxWidth, segments[i].length > 22 ? 18 : 21);
    ctx.font = `800 ${fontSize}px "Montserrat Alternates", Arial, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle =
      state.mode === "sport" && [0, 3, 6].includes(i) ? "#0a0a0a" : "#ffffff";
    ctx.shadowColor = "rgba(0,0,0,.72)";
    ctx.shadowBlur = 5;

    const y = -234;
    const lineHeight = fontSize + 4;
    lines.forEach((line, lineIndex) => {
      ctx.fillText(line, 0, y + (lineIndex - (lines.length - 1) / 2) * lineHeight);
    });
    ctx.restore();
  }

  ctx.beginPath();
  ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255,255,255,.32)";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(center, center, innerRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0b0b0b";
  ctx.fill();
}

function updateModeUI() {
  document.body.dataset.mode = state.mode;
  document.querySelectorAll("[data-mode-choice]").forEach((button) => {
    const active = button.dataset.modeChoice === state.mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });

  document.querySelector(".mode-badge-icon").textContent = state.mode === "casino" ? "♠" : "●";
  document.querySelector("#mode-badge-text").textContent =
    state.mode === "casino" ? t("casinoBonus") : t("sportBonus");
}

function updateText() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = t(element.dataset.i18n);
    if (element.dataset.i18n === "title") element.innerHTML = value;
    else element.textContent = value;
  });
}

function refresh() {
  updateText();
  updateModeUI();
  const prize = getPrize();
  document.querySelector("#offer-value").textContent = prize;
  document.querySelector("#result-prize").textContent = prize;
  document.querySelector("#registration-bonus").textContent = `${t("selectedBonus")}: ${prize}`;
  formCurrency.value = state.currency;
  drawWheel();
}

async function spinWheel() {
  if (state.spinning) return;
  state.spinning = true;
  spinButtons.forEach((button) => {
    button.disabled = true;
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = reducedMotion ? 500 : 3200;
  const turns = 6 + Math.floor(Math.random() * 2);
  const animation = wheelFrame.animate(
    [
      { transform: "rotate(0deg) scale(1)" },
      { transform: `rotate(${turns * 360}deg) scale(1.015)` },
    ],
    {
      duration,
      easing: "cubic-bezier(.12,.72,.12,1)",
      fill: "forwards",
    },
  );
  await animation.finished;
  animation.cancel();

  state.spinning = false;
  spinButtons.forEach((button) => {
    button.disabled = false;
  });
  document.querySelector("#result-prize").textContent = getPrize();
  resultModal.hidden = false;
  document.body.style.overflow = "hidden";
  document.body.classList.add("modal-open");
}

function closeModal(modal) {
  modal.hidden = true;
  if (resultModal.hidden && registrationModal.hidden) {
    document.body.style.overflow = "";
    document.body.classList.remove("modal-open");
  }
}

function updateUrlState() {
  const url = new URL(window.location.href);
  url.searchParams.set("currency", state.currency);
  url.searchParams.set("lang", state.lang);
  url.searchParams.set("mode", state.mode);
  window.history.replaceState({}, "", url);
}

document.querySelectorAll("[data-mode-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    if (state.spinning) return;
    state.mode = button.dataset.modeChoice;
    refresh();
    updateUrlState();
  });
});

currencySelect.addEventListener("change", () => {
  state.currency = currencySelect.value;
  refresh();
  updateUrlState();
});

formCurrency.addEventListener("change", () => {
  state.currency = formCurrency.value;
  currencySelect.value = state.currency;
  refresh();
  updateUrlState();
});

languageSelect.addEventListener("change", () => {
  state.lang = languageSelect.value;
  refresh();
  updateUrlState();
});

spinButtons.forEach((button) => button.addEventListener("click", spinWheel));

document.querySelector("#spin-again").addEventListener("click", () => {
  closeModal(resultModal);
  spinWheel();
});

document.querySelector("#registration-button").addEventListener("click", () => {
  closeModal(resultModal);
  registrationModal.hidden = false;
  document.body.classList.add("modal-open");
  const bonusCode = state.mode === "casino" ? "casino_welcome" : "sport_welcome";
  registrationModal.dataset.registrationUrl = `/registration?bonus=${bonusCode}&currency=${state.currency}`;
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    closeModal(button.dataset.close === "result" ? resultModal : registrationModal);
  });
});

[resultModal, registrationModal].forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal(modal);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!registrationModal.hidden) closeModal(registrationModal);
  else if (!resultModal.hidden) closeModal(resultModal);
});

document.querySelector("#registration-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const target = registrationModal.dataset.registrationUrl || "/registration";
  window.location.href = target;
});

window.addEventListener("resize", () => {
  window.clearTimeout(window.__wheelResize);
  window.__wheelResize = window.setTimeout(drawWheel, 120);
});

if (document.fonts?.ready) document.fonts.ready.then(drawWheel);

detectInitialState();
refresh();
