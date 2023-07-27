export async function GoogleAnalyticsScript() {
  return (
    <>
      <script
        async
        data-ot-ignore
        dangerouslySetInnerHTML={{
          __html: `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://stm.suitsupply.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-${process.env.NEXT_PUBLIC_GTM}');
          `,
        }}
      ></script>
    </>
  );
}
