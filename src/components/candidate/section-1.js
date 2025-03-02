import { useState, useEffect, useContext } from "react";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";

import { AppContexts } from "../../providers";
import { GEOCODER_AUTOCOMPLETE } from '../../constants'

export const CandidateApplicationSection1 = () => {
  const { loading, candidate, setCandidate } = useContext(
    AppContexts.CandidateContext
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
    console.log("Updating Candidate:", candidate);
    setCandidate({ ...data, completed: (candidate.completed += 1) });
  };

  // Set up the address input w/ autocomplete
  useEffect(() => {
    if (
      !document.getElementsByClassName("geoapify-autocomplete-input").length
    ) {
      const autocompleteInput = new GeocoderAutocomplete(
        document.getElementById("application-autocomplete"),
        GEOCODER_AUTOCOMPLETE,
        {
          filter: {
            countrycode: ["us"],
          },
        }
      );
      autocompleteInput.on("select", (location) => {
        update('address', location.properties?.formatted);
      });
    }
  }, []);

  return (
    <section id="candidate-application-section-1-page">
      <form>
        <h3>Essential Information</h3>

        <p className="parenthetical">
          First get whatever basic information we need to see what offices
          they're eligable for
        </p>

        <div className="input-wrapper uk-width-1-2 required">
          <label>First Name</label>
          <input
            value={data?.first_name}
            onInput={(e) => update("first_name", e.target.value)}
          />
        </div>
        <div className="input-wrapper uk-width-1-2 required">
          <label>Last Name</label>
          <input
            value={data?.last_name}
            onInput={(e) => update("last_name", e.target.value)}
          />
        </div>
        <div className="input-wrapper uk-width-1-2 required">
          <label>Email</label>
          <input
            value={data?.email}
            onInput={(e) => update("email", e.target.value)}
          />
        </div>
        <div className="input-wrapper uk-width-1-2 required">
          <label>Phone</label>
          <input
            value={data?.phone}
            onInput={(e) => update("phone", e.target.value)}
          />
        </div>
        <div className="input-wrapper uk-width-1-1 autocomplete-box override-width">
          <label>Home Address</label>

          <div id="application-autocomplete"></div>
        </div>

        <div className="actions">
          <div className="btn blocky" onClick={updateCandidate}>
            Next
          </div>
        </div>
      </form>
    </section>
  );
};
