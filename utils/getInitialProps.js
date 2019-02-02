import axios from "axios";

export default async ({ pathname, req }) => ({
  pathname,
  localization: await getLocalization(req)
});

const getLocalization = async req =>
  req && (await fetchLocalization(getLocalizationLangFromRequest(req)));

const fetchLocalization = lang =>
  axios
    .get(`http://localhost:3000/localization?lang=${lang}`)
    .then(res => res.data);

const getLocalizationLangFromRequest = req => req.acceptsLanguages()[0];
