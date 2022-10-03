import React, { useContext, useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Switch from "@mui/material/Switch";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";

import { IconButton, InputBase, Paper } from "@mui/material";
import { DevContext } from "../provider/stateProvider";
import LoadingBar from "react-top-loading-bar";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const ctx = useContext(DevContext);
  const router = useRouter()
  const [sr, setSr] = useState();
  const handleSubmitt = () => {
    router.push(`/search/res`)
    ctx.setSr(sr)
    ctx.setPr(20)
    document.getElementById("form").reset();
  };
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={ctx.pr}
        onLoaderFinished={() => ctx.setPr(0)}
      />
      <div className="nav">
        <div>
          <div className="log">
            <MenuIcon />
            <Link href="/">
              <Image
                style={{cursor:'pointer'}}
                className="img"
                src="/logo-black.svg"
                alt="logo"
                width="100"
                height="90"
              />
            </Link>
          </div>
          <div className="input">
            <Paper
              id="form"
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                backgroundColor: "white",
              }}
            >
              <InputBase
                onChange={(e) => {
                  setSr(e.target.value);
                }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Serach Video"
                inputProps={{ "aria-label": "Search Video" }}
              />
              <IconButton
                onClick={handleSubmitt}
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
