import Header from "../header/Header";
import Skills from "../skills/Skills";
import ProfessionalExperience from "../professionalExperience/ProfessionalExperience";
import Porfolio from "../porfolio/Porfolio";
import Footer from "../footer/Footer";

function Page() {
    return (
      <div className="App">
        <Header />
        <Skills />
        <ProfessionalExperience />
        <Porfolio />
        <Footer />
      </div>
    );
  }
  
  export default Page;