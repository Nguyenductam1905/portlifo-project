import TodoData from "./todo.data"

export const TodoList = () => {
    // Create data 
    const todos = [
        {
            id: 1,
            title: "Learn React TypeScript",
            isComplete: false
        },
        {
            id: 2,
            title: "Subscribe Youtube HoiDanIT",
            isComplete: true
        },
        {
            id: 3,
            title: "Learn English",
            isComplete: true
        },
    ]

    return (
        <div>
            This is to do List
            <TodoData
                todos={todos}
                owner={"HorashiDev"}
                age={20}
                isDeveloper={true}
            />
        </div>
    )
}

// const TodoList: React.FunctionComponent<{ message: string }> = () => (
//     <div>TodoList</div>
//   );
// export default TodoList