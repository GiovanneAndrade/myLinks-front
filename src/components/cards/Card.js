import React, { useState } from "react";

import { CategoriesConteiner } from "../categories/CategoriesStyles";
import { CardContainer, Cards, Img } from "./CardStyles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AuthContext } from "../../providers/auth";
import ControlledCheckbox from "../checkbox/Checks";
import { toast } from "react-toastify";
export const Card = (props) => {
  const notify = () => toast("Em Breve!");
  const { showAddButton, setShowAddButton, categoryName } = React.useContext(
    AuthContext
  );
  const [selectLink, setSelectLink] = useState([]);

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
  const selectcategory = !props?.list ? categoryName : `${props?.list[0]?.name} + ${props?.list.length}`;
  const itemName = props.list?.length === 0 ? "sem categorias" : selectcategory;
  return (
    <CategoriesConteiner type={show}>
      <div>
        <DeleteIcon onClick={notify} className="arrowIcon" />
        <EditIcon onClick={notify} className="edit" />

        <span className="check">
          <p>{itemName}</p>
          {showAddButton ? <ControlledCheckbox linkId={props.linkId} /> : null}
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

      <a href={props.website} target="_blank" rel="noreferrer">
        {props.website}
      </a>
    </CategoriesConteiner>
  );
};
