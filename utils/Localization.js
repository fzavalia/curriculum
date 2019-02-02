let localization;

const isReady = () => Boolean(localization);

const set = newLocale => (localization = newLocale);

const get = () => localization;

const getString = key => localization[key] || key;

export default { set, getString, isReady, get };
