import React from "react";
import CardType1 from "./CardType1";
import edo from "../assets/edo.jpg";
import interhouse from "../assets/interhouse.jpg";
import tiv from "../assets/tiv.jpg";

function NewsandEvents() {
  const events = [
    {
      image: tiv,
      title: "Cultural day",
      desc: "a vibrant showcase of traditions, music, dance, and fashion from diverse cultures!",
    },
    {
      image: edo,
      title: "End of Year Party",
      desc: "nice outing",
    },
    {
      image: interhouse,
      title: "interhouse sports competition",
      desc: "Witnessing our students cheer for their houses, push their limits, and celebrate each other’s achievements reminded us why sports is a cornerstone of our school community.",
    },
  ];
  return (
    <div className="w-4/5 mx-auto my-8">
      <div className="text-2xl text-center capitalize my-8">
        news and events
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3">
        {events.map((event, index) => (
          <CardType1
            key={index}
            image={event.image}
            title={event.title}
            desc={event.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsandEvents;
