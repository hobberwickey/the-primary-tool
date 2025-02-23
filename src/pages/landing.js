import { useState } from "react";

export const LandingPage = () => {
  let [search, setSearch] = useState("");
  let [results, setResults] = useState([
    "1234 State Rd, Mirkwood City, Old Earth",
    "26 Rainbow Rd, Star City, Marioland",
  ]);

  let [address, setAddress] = useState("");

  const handleAddress = (value) => {
    setAddress(value);
    setSearch("");
  };

  return (
    <section id="landing-page" className="page">
      <div className="flex-block">
        <div className="lander"></div>
        <div className="lander-content">
          <h2>It's Our Government, Make Your Voice Heard</h2>
          <form>
            <div className="autocomplete input-wrapper">
              <h3>To get started, please enter your address</h3>
              <input
                value={search || address || ""}
                onInput={(e) => {
                  setSearch(e.target.value);
                }}
              />
              {!!search && results.length && (
                <ul className="uk-list results">
                  {results.map((result) => {
                    return (
                      <li
                        onClick={() => {
                          handleAddress(result);
                        }}
                      >
                        {result}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </form>
          {!!address && (
            <div>
              <h3>I want to</h3>

              <div className="actions">
                <div>
                  <div>
                    <p>Find candidates in my district</p>

                    <a
                      className="btn blocky"
                      href="/voters"
                      alt="Find Candidates"
                    >
                      Go
                    </a>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Become a candidate</p>
                    <a
                      className="btn blocky"
                      href="/candidate"
                      alt="Become a Candidate"
                    >
                      Go
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          ;
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
