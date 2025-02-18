import { useState, useContext } from "react";

import { AppContexts } from "../providers";

import { CandidateApplicationSection1 } from "../components/candidate/section-1.js";
import { CandidateApplicationSection2 } from "../components/candidate/section-2.js";
import { CandidateApplicationSection3 } from "../components/candidate/section-3.js";
import { CandidateApplicationSection4 } from "../components/candidate/section-4.js";
import { CandidateApplicationSection5 } from "../components/candidate/section-5.js";

export const CandidateApplicationPage = () => {
  const { loading, candidate } = useContext(AppContexts.CandidateContext);

  const getSection = () => {
    if (candidate.completed === 0) {
      return <CandidateApplicationSection1 />;
    } else if (candidate.completed === 1) {
      return <CandidateApplicationSection2 />;
    } else if (candidate.completed === 2) {
      return <CandidateApplicationSection3 />;
    } else if (candidate.completed === 3) {
      return <CandidateApplicationSection4 />;
    } else if (candidate.completed === 4) {
      return <CandidateApplicationSection5 />;
    }
  };

  return (
    <section id="candidate-application-page" className="page">
      {getSection()}
    </section>
  );
};
