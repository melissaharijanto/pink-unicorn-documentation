import React from "react";
import { teamData } from "./team";
import TeamCard from "./TeamCard";

const TeamCards = () => {
  return (
    <div>
      {teamData.map((member, idx) => (
        <TeamCard data={member} key={idx} />
      ))}
    </div>
  );
};
export default TeamCards