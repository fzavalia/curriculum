import { Component } from "react";
import getConfig from "next/config";

const getGaTrackId = () => getConfig().publicRuntimeConfig.gaTrackId;

const isGaTrackIdConfigured = () => Boolean(getGaTrackId());

export const GAHeadElement = () =>
  isGaTrackIdConfigured() && (
    <div>
      <script
        async
        src={"https://www.googletagmanager.com/gtag/js?id=" + getGaTrackId()}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${getGaTrackId()}', { 'send_page_view': false });
`
        }}
      />
    </div>
  );

export class PageView extends Component {
  componentDidMount = () =>
    isGaTrackIdConfigured() &&
    window.gtag("config", getGaTrackId(), { page_path: this.props.pathname });

  render = () => null;
}
