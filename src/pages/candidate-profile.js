import { useState, useContext } from "react";

import { AppContexts } from "../providers";

export const CandidateProfile = () => {
  const { loading, candidate } = useContext(AppContexts.CandidateContext);

  const [selectedIssue, setSelectedIssue] = useState(0);

  return (
    <section id="candidate-profile" className="page">
      <div className="sidebar">
        <h3>Get Involved</h3>

        <ul className="uk-list">
          <li>
            <a
              className="btn"
              target="_blank"
              href="https://www.sec.state.ma.us/voterregistrationsearch/"
            >
              Registration to Vote
            </a>
          </li>
          <li>
            <a className="btn" href={`/candidate/${candidate.id}/volunteer`}>
              Volunteer
            </a>
          </li>
          <li>
            <a className="btn" href={`/candidate/${candidate.id}/donate`}>
              Donate
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="aligned">
          <h1 className="aligned-left">
            {candidate.first_name} {candidate.last_name}
          </h1>
          <div className="aligned">
            <div className="aligned-right">
              <span
                className="check-icon-fix"
                uk-icon="icon: check; ratio: 2"
                uk-tooltip="title: Voting Record"
              ></span>
              <span
                uk-icon="icon: social; ratio: 2"
                uk-tooltip="title: Social Media"
              ></span>
              <span
                uk-icon="icon: star; ratio: 2"
                uk-tooltip="title: Endorsments"
              ></span>
              <span
                uk-icon="icon: link-external; ratio: 2"
                uk-tooltip="title: Media"
              ></span>
            </div>
          </div>
        </div>
        <div className="overview uk-flex">
          <div className="profile-picture uk-width-1-3">
            <iframe
              width="250"
              height="300"
              src="https://www.youtube.com/embed/cBkWhkAZ9ds?si=AGsxXkFoAAQqux71"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="profile-info uk-width-2-3">
            <p>Running for {candidate.office}</p>

            <div className="pitch">
              <div className="pitch_headline">
                <h3>{candidate.pitch_headline}</h3>
              </div>
              <p>{candidate.pitch_details}</p>
            </div>
          </div>
        </div>

        <ul class="uk-subnav uk-subnav-pill" data-uk-switcher>
          {(candidate?.issues || []).map((issue, idx) => {
            return (
              <li
                key={`tab-${idx}`}
                className={selectedIssue === idx ? "uk-active" : ""}
              >
                <a
                  href="#"
                  onClick={() => {
                    setSelectedIssue(idx);
                  }}
                >
                  {issue.summary}
                </a>
              </li>
            );
          })}
        </ul>

        <div class="uk-switcher uk-margin">
          {(candidate?.issues || []).map((issue, idx) => {
            return (
              <div
                key={`tab-content-${idx}`}
                className={selectedIssue === idx ? "uk-active" : ""}
              >
                <p>{issue.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
