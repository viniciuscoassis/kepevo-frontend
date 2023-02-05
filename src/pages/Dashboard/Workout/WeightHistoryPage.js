import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ComingSoon from "../../../components/ComingSoon";

export default function WeightHistoryPage() {
  const location = useLocation();

  useEffect(() => {
    console.log(Number(location.search.replace("?id=", "")));
  });
  return (
    <>
      <ComingSoon />
    </>
  );
}
