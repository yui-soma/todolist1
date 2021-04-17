import { Fragment, useState } from 'react';
import Title from './Title';
import Form from './Form';
import List from './List';
import { nanoid } from 'nanoid';

const App = () => {
    const [name, setName] = useState("yui");

    const [todos, setTodos] = useState([
        {
            content: "掃除する", 
            id:nanoid(),
        },
        {
            content: "洗濯する", 
            id:nanoid()
        },
        {
            content:"料理する", 
            id:nanoid()
        },
    ]);

    const addTodo = (text) => {
        setTodos(...todos, {content:text, id:nanoid()});
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {todo.id !== id}))
    }
    return  (
        <Fragment>
            <Title username={name} />
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} />
            <button
            onClick= {() => {
                setName('yui');
            }}
            >
            </button>
        </Fragment>
    );
};

export default App;
