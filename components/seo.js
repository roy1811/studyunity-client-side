import Head from "next/head";

const SEO = ({ pageTitle, font, keywords }) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="robots" content="noindex, follow" />
      <meta name="keywords" content={keywords} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link href={font} rel="stylesheet" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
