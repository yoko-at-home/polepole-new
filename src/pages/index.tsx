import type { FC } from "react";
import { Activity } from "src/component/Activity";
import { History } from "src/component/History";
import { TimelineItem } from "src/component/History/TimeLineItem";
import { ProductMainTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { Songs } from "src/component/Songs";
import { TOS } from "src/component/TOS";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";
import type { BasicObjectProps } from "src/types/pageType";

const Home: FC<BasicObjectProps> = (props) => {
  return (
    <>
      <div
        className="absolute top-0 w-full min-h-screen bg-bottom bg-repeat"
        style={{
          backgroundImage: "url('/static/images/about/bg.jpeg')",
        }}
      >
        <div className="z-40 text-zinc-700 bg-white/90">
          <FluidLayout width="main">
            <PageSEO
              title={`${siteMetadata.title}`}
              description={siteMetadata.description}
              ogType="website"
              ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
              siteUrl={siteMetadata.siteUrl}
            />
            <ProductMainTitle>{props.data.title}</ProductMainTitle>
            <div
              className="mb-12 leading-loose sm:mb-20 animation"
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line @typescript-eslint/naming-convention
                __html: `${props.data.body}`,
              }}
            />
            <Activity />
            <Songs header={""} subheader={""} content={""} />
            <TimelineItem />
            <History />
            <TOS />
          </FluidLayout>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "about",
  });

  return {
    props: {
      data,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default Home;
