import ToDoItem from "./ToDoItem"


const ToDoItemList = ({items}) => {

    return(
        <>
        {
            items.map((singleItem, index) => {
                return <ToDoItem title={singleItem.title} isCompleted=
                {singleItem.isCompleted} key={index} />
            })
        }
        </>
    )
}

export default ToDoItemList