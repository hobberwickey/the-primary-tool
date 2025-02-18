import { useState, useEffect, useContext } from "react";

import { AppContexts } from "../../providers";

import { CityCounselorRequirements } from "./requirements/city_counselor.js";
import { StateSenatorRequirements } from "./requirements/state_senator.js";
import { StateRepresentativeRequirements } from "./requirements/state_representative.js";

export const CandidateApplicationSection3 = () => {
  const { loading, candidate, setCandidate } = useContext(
    AppContexts.CandidateContext,
  );

  const [data, setData] = useState({ ...candidate });

  useEffect(() => {
    if (!!candidate) {
      setData({ ...candidate });
    }
  }, []);

  const update = (field, value) => {
    data[field] = value;
  };

  const updateCandidate = () => {
    setCandidate({ ...data, completed: (candidate.completed += 1) });
  };

  const previous = () => {
    setCandidate({ ...candidate, completed: (candidate.completed -= 1) });
  };

  const labels = {
    state_senator: "State Senator",
    state_resprentative: "State Representative",
    city_counselor: "City Counselor",
  };

  const requirements = {
    state_senator: <StateSenatorRequirements />,
    state_resprentative: <StateRepresentativeRequirements />,
    city_counselor: <CityCounselorRequirements />,
  };

  return (
    <section id="candidate-application-section-3-page">
      <form>
        <h3>Requirements for {labels[data.office]}</h3>

        <div className="requirements">{requirements[data.office]}</div>

        <p>
          Please continue filling out this form, everything will be published
          after your state requirements have been submitted and verified
        </p>

        <div className="actions">
          <div className="btn blocky" onClick={previous}>
            Previous
          </div>
          <div className="btn blocky" onClick={updateCandidate}>
            Next
          </div>
        </div>
      </form>
    </section>
  );
};
