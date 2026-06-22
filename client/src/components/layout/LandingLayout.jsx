import { Outlet} from "react-router-dom";
import LandingNavbar from "./LandingNavbar";
import LandingFooter from "./LandingFooter";

function LandingLayout(){
  return (
    <>
      <LandingNavbar />

      <Outlet/>
      
    </>
  );
}
export default LandingLayout;