import * as React from 'react';
import {Button} from "@mui/material";
import "./style.css"

class AddCoursesForm extends React.Component{

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createCourse = event =>{
        event.preventDefault();
        const course = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value || 0),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addCourse(course);
        event.currentTarget.reset();
    }


    render() {
        return (
            <>
                <form className={"course-edit"} onSubmit={this.createCourse}>
                    <input ref={this.nameRef} name ="name" type="text" placeholder="Name" autoComplete="off"/>
                    <input
                        ref={this.priceRef}
                        name ="price"
                        type="text"
                        placeholder="Name"
                        autoComplete="off"
                    />
                    <select ref={this.statusRef} name ="status" className="status">
                        <option value="available">Доступен</option>
                        <option value="unavailable">Недоступен</option>
                    </select>
                    <textarea ref={this.descRef} name ="desc" placeholder="Desc"/>
                    <input
                        ref={this.imageRef}
                        name ="image"
                        type="text"
                        placeholder="Image"
                        autoComplete="off"
                    />
                    <Button variant="contained" type="submit">Создать</Button>
                </form>
            </>
        );
    }
}

export default AddCoursesForm;
