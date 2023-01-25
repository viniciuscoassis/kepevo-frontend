import { Outlet } from "react-router-dom";
import styled from "styled-components"
import NavigationBar from "../../components/dashboard/NavigationBar";

export default function Dashboard() {
    return (
        <Wrapper>
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
