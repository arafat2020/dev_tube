import Image from "next/image";
import React, { useContext } from "react";
import { Typography } from "@mui/material";
import timeago from "time-ago";
import { DevContext } from "../provider/stateProvider";
import LazyLoad from "react-lazy-load";

const Card = ({ img, channel, date, title }) => {
  const ctx = useContext(DevContext);
  const sm = ctx.width < 700;
  console.log(sm);
  return (
    <div className="card">
      <LazyLoad height='auto'>
        <img src={img} alt="Thumnile" />
      </LazyLoad>
      <div className="tex">
        <Typography variant="subtitle1">{title}</Typography>
        <Typography style={{
          backgroundColor: "rgb(94, 94, 94)",
          padding: '2px',
          color:'rgb(240, 236, 236)'
        }} variant="subtitle2">{channel}</Typography>
        <Typography variant="caption">{timeago.ago(date)}</Typography>
      </div>
    </div>
  );
};

export default Card;
