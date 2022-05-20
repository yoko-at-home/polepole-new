import type { FC } from "react";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { TOS } from "src/component/TOS";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

const Private: FC = () => {
  return (
    <FluidLayout width="main">
      <PageSEO
        title={`ポレポーレ会則 - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl + `/tos`}
      />
      <div className="divide-y divide-gray-200 sm:mx-20">
        <PageTitle>ポレポーレ会則</PageTitle>
        <TOS />
      </div>
    </FluidLayout>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "news",
  });

  return {
    props: {
      data,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default Private;
