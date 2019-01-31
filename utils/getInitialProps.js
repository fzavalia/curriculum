import Localization from "./Localization";

export default async ({ pathname, req }) => {
  return {
    pathname,
    localization: !Localization.isReady()
      ? await Localization.fetch(req.acceptsLanguages())
      : Localization.get()
  };
};
