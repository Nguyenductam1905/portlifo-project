// Tạo một interface cho todos để lát nữa kế cho props
interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[],
    owner?: string,
    age?: number,
    isDeveloper?: boolean,
}

const TodoData = (props: IProps) => {
    // #Lấy giá trị từ phần tử cha qua props ./todo.list.tsx
    const {todos, owner} = props;

    return (
        <div>
            <div className="item">This page is owned by {owner}</div>
            {/*Triển khai render ra màn hình*/}
            {todos.map((item) => {
                return (
                    <>
                        <div key={item.id}>
                            <div>{item.title}</div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}
export default TodoData