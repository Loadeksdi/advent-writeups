import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/monokai.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        >
        </link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        >
        </link>
        <link
          href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@200&family=Inconsolata&display=swap"
          rel="stylesheet"
        >
        </link>
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js">
        </script>
        <script>hljs.highlightAll();</script>
        <title>Loadeksdi's Advent of Code</title>
      </Head>
      <body class="bg-darkbg h-full">
        <Component />
      </body>
    </>
  );
}
