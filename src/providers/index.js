import { CandidateProvider, CandidateContext } from "./candidate.provider";

let provider = (provider, props = {}) => [provider, props];

let providers = [provider(CandidateProvider)];

const AppContexts = {
  CandidateContext,
};

const AppProviders = ({ children }) => {
  for (let i = providers.length - 1; i >= 0; --i) {
    const [Provider, props] = providers[i];
    children = <Provider {...props}>{children}</Provider>;
  }
  return children;
};

export { AppContexts, AppProviders };
