export const LandingPage = () => {
  return (
    <section id="landing-page" className="page">
      <h2>Hi there, welcome to the wireframe</h2>
      <p>Something inspirational over an image</p>

      <h3>Call to action: I want to</h3>

      <div className="actions">
        <div>
          <p>Find candidates in my district</p>
          <a className="btn blocky" href="/voters" alt="Find Candidates">
            Go
          </a>
        </div>
        <div>
          <p>Become a candidate</p>
          <a className="btn blocky" href="/candidate" alt="Become a Candidate">
            Go
          </a>
        </div>
      </div>
    </section>
  );
};
