import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { toast } from "react-toastify";


import Page1 from "./Page1";
class StartPage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { errors } = this.state;
    const spinner = this.state.spinerToggle ? "show-spinner" : "hide-spinner";

    return (
      <div className="row m-b-n">

        <div className="col s12 m6 p-n">
          <Page1/>
      
        </div>


        </div>
    );
  }
}

StartPage.propTypes = {};


export default connect(
)(withRouter(StartPage));
