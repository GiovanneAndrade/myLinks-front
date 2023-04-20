import axios from "axios";
 

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
function postLinks(value, listId) {
  return axios.post(`${APIprefix}/link`, { link: value, listId:listId }, config);
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
function deleteLink(link) {
  return axios.delete(`${APIprefix}/link`, {
    ...config,
    data:  link 
  });
}
function editLink(link) {
  return axios.put(`${APIprefix}/link`, link, config);
}

export {
  postSignin,
  postLinks,
  getLinks,
  postCategory,
  getCategories,
  postSignup,
  deleteLink,
  editLink
};
