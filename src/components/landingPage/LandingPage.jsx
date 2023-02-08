import Menu from "../menu/Menu";
import Page from "../page/Page";

function LandingPage() {
    return (
    <div>
        <div className="landingPage_container">
            <div className="pandingPage_menu">
                <Menu />
            </div>
            <div className="pandingPage_page">
                <Page />
            </div>
        </div>
    </div>
    );
  }
  
  export default LandingPage;