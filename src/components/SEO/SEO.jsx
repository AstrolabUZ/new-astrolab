import React from "react";
import Head from "next/head";

const SEO = ({ articleTitle, title, description, image, keywords }) => {
  return (
    <Head>
      <title>{`ASTROLAB | ${title}`}</title>
      <meta
        name="description"
        content="Astrolab Group – это компания которая решает комплексные задачи по повышению эффективности процессов, а также предоставляет услуги в области создания систем управления, внедрения бизнес-приложений, управления данными и аналитики, системная интеграция, разработка программного обеспечения."
      />
      <meta property="og:locale" content="uz" />
      <meta name="author" content="Astrolab" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <meta
        name="keywords"
        content="создание, Создание сайтов, Создание сайтов Ташкент, Создание сайтов Uzbekistan, разработка сайтов, разработка, Оптимизация сайта, Веб-сайт, мобильное приложение, Кибербезопасность, Разработка игр, сайт, интернет сайт, сайт визитка, интернет магазин, корпоративный сайт,  разработка логотипа, разработка дизайна"
      />
      <meta
        name="google-site-verification"
        content="vTDvz1x5RQov90eazrRARIk6hCahTYkxwg7nMrir1Jk"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Astrolab" key="ogtitle" />
      <meta property="og:url" content="https://astrolab.uz/" />
      <meta
        property="og:description"
        content="Astrolab Group – это компания которая решает комплексные задачи по повышению эффективности процессов, а также предоставляет услуги в области создания систем управления, внедрения бизнес-приложений, управления данными и аналитики, системная интеграция, разработка программного обеспечения."
        key="ogdesc"
      />
      <meta property="og:site_name" content="Astrolab" key="ogsitename" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Astrolab"
        href="/rss"
      />
      <meta name="theme-color" content="#2e4683" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Astrolab" />
      <meta name="twitter:url" content="https://astrolab.uz/" />
      <meta
        name="twitter:description"
        content="Astrolab Group – это компания которая решает комплексные задачи по повышению эффективности процессов, а также предоставляет услуги в области создания систем управления, внедрения бизнес-приложений, управления данными и аналитики, системная интеграция, разработка программного обеспечения."
      />
      <meta name="twitter:site" content="Astrolab" />
      <meta name="twitter:creator" content="Astrolab" />
    </Head>
  );
};

export default SEO;
