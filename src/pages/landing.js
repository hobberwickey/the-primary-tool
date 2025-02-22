export const LandingPage = () => {
  return (
    <section id="landing-page" className="page">
      <div className="lander"></div>
      <div className="lander-content">
        <h2>It's Our Government, Make Your Voice Heard</h2>

        <h3>Call to action: I want to</h3>

        <div className="actions">
          <div>
            <div>
              <p>Find candidates in my district</p>
              <a className="btn blocky" href="/voters" alt="Find Candidates">
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
    </section>
  );
};
