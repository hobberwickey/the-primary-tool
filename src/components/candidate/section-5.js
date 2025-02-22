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

        <p className="parenthetical">
          Now, we wait and verify everything with the state. Once all their
          paperwork is in order we unlock all their tools and they can publish
          all their info on the site.
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
