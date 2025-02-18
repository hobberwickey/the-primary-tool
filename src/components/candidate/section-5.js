import { useState, useEffect, useContext } from "react";

import { AppContexts } from "../../providers";

export const CandidateApplicationSection5 = () => {
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

  const updateIssue = (idx, field, value) => {
    data.issues[idx][field] = value;
  };

  const addIssue = () => {
    data.issues.push({
      issue: "",
      details: "",
    });
  };

  const updateCandidate = () => {
    setCandidate({ ...data, completed: (candidate.completed += 1) });
  };

  const previous = () => {
    setCandidate({ ...candidate, completed: (candidate.completed -= 1) });
  };

  return (
    <section id="candidate-application-section-2-page">
      <form>
        <h3>You're In The Running!</h3>

        <p>
          You candidate form has been completed, you can now access your tools
          help you in running your campaign. Note, nothing will be visible to
          voters until we've verified your status with the state.
        </p>

        <div className="actions">
          <div className="btn blocky" onClick={previous}>
            Previous
          </div>
          <a href="/candidate/tools">
            <div className="btn blocky">Tools</div>
          </a>
        </div>
      </form>
    </section>
  );
};
