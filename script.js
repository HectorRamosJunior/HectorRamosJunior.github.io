/* Hector Ramos */
/* September 10, 2019 */


class Todo {
    constructor(text, isChecked, key) {
        this.text = text;
        this.isChecked = isChecked;
        this.key = key
    }
}

class TodoForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todoList: []
        };

        this.addTodo = this.addTodo.bind(this);
        this.checkTodo = this.checkTodo.bind(this);
        this.removeTodos = this.removeTodos.bind(this);
    }

    addTodo(todoText) {
        this.setState({
            todoList: this.state.todoList.concat(
                new Todo(todoText, false, this.state.todoList.length)
            )
        });
    }

    checkTodo(key, isChecked) {
        this.setState({
            todoList: this.state.todoList.map(todo => {
                if (todo.key == key)
                    todo.isChecked = isChecked

                return todo
            })
        });
    }

    removeTodos(indexes) {
        this.setState({
            todoList: this.state.todoList.filter(x => !x.isChecked)
        });
    }

    render() {
        return (
            <div id="containerDiv">
                <TodoInput addTodo={this.addTodo} />
                <TodoList listItems={this.state.todoList} onCheck={this.checkTodo} />

                <div>
                    <input type="button" value="Remove Checked" onClick={this.removeTodos} />
                </div>
            </div>
        );
    }
}

class TodoInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todoText: ""
        };

        this.handleClick = this.handleClick.bind(this);
        this.updateText = this.updateText.bind(this);
    }

    updateText(e) {
        this.setState({
            todoText: e.target.value
        });
    }

    handleClick(e) {
        if (this.state.todoText) {
            this.props.addTodo(this.state.todoText);
            this.setState({
                todoText: ""
            });
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Insert ToDo here"
                    onChange={this.updateText}
                    value={this.state.todoText} />
                <button type="button" onClick={this.handleClick}>Enter</button>
            </div>
        );
    }
}

class TodoList extends React.Component {

    render() {
        return (
            <ol>
                {
                    this.props.listItems.map((todoItem, index) =>
                        <TodoListItem todo={todoItem} key={index} index={index}
                            onCheck={this.props.onCheck} />
                    )
                }
            </ol>
        );
    }
}

class TodoListItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(e) {
        this.props.onCheck(this.props.todo.key, e.target.checked);
    }

    render() {
        return (
            <li>
                <input type="checkbox" onClick={this.handleCheck}  checked={this.props.todo.isChecked} />
                {this.props.todo.text}
            </li>
        );
    }
}

ReactDOM.render(
    <TodoForm />,
    document.getElementById("main")
)
