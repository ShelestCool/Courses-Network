import React from "react";
import courses from '../courses-img/courses';
import AddCourses from "../AddCourses";
import Course from "../Course/Course";

import "./style.css";
import {Container} from "@mui/material";



class MainApp extends React.Component{
    state = {
        courses:{},
    };

    addCourse = course => {
        //1.Делаем копию объекта state
        const courses = {...this.state.courses};
        //2.Добавить новый курс в переменную courses-img
        courses[`course${Date.now()}`] = course;
        //3.Записать наш новый объект courses-img в state
        this.setState({courses});
    };

    loadSampleCourses = () => {
        this.setState({courses });
        console.log(this.state)
    }

    render() {

        return(
            <Container>
                <AddCourses
                    addCourse={this.addCourse}
                    loadSampleCourses={this.loadSampleCourses}
                />

                <div className="course">
                    {Object.keys(this.state.courses).map(key => {
                        return <Course
                            key={key}
                            index={key}
                            details={this.state.courses[key]}
                        />
                    })}
                </div>
            </Container>
        );
    }
}

export default MainApp;
