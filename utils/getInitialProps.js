import axios from "axios";
import Localization from "./Localization";

export default async ({ pathname, req }) => ({
  pathname,
  localization: await getLocalization(req)
});

const getLocalization = async req =>
  !Localization.isReady()
    ? await fetchLocalization(getLocalizationLangFromRequest(req))
    : Localization.get();

const fetchLocalization = lang =>
  axios
    .get(`http://localhost:3000/localization?lang=${lang}`)
    .then(res => res.data);

const getLocalizationLangFromRequest = req => req.acceptsLanguages()[0];
