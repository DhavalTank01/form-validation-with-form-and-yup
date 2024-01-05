import { useFormik } from 'formik';
import React, { useId } from 'react'
import * as Yup from 'yup';
import InputWithLabel from './Components/InputWithLabel';
import CustomButton from './Components/CustomButton';

const UseIdExample = () => {
    const id = useId();
    const formik = useFormik({
        initialValues: {
            full_name: '',
            username: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        validationSchema: Yup.object({
            full_name: Yup.string().required('Full name is required'),
            username: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
            confirm_password: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .min(8, 'Confirm password must be at least 8 characters')
                .required('Confirm password is required'),
        }),
        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
        },
    });

    return (
        <div className="container mt-5">
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className="border border-1 p-3 rounded-2 w-50">
                    <form onSubmit={formik.handleSubmit}>
                        <InputWithLabel
                            label="Full Name"
                            id={`${id}-full_name`}
                            name="full_name"
                            type="full_name"
                            placeholder="Please enter full name"
                            {...formik.getFieldProps("full_name")}
                            error={formik.touched.full_name && formik.errors.full_name}
                            allowOnlyString={true}
                        />
                        <InputWithLabel
                            label="Username"
                            id={`${id}-username`}
                            name="username"
                            type="username"
                            placeholder="Please enter username"
                            {...formik.getFieldProps("username")}
                            error={formik.touched.username && formik.errors.username}
                            isUpperCase={true}
                            isRemoveWhiteSpace={true}
                        />
                        <InputWithLabel
                            label="Email"
                            id={`${id}-email`}
                            name="email"
                            type="email"
                            placeholder="Please enter email"
                            {...formik.getFieldProps("email")}
                            error={formik.touched.email && formik.errors.email}
                        />
                        <InputWithLabel
                            label="Password"
                            id={`${id}-password`}
                            name="password"
                            type="password"
                            placeholder="Please enter password"
                            {...formik.getFieldProps("password")}
                            error={formik.touched.password && formik.errors.password}
                        />
                        <InputWithLabel
                            label="Confirm Password"
                            id={`${id}-confirm_password`}
                            name="confirm_password"
                            type="password"
                            placeholder="Please enter confirm password"
                            {...formik.getFieldProps("confirm_password")}
                            error={formik.touched.confirm_password && formik.errors.confirm_password}
                        />
                        <CustomButton
                            text='Save'
                            type='submit'
                            disabled={Boolean(Object.keys(formik.errors)?.length)}
                            isFullWidth={true}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UseIdExample;