import "../css/Widget.css";
import TableGrid from "./TableGrid";

const Widget = (props) => {

    const { data, columns } = props;

    return (
        <div className="widget" >
            <TableGrid data={data}
                columns={columns}
            />
        </div>
    );
}

export default Widget;