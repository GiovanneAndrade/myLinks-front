import styled from "styled-components";

export const ButtonContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  width: 500px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.782);
  border: solid 0.1px #504848;
  position: relative;
  margin-top: 100px  ;
 
  input {
    
    border-radius: 15px;
    width: 60%;
    height: 100%;
    background-color: transparent;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    border: none;
    padding: 12px 8px;
    margin-left: 7px;
  }
  input:focus {
    outline: none;
  }
 button{
  transition-duration: 0.1s;
  background-image: linear-gradient(
    to right,
    #051937,
    #003d5c,
    #006369,
    #1f865e,
    #87a34e
  );
  border: solid 0.1px #000;
  border-radius: 15px;
  width: 20%;
  height: 100%;
  color: #fff;
  cursor: pointer;

  margin-right:${(props) => props.type};
 }
`;

 
