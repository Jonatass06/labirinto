import { Html, Head, Main, NextScript } from "next/document";
import { useDebugValue, useEffect } from "react";

export default function Document() {
  return (
    <Html
      lang="en"
      onKeyDown={() => {
        console.log("oi");
      }}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
