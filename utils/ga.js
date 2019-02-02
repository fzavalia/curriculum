import { Component } from "react";

export const GAHeadElement = () => (
  <div>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-133674055-1"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-133674055-1', { 'send_page_view': false });
`
      }}
    />
  </div>
);

export class PageView extends Component {
  componentDidMount = () => {
    window.gtag("config", "UA-133674055-1", { page_path: this.props.pathname });
  };

  render = () => <div />;
}
