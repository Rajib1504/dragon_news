import React from "react";
import SocialPage from "./RightComponents/SocialPage";
import FindUs from "./RightComponents/FindUs";
import QZone from "./RightComponents/QZone";

const RightNav = () => {
  return (
    <div className="flex flex-col gap-4">
      <SocialPage></SocialPage>
      <FindUs></FindUs>
      <QZone></QZone>
    </div>
  );
};

export default RightNav;
