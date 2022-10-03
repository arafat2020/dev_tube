import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import Card from "./Card";
import { useRouter } from "next/router";
import LazyLoad from "react-lazy-load";
import { DevContext } from "../provider/stateProvider";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const Recomen = ({ _id }) => {
  const [data, setData] = useState([]);
  const [ld, seLd] = useState(false);
  const router = useRouter();
  const ctx = useContext(DevContext);

  useEffect(() => {
    seLd(true);
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        relatedToVideoId: _id,
        part: "id,snippet",
        type: "video",
        maxResults: "50",
      },
      headers: {
        "X-RapidAPI-Key": "394a3dd44emsh21285a08f5c8ed1p10dc1ejsnd855389420f2",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    if (_id) {
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
    }
  }, [_id]);
  console.log(data);
  return (
    <div className="recomen">
      <Typography variant="h5">Releted Vedeo</Typography>
      <hr />
      {ld ? (
        <Box sx={{ width: '100%' }}>
          <Skeleton height={150} />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton height={150} />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton height={150} />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
      ) : (
        data.map((e) => {
          return (
            <div
              onClick={() => {
                router.push(`/watch/${e.id.videoId}`);
                ctx.setPr(20);
                ctx.setDetail({
                  id: e.id.videoId,
                  title: e.snippet.title,
                  channel: e.snippet.channelTitle,
                  date:e.snippet.publishTime
                });
              }}
              key={e.id.videoId}
            >
              <LazyLoad>
                <Card
                  key={e.id.videoId}
                  img={e.snippet.thumbnails.medium.url}
                  channel={e.snippet.channelTitle}
                  date={e.snippet.publishTime}
                  title={e.snippet.title}
                />
              </LazyLoad>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Recomen;
