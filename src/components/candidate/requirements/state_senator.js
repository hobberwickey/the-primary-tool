import { useState, useEffect, useContext } from "react";

import { AppContexts } from "../../../providers";

export const StateSenatorRequirements = () => {
  const { loading, candidate, setCandidate } = useContext(
    AppContexts.CandidateContext,
  );

  return (
    <section id="candidate-application-section-3-page">
      <h4>
        Requirements for getting on the ballot for the office of State Senator
      </h4>

      <ul className="uk-list">
        <li>
          <div>Requirement A</div>
          <a className="btn" href="#">
            Download Form
          </a>
        </li>
        <li>Requirement B</li>
        <li>Requirement C</li>
        <li>Requirement D</li>
      </ul>
    </section>
  );
};
