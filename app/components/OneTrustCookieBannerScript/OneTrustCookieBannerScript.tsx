const ID = process.env.NEXT_ONETRUEST_ID;

export async function OneTrustCookieBannerScript() {
  return (
    <>
      <script
        async
        src={`https://cdn.cookielaw.org/consent/${ID}/OtAutoBlock.js`}
        type="text/javascript"
      ></script>
      <script
        async
        src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
        type="text/javascript"
        data-document-language="true"
        charSet="UTF-8"
        data-domain-script={`${ID}`}
      ></script>
      <script async type="text/javascript">
        {"function OptanonWrapper() { }"}
      </script>
    </>
  );
}
