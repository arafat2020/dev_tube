import React, { useContext, useEffect, useState } from "react";
import Vcard from "../../components/Vcard";
import axios from "axios";
import LazyLoad from "react-lazy-load";
import { DevContext } from "../../provider/stateProvider";
import { useRouter } from "next/router";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";


const Search = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const [ld, seLd] = useState(false);

  const ctx = useContext(DevContext);
  useEffect(() => {
    if (ctx.tag) {
      if (ctx.tag) {
        ctx.setPr(20);
        seLd(true)
      }
      const options = {
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/search",
        params: {
          q: ctx.sr,
          part: "snippet,id",
          regionCode: "US",
          maxResults: "50",
          // order: "date",
        },
        headers: {
          "X-RapidAPI-Key":
            "394a3dd44emsh21285a08f5c8ed1p10dc1ejsnd855389420f2",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setData(response.data.items);
          seLd(false)

          ctx.setPr(100);
        })
        .catch(function (error) {
          console.error(error);
          seLd(false)

          ctx.setPr(100);
        });
    }
  }, [ctx.sr]);
  return (
    <div className="container search">
      <Typography variant="h4">Search Reasult</Typography>
      <hr />
      <br/>
      {ld ? (
        <Box sx={{
          width: "80%",
          marginLeft: "10%"
        }}>
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
        data &&
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
              <LazyLoad width="">
                <Vcard
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

export default Search;
