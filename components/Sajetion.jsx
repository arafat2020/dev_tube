import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { DevContext } from "../provider/stateProvider";

const Sajetion = () => {
  const ctx = useContext(DevContext);
  const tag = [
    "Progarmming",
    "Technology",
    "Music",
    "website",
    "JavaScript",
    "Python",
    "Gamming",
    "Computer",
    "Ghost",
    "Ship",
    "Horror",
    "Movie",
    "Combat",
    "Ship",
    "Hitman",
    "Thriller",
    "Anime",
  ];
  return (
    <div className="Sajes">
      <hr />
      <div className="sajetion">
        {tag.map((t, i) => {
          return (
            <div key={i}>
              <button
                onClick={() => {
                  ctx.setTag(t);
                }}
              >
                {t}
              </button>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Sajetion;
