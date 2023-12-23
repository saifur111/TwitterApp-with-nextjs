import { GoogleAuthClientID, GoogleAuthClientSecret } from "../../util/env-values";

const googleSigninConfig = {
  id: "google",
  name: "google",
  clientId: GoogleAuthClientID,
  clientSecret: GoogleAuthClientSecret,
};

const isGoogleProvider = (provider: string) => {
  return (
    provider === googleSigninConfig.id
  );
};

export const GoogleAuth = {
  config: googleSigninConfig,
  canProvide: isGoogleProvider,
};