import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoBarbell, IoSettingsOutline, IoHomeOutline } from "react-icons/io5";
import NavigationButton from "./NavigationButton";
import { useState } from "react";

export default function NavigationBar() {

    const [active, setActive] = useState("");

    return (
        <Wrapper>
            <Link to="/dashboard/home">
                <NavigationButton active={active} type="home" setActive={setActive}>
                    <IoHomeOutline size={35} color={active === "home" ? "FABB73" : ""} />
                </NavigationButton>
            </Link>
            <Link to="/dashboard/workout">
                <NavigationButton active={active} type="workout" setActive={setActive}>
                    <IoBarbell size={35} color={active === "workout" ? "FABB73" : ""} />
                </NavigationButton>
            </Link>
            <Link to="/dashboard/settings">
                <NavigationButton active={active} type="settings" setActive={setActive}>
                    <IoSettingsOutline size={35} color={active === "settings" ? "FABB73" : ""} />
                </NavigationButton>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 90vw;
  height: 80px;
  position: absolute;
  bottom: 10px;
`;
