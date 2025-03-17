import React from "react";
import SectionHero from "../components/SectionHero";
import grade from "../assets/grade.jpg";

function Grade() {
  return (
    <div>
      <SectionHero title="EYFS" tagline="catch them young" image={grade} />
    </div>
  );
}

export default Grade;
