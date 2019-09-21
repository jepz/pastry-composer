import react from "react";
import propTypes from "prop-types";

const InputField = (props) => {
    const { type } = props;
    return <input type={type} value={value} />
}

InputField.defaultProps = {
    type: "text",
    value: ""
}
Input.propTypes = {
    /** Set what type of input that should be used. */
    type: propTypes.string,
    /** What value the fields has.  */
    value: propTypes.string
}

export default InputField;