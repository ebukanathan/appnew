import React from "react";
import SectionHero from "../components/SectionHero";
import highschl from "../assets/highschl.jpg";
function HighSchool() {
  return (
    <div>
      <SectionHero
        title="High school"
        tagline="catch them young"
        image={highschl}
      />
    </div>
  );
}

export default HighSchool;
