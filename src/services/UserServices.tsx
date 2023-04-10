import axios from "axios";
import { AuthContext } from "../providers/auth";
import React, { useEffect } from "react";

const APIprefix = "http://localhost:4000";

let token = localStorage.getItem("tokenMyLink") as any;
token = JSON.parse(token);

const config = {
  headers: { authorization: `${token?.token}` },
};
function postSignin(formValues: any) {
  console.log(formValues);
  return axios.post(`${APIprefix}/signin`, formValues);
}
function postSignup(formValues: any) {
  return axios.post(`${APIprefix}/signup`, formValues);
}
function postLinks(value: any) {
  return axios.post(`${APIprefix}/link`, { link: value }, config);
}
function postCategory(value: string) {
  let listLink = localStorage.getItem("check") as any;
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
