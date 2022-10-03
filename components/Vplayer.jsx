import React, { useContext, useEffect, useState } from "react";
import YouTube from "react-youtube";
import Skeleton from "@mui/material/Skeleton";
import { DevContext } from "../provider/stateProvider";
import timeago from "time-ago";
import { Button, Typography } from "@mui/material";
import Comments from './Comments'


const Vplayer = ({ _id }) => {
  const [raedy, setSeady] = useState(false);
  const ctx = useContext(DevContext);
  const [open,setOpen] = useState(false)
  const opt = {
    width: "100%",
    height: "350",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div>
      <YouTube
        videoId={_id}
        opts={opt}
        loading="lazy"
        onReady={(e) => {
          e.target.pauseVideo();
          setSeady(true);
        }}
      />
      {!raedy && (
        <Skeleton width="100%" height={"auto"} variant="rectangular" />
      )}
      <div
        style={{
          margin: "10px",
        }}
      >
        <Typography variant="subtitle1">{ctx.detail.title}</Typography>
        <Typography
          style={{
            backgroundColor: "rgb(94, 94, 94)",
            padding: "2px",
            color: "rgb(240, 236, 236)",
          }}
          variant="subtitle2"
        >
          {ctx.detail.channel}
        </Typography>
        <Typography variant="caption">
          {timeago.ago(ctx.detail.date)}
        </Typography>
        
      </div>
      
    </div>
  );
};

export default Vplayer;
