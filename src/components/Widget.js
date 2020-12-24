import "../css/Widget.css";
import TableGrid from "./TableGrid";
import Form from "./Form";

const Widget = (props) => {

    const { title, data, columns, inputs, editIndex, startEditing, stopEditing, handleRemove } = props;

    return (
        <div className="widget" >
            <h1>{title}</h1>
            <Form inputs={inputs} />
            <TableGrid
                data={data}
                columns={columns}
                editIndex={editIndex}
                startEditing={startEditing}
                stopEditing={stopEditing}
                handleRemove={handleRemove}
            />
        </div>
    );
}

export default Widget;