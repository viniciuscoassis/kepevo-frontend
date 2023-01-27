import { Outlet } from "react-router-dom";
import styled from "styled-components"
import Header from "../../components/Dashboard/Header";
import NavigationBar from "../../components/Navbar/NavigationBar";

export default function Dashboard() {
  return (
    <Wrapper>
      <Header />
      <NavigationBar />
      <Outlet />
    </Wrapper>)
}

const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;
