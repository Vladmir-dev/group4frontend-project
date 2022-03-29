
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";


function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
       {/*<SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />*/}
        <SectionCarousel 
          title="Mariupol under near constant attack, Ukrainian official says..."
          description="Ukraine Take Shelter launched on March 3 and, within a week, more than 4,000 people had created listings offering shelter to Ukrainian refugees.  The website design is simple. Refugees enter the nearest city where they hope to flee..."
        />
        <SectionCarousel 
          title="Mariupol under near constant attack, Ukrainian official says..."
          description="Ukraine Take Shelter launched on March 3 and, within a week, more than 4,000 people had created listings offering shelter to Ukrainian refugees.  The website design is simple. Refugees enter the nearest city where they hope to flee..."
        />
        <SectionNucleoIcons />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
