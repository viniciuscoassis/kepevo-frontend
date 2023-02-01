import { useNavigate } from "react-router-dom";
import DefaultButton from "./DefaultButton";

export default function DefaultRouteButton({ children, textColor, route }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(route)}>
      <DefaultButton textColor={textColor}>{children}</DefaultButton>
    </div>
  );
}
