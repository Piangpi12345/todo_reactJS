import React, {useState, Fragment, useEffect} from "react";
import classes from './TodoItem.module.css';

// const TodoItem = props => {

//     // return <div style={{background: "pink"}}> {props.title}</div>
//     // return <li style={style}> {props.title}</li>;
//     return (
//     <li className={classes.todoitem}>
//         {props.title}
//         <button onClick={e => props.deleteTodo(props.id)}
//         className={classes.crossX}>
//             x
//         </button></li>
//     );
// };

// export default TodoItem;

const TodoItem = ({title, id, deleteTodo, updateTodo}) => {
        const [editTitle, setEditTitle] = useState(title);
        const [show, setShow] = useState(false);
        let element = title;

        // useEffect(() => console.log("mounted and updated"));
        useEffect(() => {
            console.log("useeffect");
            return () => {
                console.log("finishing up");
            };
        }, [show]);


        const handleUpdate = () => {
            setShow(false);
            updateTodo({id, title:editTitle});
        };
        if (show) {
            element = (
                // <React.Fragment>
                //<Fragment>
                <>
                <input
                type="text"
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
                
                </>
                //</Fragment>
                // </React.Fragment> 
            );
        }

        // console.log(stateObj);
    return (
    <li className={classes.todoitem}>
        <span >{element}</span>
        <button /*onClick={props.deleteTodo.bind(this, props.title)} */
        onClick={e =>deleteTodo(id)}
        className={classes.crossX}>
            x
        </button>
        <button style={{ float: "right"}} onClick={e => setShow(!show)}>Edit</button>
        </li> 
    );
};

export default TodoItem;