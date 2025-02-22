import { useState, useEffect, useContext } from "react";

import { AppContexts } from "../../providers";

export const CandidateApplicationSection4 = () => {
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

    setData({ ...data });
  };

  const addIssue = () => {
    data.issues.push({
      issue: "",
      details: "",
    });

    setData({ ...data });
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
        <h3>Why You're Running</h3>

        <p className="parenthetical">
          Next we need to design a comprehensive form form the potentional
          candidate to fill out, which will outline their platform and pitch to
          the voters. Example:
        </p>

        <div className="input-wrapper uk-width-1-1">
          <label>Pitch Headline</label>
          <input
            type="text"
            value={data.pitch_headline}
            onInput={(e) => {
              update("pitch_headline", e.target.value);
            }}
          />
        </div>

        <div className="input-wrapper uk-width-1-1">
          <label>Pitch Details</label>
          <textarea
            value={data.pitch_details}
            rows="10"
            onInput={(e) => {
              update("pitch_details", e.target.value);
            }}
          ></textarea>
        </div>

        <p className="parenthetical">
          We can use all this information to automatically build out a
          collection of resources for the candidate automatically, website,
          merch, things like a door knocking map. Whatever is needed
        </p>

        {/*
        {data.issues.map((issue, idx) => {
          return (
            <div className="issue" key={`issue_${idx}`}>
              <div className="input-wrapper uk-width-1-1">
                <label>Issue Summary</label>
                <input
                  type="text"
                  value={issue.summary}
                  onInput={(e) => {
                    updateIssue(idx, "summary", e.target.value);
                  }}
                />
              </div>

              <div className="input-wrapper uk-width-1-1">
                <label>Issue Details</label>
                <textarea
                  value={issue.details}
                  rows="10"
                  onInput={(e) => {
                    updateIssue(idx, "details", e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          );
        })}
        

        <div className="input-wrapper">
          <div className="btn blocky" onClick={addIssue}>
            Add Issue
          </div>
        </div>
        */}

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
