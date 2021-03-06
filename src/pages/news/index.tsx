import axios from "axios";
import type { GetStaticProps } from "next";
import Link from "next/link";
import type { FC } from "react";
import { Pagination } from "src/component/Pagenation";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

type Props = {
  data: {
    body: HTMLAnchorElement;
    createdAt: Date;
    description: string;
    id: string;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    updatedAt: Date;
    content: HTMLAnchorElement;
  }[];
  totalCount: number;
};

const News: FC<Props> = (props) => {
  return (
    <FluidLayout>
      <PageSEO
        title={`News - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl + `/news`}
      />

      <div>
        <iframe
          title="続 ポレポーレ物語"
          width="100%"
          height="615px"
          src="https://www.youtube.com/embed/GAhSsJVeUvc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <PageTitle>
        <span className="tracking-wider ">最新情報</span>
      </PageTitle>
      {/* <h1 className="mb-3 font-semibold sm:font-bold">ポレポーレ 2021 ファーストコンサートのご報告</h1> */}
      <ul>
        {props.data.map((item) => {
          return (
            <li key={item.id}>
              <div className="flex flex-col p-8 mb-10  bg-gradient-to-r from-lime-500/50 via-slate-500/20 to-purple-500/30 rounded shadow-lg">
                <div className="mb-3 text-xl font-semibold sm:font-bold">{item.title}</div>
                <div className="flex flex-row-reverse justify-between items-center">
                  <Link href={`/news/${item.id}`} passHref>
                    <a aria-label="Read more">
                      {item.content === undefined ? null : (
                        <span className="p-2 ml-5 font-bold text-slate-900 whitespace-nowrap bg-primary shadow-lg shadow-slate-100 animate-pulse sm:py-3 sm:px-5">
                          詳細はこちら
                        </span>
                      )}
                    </a>
                  </Link>
                  <div className="text-sm sm:text-base">{item.description}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {props.totalCount < 6 ? null : <Pagination totalCount={props.totalCount} />}
    </FluidLayout>
  );
};
export default News;

export const getStaticProps: GetStaticProps<Props, never, { id: string; draftKey: string }> = async ({
  preview,
  previewData,
}): Promise<{
  props: Props;
}> => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY || "" },
  };

  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "news/?limit=5", key);
  const data = await res.data;

  // プレビュー時は draft のコンテンツを追加
  if (preview) {
    const draftUrl = process.env.NEXT_PUBLIC_API_URL + "news/" + previewData?.id + `?draftKey=${previewData?.draftKey}`;
    const draftRes = await axios.get(draftUrl, key);
    data.unshift(await draftRes.data);
  }

  return {
    props: {
      data: data.contents,
      totalCount: data.totalCount,
    },
  };
};
