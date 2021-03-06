import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import { LoginFormComponent } from './Components/LoginFormComponent';
import { RegisterFormComponent } from './Components/RegisterFormComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {Profile} from "./Components/Profile";
import {Files} from "./Components/Files";
import {Timetable} from "./Components/Timetable";
import {Registry} from "./Components/Registry";
import "../css/auth.css";

export class TeacherCabinet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpened: false
        }
    }

    open() {

    }
    render() {
        return (
            <div>
                <div className="headline2 ">
                    <div className="box1">

                        <div className={`container ${this.state.isMenuOpened ? "change" :''}`} onClick={() => { this.setState({ isMenuOpened: !this.state.isMenuOpened }) }}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>


                    {this.state.isMenuOpened ? (<div id="mySidenav" className="">
                        <div className="tabcontent tabcontent-text ">
                            <p><a href="#">ПРОФІЛЬ</a></p>
                            <p><a href="#">КАЛЕНДАР</a></p>
                            <p><a href="#">МАТЕРІАЛИ</a></p>
                            <p><a href="#">ЖУРНАЛ</a></p>
                        </div>
                    </div>) : ''}
                    <div className="menu">
                        <Link to="/teacher">
                        <div className="menu1 iconProfile"></div>
                        </Link>
                        <Link to="/teacher/timetable">
                        <div className="menu1 iconTimeTable"></div>
                        </Link>
                        <Link to="/teacher/files">
                        <div className="menu1 iconFile"></div>
                        </Link>
                        <Link to="/teacher/registry" >
                        <div className="menu1 iconRegistry"></div>
                        </Link>
                    </div>
                    <div className="exit1 menu2"></div>
                </div>
                <Switch>
                    <Route exact path="/teacher">
                        <Profile/>
                    </Route>
                    <Route path="/teacher/files">
                        <Files/>
                    </Route>
                    <Route path="/teacher/timetable">
                        <Timetable/>
                    </Route>
                    <Route path="/teacher/Registry">
                        <Registry/>
                    </Route>
                </Switch>

        </div>
        );
    }
}
