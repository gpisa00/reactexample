import "../css/Form.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

const Form = (props) => {

    const { inputs } = props;

    return (
        <div className="input-group">
            <form noValidate autoComplete="off">
                    {inputs.map((input, inputIndex) => (
                        <TextField
                            key={inputIndex}
                            name={input.name}
                            label={input.label}
                            variant="outlined"
                            className="input-text"
                        />
                    ))}
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
            </form>
        </div>
    );
}

export default Form;