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
                    {active === "home" ? <IoHomeOutline size={50} color="FABB73" /> : <IoHomeOutline size={50} />}
                </NavigationButton>
            </Link>
            <Link to="/dashboard/workout">
                <NavigationButton active={active} type="workout" setActive={setActive}>
                    {active === "workout" ? <IoBarbell size={50} color="FABB73" /> : <IoBarbell size={50} />}
                </NavigationButton>
            </Link>
            <Link to="/dashboard/settings">
                <NavigationButton active={active} type="settings" setActive={setActive}>
                    {active === "settings" ? <IoSettingsOutline size={50} color="FABB73" /> : <IoSettingsOutline size={50} />}
                </NavigationButton>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90vw;
  height: 80px;
  position: absolute;
  bottom: 10px;
`;
