import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import TextField from '@material-ui/core/TextField';

const Row = (props) => {

    const { item, index, columns, editIndex, handleRemove, startEditing, handleEditing, stopEditing } = props;

    const currentlyEditing = editIndex === index;

    return (
        <TableRow key={`tr-${index}`} selectable="false">
            {columns.map((column, columnIndex) => (
                <TableCell key={`trc-${columnIndex}`}>
                    {currentlyEditing ? (
                        <TextField
                            name={column.field}
                            onChange={e => handleEditing(e, column.field, index)}
                            value={item[column.field]}
                        />
                    ) : (
                            item[column.field]
                        )}
                </TableCell>
            ))}
            <TableCell>
                {currentlyEditing ?
                    (
                        <IconButton aria-label="Done" onClick={() => stopEditing()}>
                            <DoneIcon />
                        </IconButton>
                    ) : (
                        <IconButton aria-label="Edit" onClick={() => startEditing(index)}>
                            <EditIcon />
                        </IconButton>
                    )
                }
            </TableCell>
            <TableCell>
                <IconButton aria-label="delete" onClick={() => handleRemove(index)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default Row;