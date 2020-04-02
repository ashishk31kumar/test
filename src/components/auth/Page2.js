import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onCloseChange1 = (e) => {
    var arr = []
    this.props.data.Portugal.forEach((item, id) => {
      if (e.item.id == item.id) {
        let obj = {}
        obj.name = item.name
        obj.id = item.id
        if (item.isChecked === true) {
          obj.isChecked = false
        } else {
          obj.isChecked = true
        }
        arr.push(obj)
      } else {
        arr.push(item)
      }
    })
    this.props.handleStateChange(arr, "Portugal")
  }
  onCloseChange2 = (e) => {
    var arr = []
    this.props.data.Nicaragua.forEach((item, id) => {
      if (e.item.id == item.id) {
        let obj = {}
        obj.name = item.name
        obj.id = item.id
        if (item.isChecked === true) {
          obj.isChecked = false
        } else {
          obj.isChecked = true
        }
        arr.push(obj)
      } else {
        arr.push(item)
      }

    })
    this.props.handleStateChange(arr, "Nicaragua")
  }
  onCloseChange3 = (e) => {
    var arr = []
    // const initialArr = this.state.Portugal
    this.props.data.MarshallIslands.forEach((item, id) => {
      if (e.item.id == item.id) {
        let obj = {}
        obj.name = item.name
        obj.id = item.id
        if (item.isChecked === true) {
          obj.isChecked = false
        } else {
          obj.isChecked = true
        }
        arr.push(obj)
      } else {
        arr.push(item)
      }

    })
    this.props.handleStateChange(arr, "MarshallIslands")
  }
  render() {
    return (
      <div className="row m-b-n">
        <div className="col s12 m12 p-n">
          {this.props.data.change == true ?
          <div>
          <h5>Portugal</h5>
          {this.props.data.Portugal.length > 0 ? (this.props.data.Portugal.map((item, index) => (
            <tr>
              {item.isChecked == true ?
                <td>
                  <div className="input-field col s10">
                    <input
                      onChange={this.onChange}
                      value={item.name}
                      id={item.id}
                      type="text"
                    />
                  </div>
                  <div className="input-field col s2">
                    <button type="button" class="close" aria-label="Close" onClick={() => this.onCloseChange1({ item, index })}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </td>
                : null}
            </tr>
          ))) : null}
          <h5>Nicaragua</h5>
          {this.props.data.Nicaragua.length > 0 ? (this.props.data.Nicaragua.map((item, index) => (
            <tr>
              {item.isChecked == true ?
                <td>
                  <div className="input-field col s10">
                    <input
                      onChange={this.onChange}
                      value={item.name}
                      id={item.id}
                      type="text"
                    />
                  </div>
                  <div className="input-field col s2">
                    <button type="button" class="close" aria-label="Close" onClick={() => this.onCloseChange2({ item, index })}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </td>
                : null}
            </tr>
          ))) : null}
          <h5>Marshall Islands</h5>
          {this.props.data.MarshallIslands.length > 0 ? (this.props.data.MarshallIslands.map((item, index) => (
            <tr>
              {item.isChecked == true ?
                <td>
                  <div className="input-field col s10">
                    <input
                      onChange={this.onChange}
                      value={item.name}
                      id={item.id}
                      type="text"
                    />
                  </div>
                  <div className="input-field col s2">
                    <button type="button" class="close" aria-label="Close" onClick={() => this.onCloseChange3({ item, index })}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </td>
                : null}
            </tr>
          ))) : null}
          </div>
          :
          <div>
            <p>No Value Selected</p>
            </div>
          }
        </div>
      </div>
    );
  }
}
Page2.propTypes = {};

export default connect(

)(withRouter(Page2));