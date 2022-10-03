import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Cmt from "./Cmt";
import axios from "axios";
import LazyLoad from "react-lazy-load";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const Comments = ({ _id }) => {
  const [ld, seLd] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    seLd(true);
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/commentThreads",
      params: { part: "snippet", videoId: _id, maxResults: "50" },
      headers: {
        "X-RapidAPI-Key": "394a3dd44emsh21285a08f5c8ed1p10dc1ejsnd855389420f2",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data.items);
        seLd(false);
      })
      .catch(function (error) {
        console.error(error);
        seLd(false);
      });
  }, [_id]);
  return (
    <div className="comments">
      <Typography variant="h6">Comments</Typography>
      <hr />
      {ld ? (
        <Box>
          <Skeleton height={50} width={50} variant="circular" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton height={50} width={50} variant="circular" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton height={50} width={50} variant="circular" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton height={50} width={50} variant="circular" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
      ) : (
        data?.map((e) => {
          return (
            <div key={e.snippet.videoId}>
              
                <Cmt
                  key={e.snippet.videoId}
                  img={e.snippet.topLevelComment.snippet.authorProfileImageUrl}
                  name={e.snippet.topLevelComment.snippet.authorDisplayName}
                  text={e.snippet.topLevelComment.snippet.textDisplay}
                />
              
            </div>
          );
        })
      )}
    </div>
  );
};

export default Comments;
