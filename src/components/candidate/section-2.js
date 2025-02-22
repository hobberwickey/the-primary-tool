import { useState, useEffect, useContext } from "react";

import { AppContexts } from "../../providers";

export const CandidateApplicationSection2 = () => {
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

  return (
    <section id="candidate-application-section-2-page">
      <form>
        <h3>These are the offices you'd be eligible to run for</h3>

        <div className="input-wrapper radio required">
          <input
            name="office"
            type="radio"
            className="uk-radio"
            onChange={() => {
              update("office", "state_senator");
            }}
          />
          <label>State Senator</label>
        </div>

        <div className="input-wrapper radio required">
          <input
            name="office"
            type="radio"
            className="uk-radio"
            onChange={() => {
              update("office", "state_representative");
            }}
          />
          <label>State Representative</label>
        </div>

        <div className="input-wrapper radio required">
          <input
            name="office"
            type="radio"
            className="uk-radio"
            onChange={() => {
              update("office", "city_counselor");
            }}
          />
          <label>City Councilor</label>
        </div>

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
