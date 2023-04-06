import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CategoriesConteiner } from "../categories/CategoriesStyles";
import { CardContainer, Cards, Img } from "./CardStyles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AuthContext } from "../../providers/auth";
import ControlledCheckbox from "../checkbox/Checks";
export const Card = (props: any) => {
  const notify = () => toast("Em Breve!");
  const { showAddButton, setShowAddButton } = React.useContext(
    AuthContext
  ) as any;
  const [selectLink, setSelectLink] = useState<any[]>([]);

  const [show, setShow] = useState({
    width: "450px",
    color: "null",
    content: "space-between",
    font: "15px",
    display: "block",
    top: "null",
    right: "null",
    position: "relative",
    padding: "0 0 10px 0",
  });
 
 

  return (
    <CategoriesConteiner type={show}>
      <div>
        <DeleteIcon onClick={notify} className="arrowIcon" />
        <EditIcon onClick={notify} className="edit" />

        <span className="check" >
          <p>Links de Noticias</p>
          {showAddButton ? (
            <ControlledCheckbox linkId={props.linkId}/>
          ) : null}
        </span>
      </div>
       
      <Cards>
        <Img>
          <img src={props.banner} />
        </Img>
        <span>
          <p>Descrição: {props.description}</p>
          <p>Titulo: {props.title}</p>
        </span>
      </Cards>

      <a href="">{props.website}</a>
    </CategoriesConteiner>
  );
};
