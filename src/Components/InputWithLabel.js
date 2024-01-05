import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const InputWithLabel = ({ label, id, type, value, placeholder, onChange, onBlur, isRemoveWhiteSpace = false, isUpperCase = false, allowOnlyString = false, error, ...rest }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
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

    const handleShowHidePassword = () => {
        setIsShowPassword(prev => !prev);
    }



    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <div className="d-flex gap-2 align-items-center  justify-content-center">
                <input
                    type={type === "password" ? isShowPassword ? "text" : "password" : type}
                    id={id}
                    name={id}
                    onChange={handleOnChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder={placeholder}
                    className="form-control"
                    {...rest}
                />
                {type === "password" ? (
                    <div className={`border border-1 p-1 rounded-1 ${isShowPassword ? "border-danger-subtle" : "border-success-subtle"}`} style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon
                            color={isShowPassword ? "lightcoral" : "green"}
                            onClick={handleShowHidePassword}
                            icon={isShowPassword ? faEye : faEyeSlash}
                        />
                    </div>
                ) : null}
            </div>
            {error && (
                <div id="emailHelp" className="form-text text-danger">
                    {error}
                </div>
            )}
        </div>
    );
};

export default InputWithLabel;
