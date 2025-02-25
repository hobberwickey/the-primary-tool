export const CandidateTools = () => {
  return (
    <section id="candidate-tools" className="page">
      <h3>Here's all your tools to manage a successful campaign</h3>

      <p className="parenthetical">
        This is the real meat and potatoes, we either source or build as needed,
        open source, free to use tools for literally everything a candidate
        needs to run a campaign.
      </p>

      <div className="tool website">
        <label>My Website</label>

        <p>
          Based off the information you've entered we've created this website
          for you. It can be customized{" "}
          <a href="/candidate/tools/website" className="btn">
            here
          </a>
          . It can be hosted on our servers free of charge, or you can download
          the source code and be edited/or hosted wherever you'd like.
        </p>
      </div>

      <div className="tool finances">
        <label>Campaign Finance Tools</label>

        <p>
          Your campaign will need to set up a bank account. Once you've done
          that, you can connect if with our{" "}
          <a href="candidate/tools/financials" className="btn">
            financial services
          </a>{" "}
          tools to accept donations, sell campaign merchandise, or and manage
          payment to vendors
        </p>
      </div>

      <div className="tool volunteers">
        <label>Volunteer/Staff Management</label>

        <p>
          You can access all the tools you need to sign up staff and volunteers{" "}
          <a href="/candidate/tools/staff" className="btn">
            here
          </a>
          . This includes task management tools, payroll, and tools for phone
          banking and canvasing
        </p>
      </div>

      <div className="tool volunteers">
        <label>Fundraising</label>
      </div>

      <div className="tool volunteers">
        <label>Messaging/Training</label>
      </div>

      <div className="tool volunteers">
        <label>Graphic Resources</label>
      </div>

      <div className="tool volunteers">
        <label>Union Print Shops</label>
      </div>
    </section>
  );
};
