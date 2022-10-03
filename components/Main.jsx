import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import LazyLoad from "react-lazy-load";
import { DevContext } from "../provider/stateProvider";
import Image from "next/image";
import { useRouter } from "next/router";

const Main = () => {
  const ctx = useContext(DevContext);
  const [ld, setLd] = useState(false);
  const [data, setData] = useState();
  const router = useRouter();
  useEffect(() => {
    if (ctx.tag) {
      if (ctx.tag) {
        setLd(true);
        ctx.setPr(20);
      }
      const options = {
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/search",
        params: {
          q: ctx.tag,
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
          setLd(false);
          ctx.setPr(100);
        })
        .catch(function (error) {
          console.error(error);
          setLd(false);
          ctx.setPr(100);
        });
    }
  }, [ctx.tag]);
  return (
    <div className="main">
      {ld ? (
        <Image src="/833.svg" alt="Loader" width={100} height={100} />
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
              <LazyLoad width={320}>
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

export default Main;
