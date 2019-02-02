const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER
} = require("next/constants");

module.exports = phase => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        publicRuntimeConfig: {}
      };
    case PHASE_PRODUCTION_SERVER:
      return {
        publicRuntimeConfig: { gaTrackId: "UA-133674055-1" }
      };
  }
};
