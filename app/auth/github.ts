import { GithubAuthClientID, GithubAuthClientSecret } from "../util/env-values";
const githubSigninConfig = {
  id: "github",
  name: "github",
  clientId: GithubAuthClientID,
  clientSecret: GithubAuthClientSecret,
};

const isGithubProvider = (provider: string) => {
  return (
    provider === githubSigninConfig.id
  );
};

export const GithubAuth = {
  config: githubSigninConfig,
  canProvide: isGithubProvider,
};