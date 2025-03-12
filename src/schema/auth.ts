import * as Yup from 'yup';

export const messageSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    fullname: Yup.string().required("Fullname is required"),
    message: Yup.string().required("Message is required"),
})