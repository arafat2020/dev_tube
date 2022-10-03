import { createContext, useEffect, useState } from "react";

export const DevContext = createContext();

export const DevProvider = ({ children }) => {
  const [width,setW]=useState()
  const [tag, setTag] = useState("Programming");
  const [pr, setPr] = useState(0);
  const [sr, setSr] = useState("");
  useEffect(() => {
    setW(screen.width)
  },[])
const [detail,setDetail] = useState({
	id:"",
	title:"",
  channel: "",
  date:""
})
  
  
  return (
    <DevContext.Provider
      value={{
        tag,
        setTag,
        pr,
        setPr,
        sr,
        setSr,
        width,
		detail,
		setDetail
      }}
    >
      {children}
    </DevContext.Provider>
  );
};
