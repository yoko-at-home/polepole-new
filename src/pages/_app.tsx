import "/src/style/index.css";

import { ClickToComponent } from "click-to-react-component";
import type { AppProps } from "next/app";
// import { GoogleAnalytics } from "src/component/GoogleAnalytics";
import { usePageView } from "src/lib/usePageView";

const App = (props: AppProps) => {
  usePageView();
  return (
    <>
      <ClickToComponent />
      {/* <GoogleAnalytics /> */}
      <props.Component {...props.pageProps} />
    </>
  );
};

export default App;
