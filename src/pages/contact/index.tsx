/* eslint-disable @typescript-eslint/naming-convention */
import type { NextPage } from "next";
import Image from "next/image";
import { FormContact } from "src/component/Form";
import { PageSubTitle, PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

const Contact: NextPage = () => {
  return (
    <FluidLayout>
      <PageSEO
        title={`Contact- ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl + `/contact`}
      />
      <PageTitle>お問い合わせ</PageTitle>
      <PageSubTitle fontWeight="ordinary">お電話によるお問合せ</PageSubTitle>
      <div className="flex flex-row items-center">
        <Image
          className="m-3 mx-auto w-40 h-40 rounded-full"
          src="/static/images/team/kato.webp"
          alt="Junko Kato"
          height="90"
          width="90"
        />

        <div className="mx-5 font-bold  text-zinc-700">
          加藤（代表）：
          <a className="text-green-700 hover:text-primary" href="tel:+0467765286">
            0467-76-5286
          </a>
        </div>
      </div>

      <PageSubTitle fontWeight="ordinary">メールによるお問合せ</PageSubTitle>
      <FormContact />
    </FluidLayout>
  );
};

export default Contact;
