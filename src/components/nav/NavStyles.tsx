import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 99%;
  height: 30px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  color: #fff;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.782);
  border-top: solid 0.1px #504848;
  border-bottom: solid 0.1px #504848;
  border-radius: 10px;
  margin: 8px 10px;
  padding: 0 25px;
`;

export const NavRight = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 15px;
  p {
    cursor: pointer;
  }
`;
export const P = styled.div`
   color: #fff;
   text-transform: lowercase;
`
