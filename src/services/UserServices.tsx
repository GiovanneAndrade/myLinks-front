import axios from "axios";

const APIprefix = "http://localhost:4000";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgwNzMxMzcxLCJleHAiOjE2ODA3NDU3NzF9.S3KasMzuKjpkTkcYHK7fenm6JS3HFfUUqBy_3LWDvmQ";
const config = {
  headers: { authorization: `${token}` },
};
function postSignin(formValues: any) {
  return axios.post(`${APIprefix}/signin`, formValues);
}

function postLinks(value: any) {
  return axios.post(`${APIprefix}/link`, { link: value }, config);
}
function postCategory(value: string) {
   let listLink = localStorage.getItem("check") as any;
   listLink = listLink ? JSON.parse(listLink): [] 
   
   console.log(listLink);
  return axios.post(`${APIprefix}/category`, { name: value, linkId:listLink }, config);
}
function getLinks() {
  return axios.get(`${APIprefix}/link`, config);
}
function getCategories() {
  return axios.get(`${APIprefix}/category`, config);
}
export { postSignin, postLinks,getLinks, postCategory,getCategories };
