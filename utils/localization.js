let localization;

const set = newLocale => newLocale && (localization = newLocale);

const getString = key => localization[key] || key;

export default { set, getString };
