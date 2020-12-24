import "../css/Widget.css";
import TableGrid from "./TableGrid";
import Form from "./Form";

const Widget = (props) => {

    const { title, data, columns, inputs } = props;

    return (
        <div className="widget" >
            <h1>{title}</h1>
            <Form inputs={inputs} />
            <TableGrid data={data}
                columns={columns}
            />
        </div>
    );
}

export default Widget;