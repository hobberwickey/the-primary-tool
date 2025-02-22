// Import package components
import { createContext, useState } from "react";

export const CandidateContext = createContext();
export const CandidateProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [candidate, setCandidate] = useState({
    id: 1,
    verified: false,
    completed: 0,
    first_name: "Jane Q.",
    last_name: "Candidate",
    phone: "(555) 123-4567",
    email: "contact@whitman.com",
    address: "",
    office: "State Representative",
    requirements_status: {
      completed: true,
    },
    pitch_headline: `I'm running to give every Mass resident the healthcare they deserve`,
    pitch_details: `For too long we've waited for Washington to step up and stop the maddness of our healthcare system, and while we've watched ourselves and our loved ones suffer and die, they've done  nothing. It's long overdue that we take action ourselves. I'm running amplify our voices and push MassCare past a resolution into reality and give us the healthcare we deserve. No one left behind, no deducibles, no arbitrary denials, no networks, decisions left to you and your doctor
    `,
    issues: [
      {
        summary: "Support MassCare",
        details: `Incumbent Rep X has not signed on to support MassCare. I will, and I will fight with all tools at my disposal to make it a reality`,
      },
      {
        summary: "Electoral Reform",
        details:
          "We must explore every option available, including radical ones to erase the impact of Citizen's United",
      },
      {
        summary: "Criminal Justice Reform",
        details:
          "Any mention of criminal justice reform that does not include holding white collar criminals to the same account as everyone else can not be considered justice at all",
      },
    ],
  });

  const candidateContext = {
    loading,
    candidate,
    setCandidate,
  };

  return (
    <CandidateContext.Provider value={candidateContext}>
      {children}
    </CandidateContext.Provider>
  );
};
