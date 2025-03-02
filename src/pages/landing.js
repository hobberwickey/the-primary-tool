import { useState, useEffect } from "react";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
import { GEOCODER_AUTOCOMPLETE } from "../constants";

export const LandingPage = () => {
  const [address, setAddress] = useState(undefined);

  // Set up the address input w/ autocomplete
  useEffect(() => {
    if (!document.getElementsByClassName("geoapify-autocomplete-input").length) {
      const autocompleteInput = new GeocoderAutocomplete(
        document.getElementById("landing-autocomplete"),
        GEOCODER_AUTOCOMPLETE,
        {
          filter: {
            countrycode: ["us"],
          },
        }
      );
      autocompleteInput.on("select", (location) => {
        setAddress(location?.properties.formatted);
      });
    }
  }, [])

  return (
    <section id="landing-page" className="page">
      <div className="flex-block">
        <img
          className="lander"
          src="/images/replace-landing-image.webp"
          alt="Landing page image"
        />
        <div className="lander-content">
          <h2>
            <strong>It's Our Government</strong>
            <br />
            Make your voice heard
          </h2>
          <form>
            <div className="autocomplete-box input-wrapper">
              <h3 htmlFor="address">
                To get started, please enter your address
              </h3>
              <div id="landing-autocomplete"></div>
            </div>
          </form>
          <div style={{ visibility: address ? "visible" : "hidden" }}>
            <h3>I want to</h3>

            <div className="actions">
              <a className="btn blocky" href="/voters" alt="Find Candidates">
                Find candidates in my district
              </a>
              <a
                className="btn blocky"
                href="/candidate"
                alt="Become a Candidate"
              >
                Become a candidate
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="parenthetical">
          There's no reason we can't give voters all the tools they need to make
          informed decisions about the candidates in their district and give
          candidates all the tools they need to run a vital, and successful
          campaign all for free.
        </p>
      </div>
    </section>
  );
};