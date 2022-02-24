import { useState } from "react";
import HomePageMap from "../../features/Maps/HomePageMap";
import { MobileButtonsBar } from "../../features/Mobile/MobileButtonBar";
import DionysusRules from "./DionysusRules";

export function MobileHomePage() {
  const [display, setDisplay] = useState(0);
  const componentdisplay = [<DionysusRules />, <HomePageMap />];
  return (
    <div>
      {componentdisplay.map((element, index) => {
        return (
          <div>
            {console.log(index)}
            {display === index && <div key={index}>{element}</div>}
          </div>
        );
      })}
      <MobileButtonsBar setDisplay={setDisplay} />
    </div>
  );
}
