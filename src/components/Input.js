// import { useField } from 'formik';
import React from 'react';
import "../constants/colors.css";

function TextInput({ ...props }) {

    
    const [field, meta] = useField(props);
    console.log("Props: " + { ...getFieldProps(name) });
    return (
        <div className="mb-4">
            <input {...field} {...props} className="form-control form-border"
                {...getFieldProps({ name })} />
            {meta.touched && meta.error ? (
                <div className="text-danger">{meta.error}</div>
            ) : null}
        </div>
    );
}

export default TextInput;