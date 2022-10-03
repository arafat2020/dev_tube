import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import timeago from "time-ago";

const Vcard = ({ img, channel, date, title }) => {
  return (
    <div className="vcard">
      <div className="img">
        <Image src={img} alt="thumnail" width={320} height={180} />
      </div>
      <div className="text">
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="subtitle2">{channel}</Typography>
        <Typography variant="caption">{timeago.ago(date)}</Typography>
      </div>
    </div>
  );
};

export default Vcard;
