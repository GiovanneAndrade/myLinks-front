import React, { useState } from "react";

import { CategoriesConteiner } from "../categories/CategoriesStyles";
import { CardContainer, Cards, Img } from "./CardStyles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AuthContext } from "../../providers/auth";
import ControlledCheckbox from "../checkbox/Checks";
import { toast } from "react-toastify";
import { deleteLink } from "../../services/UserServices";
export const Card = (props) => {
  const {
    showAddButton,
    categories,
    categoryName,
    link,
    setLink,
    setNewLink,
    newLink,
    clickedLinkId,
    setClickedLinkId,
  } = React.useContext(AuthContext);
  const notify = () => toast("Em Breve!");

  const [show, setShow] = useState({
    //width: "450px",
    color: "null",
    content: "space-between",
    font: "15px",
    display: "block",
    top: "null",
    right: "null",
    position: "relative",
    padding: "0 0 10px 0",
  });
  const selectcategory = !props?.list
    ? categoryName
    : `${props?.list[0]?.name} + ${props?.list.length}`;

  const itemName = props.list?.length === 0 ? "sem categorias" : selectcategory;

  function deleteCard(link) {
    const links = { links: [{ linkId: props.linkId }] };

    const cards = deleteLink(links);
    cards
      .then((response) => {
        const delLink = newLink.filter((l) => l.id !== props.linkId);
        setNewLink(delLink);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert(error.response.data.message);
      });
  }
  const handleCardClick = (linkId) => {
    /* setClickedLinkId(linkId); */
    notify();
  };

  return (
    <>
      <CategoriesConteiner type={show} widthInitial="initial">
        <div>
          <div className="actions-container">
            <DeleteIcon
              onClick={() => deleteCard(link)} className="arrowIcon"
            />
            <EditIcon
              onClick={() => handleCardClick(props.linkId)}className="edit"
            />
          </div>

          <span className="check">
            <p>{itemName}</p>
            {showAddButton ? (
              <ControlledCheckbox linkId={props.linkId} />
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

        <a href={props.website} target="_blank" rel="noreferrer">
          {props.website}
        </a>
      </CategoriesConteiner>
    </>
  );
};
