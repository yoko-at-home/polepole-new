/* eslint-disable @typescript-eslint/naming-convention */
import type { NextPage } from "next";
import { FormContact } from "src/component/Form";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

const Contact: NextPage = () => {
  return (
    <FluidLayout width="main">
      <PageSEO
        title={`Contact- ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl + `/contact`}
      />
      <PageTitle>お問い合わせ</PageTitle>
      <div className="font-bold text-zinc-700">
        お電話によるお問合せ（代表：加藤）：
        <a className="text-blue-500 hover:text-primary" href="tel:+0467765286">
          0467-76-5286
        </a>
      </div>

      <div className="my-6 text-zinc-700">メールによるお問合せは以下のフォームをご利用ください✨</div>
      <FormContact />
    </FluidLayout>
  );
};

export default Contact;
