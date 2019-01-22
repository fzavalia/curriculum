import { Component } from "react";
import Router from "next/router";

export default class extends Component {

  componentDidMount = () => {
    Router.push("/curriculum/about");
  };
  
  render = () => null;
}
