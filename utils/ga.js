import { Component } from "react";
import getConfig from "next/config";

const trackID = () => getConfig().publicRuntimeConfig.gaTrackId;

export const GAHeadElement = () => (
  <div>
    <script
      async
      src={"https://www.googletagmanager.com/gtag/js?id=" + trackID()}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${trackID()}', { 'send_page_view': false });
`
      }}
    />
  </div>
);

export class PageView extends Component {
  componentDidMount = () =>
    window.gtag("config", trackID(), { page_path: this.props.pathname });
  render = () => <div />;
}
