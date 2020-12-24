import "../css/TableGrid.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';

import Row from "./Row";


const TableGrid = (props) => {

    const { data, columns, editIndex, handleRemove, startEditing, handleEditing, stopEditing } = props;

    return (
        <div className="table">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column, columnIndex) => (
                                <TableCell key={`thc-${columnIndex}`}>{column.headerName}</TableCell>
                            ))}
                            <TableCell />
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, index) =>
                            <Row
                                key={item.id}
                                item={item}
                                index={index}
                                columns={columns}
                                editIndex={editIndex}
                                handleRemove={handleRemove}
                                startEditing={startEditing}
                                handleEditing={handleEditing}
                                stopEditing={stopEditing}
                            />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default TableGrid;