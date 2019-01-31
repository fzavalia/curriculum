const axios = require("axios");

let localization;

const fetch = langs =>
  axios
    .get(`http://localhost:3000/localization?langs=${langs}`)
    .then(res => res.data);

const isReady = () => Boolean(localization);

const set = newLocale => (localization = newLocale);

const get = () => localization;

const getString = key => localization[key];

export default { fetch, set, getString, isReady, get, isReady };
