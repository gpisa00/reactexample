import "../css/Widget.css";
import TableGrid from "./TableGrid";
import Form from "./Form";

const Widget = (props) => {

    const { title, data, columns, inputs, handleInputsEditing, editIndex, startEditing, stopEditing, handleRemove, handleEditing, save } = props;

    return (
        <div className="widget" >
            <h1>{title}</h1>
            <Form inputs={inputs} handleInputsEditing={handleInputsEditing} save={save} />
            <TableGrid
                data={data}
                columns={columns}
                editIndex={editIndex}
                startEditing={startEditing}
                stopEditing={stopEditing}
                handleRemove={handleRemove}
                handleEditing={handleEditing}
            />
        </div>
    );
}

export default Widget;