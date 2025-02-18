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
      <h2>Howdy voter</h2>

      {!!address ? (
        <div>
          <div>
            <b>My Address:</b> {address}{" "}
            <span
              data-uk-icon="icon: trash"
              onClick={() => setAddress("")}
            ></span>
          </div>

          <div>
            <b>My Candidates:</b>
            <div className="reps">
              <div className="office">
                <h3>State Senator</h3>
                <ul className="uk-list">
                  <li>
                    <a className="btn" href="/candidates/1">
                      Barbara P. Whitman
                    </a>
                  </li>
                  <li>
                    <a className="btn" href="/candidates/1">
                      Barbara P. Whitman
                    </a>
                  </li>
                </ul>
              </div>
              <div className="office">
                <h3>State Representative</h3>
                <ul className="uk-list">
                  <li>
                    <a className="btn" href="/candidates/1">
                      Barbara P. Whitman
                    </a>
                  </li>
                  <li>
                    <a className="btn" href="/candidates/1">
                      Barbara P. Whitman
                    </a>
                  </li>
                </ul>
              </div>
              <div className="office">
                <h3>City Counciller</h3>
                <ul className="uk-list">
                  <li>
                    <a className="btn" href="/candidates/1">
                      Barbara P. Whitman
                    </a>
                  </li>
                  <li>
                    <a className="btn" href="/candidates/1">
                      Barbara P. Whitman
                    </a>
                  </li>
                </ul>
              </div>
              <div className="office">
                <h3>Dog Catcher</h3>
                <ul className="uk-list">
                  <li>
                    <a className="btn" href="/candidates/1">
                      Barbara P. Whitman
                    </a>
                  </li>
                  <li>
                    <a className="btn" href="/candidates/1">
                      Barbara P. Whitman
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Find candidates in my district</p>

          <div>
            <label>Enter your address</label>

            <div className="autocomplete">
              <input
                value={search}
                onInput={(e) => {
                  setSearch(e.target.value);
                }}
              />
              {!!search && results.length && (
                <ul className="uk-list">
                  {results.map((result) => {
                    return (
                      <li
                        onClick={() => {
                          setAddress(result);
                        }}
                      >
                        {result}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <p>Or</p>

            <div className="btn">
              <a href="/auth/sign-in">Sign In</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
