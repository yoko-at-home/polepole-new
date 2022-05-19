import ConfettiSection from "src/component/Confetti";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { Team } from "src/component/Team";
import { FluidLayout } from "src/layout";

import { siteMetadata } from "../../data/siteMetaData";


const AboutUs = () => {
  return (
    <>
      <div className="relative">
        <div className="sticky bottom-0">
          <ConfettiSection />
        </div>
      </div>
      <div
        className="absolute top-0 w-full min-h-screen bg-top bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521287329847-ec334c5517fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsb3Nzb218ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')",
          opacity: ".9",
        }}
      >
        <FluidLayout width="main">
          <PageSEO
            title={`About Us - ${siteMetadata.title}`}
            description={siteMetadata.description}
            ogType="website"
            ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
            siteUrl={siteMetadata.siteUrl + `/aboutus`}
          />

          <div className="mx-auto text-white">
            <PageTitle>
              <span className="font-yui text-3xl tracking-widest sm:text-5xl">
                慈しみ深き
                <br />
                ポレポーレのメンバー
              </span>
            </PageTitle>
            <div className="container flex flex-col mx-auto mt-3 text-gray-300">
              <Team />
            </div>
          </div>
        </FluidLayout>
      </div>
    </>
  );
};

export default AboutUs
