import React from "react";

import { Route, Switch } from "react-router-dom";

import LeftMenu from "../../components/LeftMenu";
import Students from "../../components/Students";
import Courses from "../../components/Courses";
import Subjects from "../../components/Subjects";
import Groups from "../../components/Groups";
import Professors from "../../components/Professors";
import LectureHall from "../../components/LectureHall";

import "./index.css";

const MainPage = () => {
    return (
        <div id="main">
            <LeftMenu  />
           
            <Switch >
                <Route exact path="/" component={Students} />
                <Route path="/Students" component={Students} />
                <Route path="/Professors" component={Professors} />
                <Route path="/Courses" component={Courses} />
                <Route path="/Groups" component={Groups} />
                <Route path="/Subjects" component={Subjects} />
                <Route path="/LectureHall" component={LectureHall} />
            </Switch>
        </div>
    );
};

export default MainPage;
