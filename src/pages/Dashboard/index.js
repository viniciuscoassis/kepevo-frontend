import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Dashboard/Header";
import NavigationBar from "../../components/Navbar/NavigationBar";

export default function Dashboard() {
  return (
    <>
      <Wrapper>
        <Header />
        <Outlet />
        <NavigationBar />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 50vw;
  margin: 0 auto;

  box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  padding: 5rem;
  @media (max-width: 600px) {
    box-shadow: none;
    padding: 20px;
    height: 100%;
    width: 100%;
  }
`;
