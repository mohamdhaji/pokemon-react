import React, { Component } from "react";
import Header from "../Header-Footer/Header";
import Footer from "../Header-Footer/Footer";
import { withRouter } from "react-router";

const routes = ["/", "/pokemon", "/legendaries"];
class Layout extends Component {
  state = {
    footerColor: "#f5db13",
  };

  render() {
    const { pathname } = this.props.location;
    const check = routes.indexOf(pathname.toLowerCase()) !== -1;
    return (
      <>
        {check && <Header />}
        {this.props.children}
        {check && <Footer footerColor={this.state.footerColor} />}
      </>
    );
  }
  componentDidMount() {
    if (this.props.location.pathname === "/pokemon") {
      this.setState({ footerColor: "#F5F5F5" });
    } else if (this.props.location.pathname === "/legendaries") {
      this.setState({ footerColor: "#212121" });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname &&
      this.props.location.pathname === "/"
    ) {
      this.setState({ footerColor: "#f5db13" });
    } else if (
      this.props.location.pathname !== prevProps.location.pathname &&
      this.props.location.pathname === "/pokemon"
      ) {
        this.setState({ footerColor: "#F5F5F5" });
    } else if (
      this.props.location.pathname !== prevProps.location.pathname &&
      this.props.location.pathname === "/legendaries"
    ) {
      this.setState({ footerColor: "#212121" });
    }
  }
}

export default withRouter(Layout);
