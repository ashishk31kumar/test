import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import Page2 from "./Page2";
class Page1 extends Component {
    constructor() {
        super();
        this.state = {
            Portugal: [
                { id: 0, isChecked: false, name: "Aasiya Jayavant" },
                { id: 1, isChecked: false, name: "Luvleen Lawrence" },
                { id: 2, isChecked: false, name: "Rey Mibourne" },
                { id: 3, isChecked: false, name: "CaylaBrister" }

            ],
            Nicaragua: [
                { id: 0, isChecked: false, name: "Deveedaas Nandi" },
                { id: 1, isChecked: false, name: "Obasey Chidy" },
                { id: 2, isChecked: false, name: "Xenie Dolezelova" },
                { id: 3, isChecked: false, name: "Ezequiel Dengra" }

            ],
            MarshallIslands: [
                { id: 0, isChecked: false, name: "Aaron Almaraz" },
                { id: 1, isChecked: false, name: "Jelena Denisova" }

            ],
            change: false
        };
    }

    handleCheckboxChange1 = (e) => {
        var arr = []
        const initialArr = this.state.Portugal
        initialArr.forEach((item, id) => {
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
        this.setState({ Portugal: arr, change: true })
    }
    handleCheckboxChange2 = (e) => {
        var arr = []
        const initialArr = this.state.Nicaragua
        initialArr.forEach((item, id) => {
            if (e.index == item.id) {
                let obj = {}
                obj.name = item.name
                obj.id = item.id
                if (item.isChecked == true) {
                    obj.isChecked = false
                } else {
                    obj.isChecked = true
                }
                arr.push(obj)
            } else {
                arr.push(item)
            }

        })
        this.setState({ Nicaragua: arr, change: true })
    }
    handleCheckboxChange3 = (e) => {
        var arr = []
        const initialArr = this.state.MarshallIslands
        initialArr.forEach((item, id) => {
            if (e.index == item.id) {
                let obj = {}
                obj.name = item.name
                obj.id = item.id
                if (item.isChecked == true) {
                    obj.isChecked = false
                } else {
                    obj.isChecked = true
                }
                arr.push(obj)
            } else {
                arr.push(item)
            }
        })
        this.setState({ MarshallIslands: arr, change: true })
    }

    closeHandler = (stateValue, name) => {
        if (name == "Portugal") {
            this.setState({ Portugal: stateValue });
        }
        if (name == "Nicaragua") {
            this.setState({ Nicaragua: stateValue });
        }
        if (name == "MarshallIslands")
            this.setState({ MarshallIslands: stateValue });
    };
    render() {
       
        return (
            <div className="row m-b-n">
                <div className="col s6 m6 p-n">
                    <div className="col s12 m5 p-n">
                                <div className="row">
                                    <div className="logn-form col s12 m12">
                                        
                                            <div className="input-field col s12 m-t-5">
                                                <h5>Portugal</h5>
                                                {this.state.Portugal.length > 0 ? (this.state.Portugal.map((item, index) => (
                                                    <tr>
                                                        <td>
                                                            <label className="m-l-md">
                                                                <input type="checkbox" id={item.id} onClick={() => this.handleCheckboxChange1({ item, index })} checked={item.isChecked} />
                                                                <span></span>
                                                                <label htmlFor="Name">{item.name}</label>

                                                            </label>
                                                        </td>
                                                    </tr>
                                                ))) : null}
                                                <h5>Nicaragua</h5>
                                                {this.state.Nicaragua.length > 0 ? (this.state.Nicaragua.map((item, index) => (
                                                    <tr>
                                                        <label className="m-l-md">
                                                            <td>
                                                                <div className="m-l-md">
                                                                    <input type="checkbox" id={item.id} onClick={() => this.handleCheckboxChange2({ item, index })} checked={item.isChecked} />
                                                                    <span></span>
                                                                    <label htmlFor="password">{item.name}</label>
                                                                </div>

                                                            </td>
                                                        </label>
                                                    </tr>
                                                ))) : null}
                                                <h5>Marshall Islands</h5>
                                                {this.state.MarshallIslands.length > 0 ? (this.state.MarshallIslands.map((item, index) => (
                                                    <tr>
                                                        <label className="m-l-md">
                                                            <td>
                                                                <div className="m-l-md">
                                                                    <input type="checkbox" id={item.id} onClick={() => this.handleCheckboxChange3({ item, index })} checked={item.isChecked} />
                                                                    <span></span>
                                                                    <label htmlFor="password">{item.name}</label>
                                                                </div>

                                                            </td>
                                                        </label>
                                                    </tr>
                                                ))) : null}
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="clearfix" />
                        
                </div>

                <div className="col s6 m6 p-n">
                    {this.state.change == true ?
                        <div>
                            <Page2 data={this.state} handleStateChange={this.closeHandler} />

                        </div>
                        : 
                        <div>
                        <Page2 data={this.state}/>
                       </div>
                        }
                </div>

            </div>
        );
    }
}

Page1.propTypes = {};



export default connect(
  
)(withRouter(Page1));
