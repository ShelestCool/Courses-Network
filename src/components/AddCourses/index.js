import * as React from 'react';
import {Container} from "@mui/material";

import AddCoursesForm from "../AddCoursesForm";

import "./style.css";
import Button from "@mui/material/Button";

class AddCourses extends React.Component{
    render() {

        return(
            <Container>
                <div>
                    <AddCoursesForm addCourse={this.props.addCourse}/>
                    <div className={"download-courses"}>
                        <Button variant="contained" size="medium" onClick={this.props.loadSampleCourses}>
                            Загрузить Курсы
                        </Button>
                    </div>
                </div>
            </Container>
        );
    }
}


export default AddCourses;
