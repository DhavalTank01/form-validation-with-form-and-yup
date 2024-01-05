import React from 'react';

const InputWithLabel = ({ label, id, type, value, placeholder, onChange, onBlur, isRemoveWhiteSpace = false, isUpperCase = false, allowOnlyString = false, error, ...rest }) => {
    const handleOnChange = (e) => {
        let inputValue = e.target.value;
        let { name, id } = e.target;

        if (allowOnlyString) {
            inputValue = inputValue.replace(/[^a-zA-Z\s]/g, "");
        }

        if (isUpperCase) {
            inputValue = inputValue.toUpperCase();
        }

        if (isRemoveWhiteSpace) {
            inputValue = inputValue.replace(/\s/g, "");
        }

        onChange({ ...e, target: { id, name, value: inputValue } });
    };

    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                onChange={handleOnChange}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder}
                className="form-control"
                {...rest}
            />
            {error && (
                <div id="emailHelp" className="form-text text-danger">
                    {error}
                </div>
            )}
        </div>
    );
};

export default InputWithLabel;
