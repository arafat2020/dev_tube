import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Vplayer from "../../components/Vplayer";
import Comments from "../../components/Comments";
import Recomen from "../../components/Recomen";
import { DevContext } from "../../provider/stateProvider";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Button } from "@mui/material";
import { useState } from "react";

const Watch = () => {
  const ctx = useContext(DevContext);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { id } = router.query;
  useEffect(() => {
    ctx.setPr(100);
  }, [id]);
  console.log(ctx.width);
  return (
    <div className="container flex">
      <div className="Vandc">
        <Vplayer _id={id} />
        {ctx.width > 700 ? (
          <Comments className="gone" key={id} _id={id} />
        ) : (
          <SwipeableDrawer
            anchor="bottom"
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
          >
            <Button onClick={() => setOpen(false)} className="btn_sm">
              Close
            </Button>
            <Comments className="gone" key={id} _id={id} />
          </SwipeableDrawer>
        )}
        <Button onClick={() => setOpen(true)} className="btn_sm">
          Comments
        </Button>
      </div>
      <div className="recomended">
        <Recomen _id={id} />
      </div>
    </div>
  );
};

export default Watch;
