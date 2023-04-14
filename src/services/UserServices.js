import axios from "axios";
import { AuthContext } from "../providers/auth";
import React, { useEffect } from "react";

const APIprefix = process.env.REACT_APP_BACK_END_URL;
 
let token = localStorage.getItem("tokenMyLink") ;
token = JSON.parse(token);

const config = {
  headers: { authorization: `${token?.token}` },
};
function postSignin(formValues) {
  console.log(formValues);
  return axios.post(`${APIprefix}/signin`, formValues);
}
function postSignup(formValues) {
  return axios.post(`${APIprefix}/signup`, formValues);
}
function postLinks(value) {
  return axios.post(`${APIprefix}/link`, { link: value }, config);
}
function postCategory(value) {
  let listLink = localStorage.getItem("check");
  listLink = listLink ? JSON.parse(listLink) : [];

  return axios.post(
    `${APIprefix}/category`,
    { name: value, linkId: listLink },
    config
  );
}
function getLinks() {
  return axios.get(`${APIprefix}/link?page=${1}&page_page=${10}`, config);
}
function getCategories() {
  return axios.get(`${APIprefix}/category`, config);
}
export {
  postSignin,
  postLinks,
  getLinks,
  postCategory,
  getCategories,
  postSignup,
};
