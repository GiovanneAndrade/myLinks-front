import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { AuthContext } from "../../providers/auth";


export default function ControlledCheckbox(props) {
  const [ids, setIds] = React.useState([]);
  const { newLink } = React.useContext(AuthContext) ;

  React.useEffect(() => {
    const checkString = localStorage.getItem("check");
    if (checkString) {
      setIds(JSON.parse(checkString));
    }
  }, []);

  const handleChange = (linkId) => {
    const checkString = localStorage.getItem("check");
    
    if (!checkString) {
      localStorage.setItem("check", JSON.stringify([{ id: linkId }]));
      setIds([linkId]);
    } else {
      const getCheck = JSON.parse(checkString);
      const existingObj = getCheck.find((obj) => obj.id === linkId);
  
      if (existingObj) {
        const newCheck = getCheck.filter((obj) => obj.id !== linkId);
        localStorage.setItem("check", JSON.stringify(newCheck));
        setIds(newCheck.map((obj) => obj.id));
      } else {
        const newCheck = [...getCheck, { id: linkId }];
        localStorage.setItem("check", JSON.stringify(newCheck));
        setIds(newCheck.map(obj => obj.id));
      }
      
    }
  };
  

  return (
    <Checkbox
      checked={ids.includes(props.linkId)}
      onChange={() => handleChange(props.linkId)}
      inputProps={{ "aria-label": "controlled", id: props.linkId }}
      style={{ color: "white" }}
    />
  );
}
