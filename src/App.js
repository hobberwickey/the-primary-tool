import "./scss/styles.scss";

import { BrowserRouter, Routes, Route } from "react-router";

import { LandingPage } from "./pages/landing.js";
import { VotersLandingPage } from "./pages/voters-landing.js";
import { CandidateProfile } from "./pages/candidate-profile.js";

import { CandidateApplicationPage } from "./pages/candidate-application.js";
import { CandidateTools } from "./pages/candidate-tools.js";

import { AppProviders } from "./providers";

function App() {

  return (
    <AppProviders>
      <header>
        <nav data-uk-navbar>
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <a href="/" className="logo">
                  <h2>Democracy Hub</h2>
                </a>
              </li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <div className="btn blocky rev">Sign In</div>
          </div>
        </nav>
      </header>
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/voters" element={<VotersLandingPage />} />
            <Route path="/candidate" element={<CandidateApplicationPage />} />
            <Route path="/candidate/tools" element={<CandidateTools />} />
            <Route path="/candidates/:id" element={<CandidateProfile />} />
            {/*
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<RecentActivity />} />
              <Route path="project/:id" element={<Project />} />
            </Route>
            */}
          </Routes>
        </BrowserRouter>
      </div>
    </AppProviders>
  );
}

export default App;
