import { useState } from "react";

export const VotersLandingPage = () => {
  let [search, setSearch] = useState("");
  let [results, setResults] = useState([
    "1234 State Rd, Mirkwood City, Old Earth",
    "26 Rainbow Rd, Star City, Marioland",
  ]);

  let [address, setAddress] = useState("");

  // TODO: if signed in, pull address

  return (
    <section id="voter-landing-page" className="page">
      <h2>Howdy voter: Here are your Candidates</h2>
      <div>
        {/*
        <div>
          <b>My Address:</b> {address}{" "}
          <span
            data-uk-icon="icon: trash"
            onClick={() => setAddress("")}
          ></span>
        </div>
        */}
        <div>
          <b></b>
          <div className="reps">
            <div className="office">
              <h3>State Senator</h3>
              <ul className="uk-list">
                <li>
                  <a className="btn" href="/candidates/1">
                    Jane Q. Candidate
                  </a>
                </li>
                <li>
                  <a className="btn" href="/candidates/1">
                    Jane Q. Candidate
                  </a>
                </li>
              </ul>
            </div>
            <div className="office">
              <h3>State Representative</h3>
              <ul className="uk-list">
                <li>
                  <a className="btn" href="/candidates/1">
                    Jane Q. Candidate
                  </a>
                </li>
                <li>
                  <a className="btn" href="/candidates/1">
                    Jane Q. Candidate
                  </a>
                </li>
              </ul>
            </div>
            <div className="office">
              <h3>City Counciller</h3>
              <ul className="uk-list">
                <li>
                  <a className="btn" href="/candidates/1">
                    Jane Q. Candidate
                  </a>
                </li>
                <li>
                  <a className="btn" href="/candidates/1">
                    Jane Q. Candidate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
