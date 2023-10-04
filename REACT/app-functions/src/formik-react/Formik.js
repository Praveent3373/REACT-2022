import { useFormik } from "formik";

const FormikForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log('form submitted', values);
        },
        validate: (values) => {
            let errors = {};
            if(!values.name){
                errors.name = "Name is mandadtory to enter"
            }
            if(!values.email){
                errors.email = "Email is mandadtory to enter"
            }
            if(!values.password){
                errors.password = " Password is mandadtory to enter"
            }
            return errors
        }
    });
    return (
        <div className="formik-react">
            <h1>Form using Formik library</h1>
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name: </label>
                    <input value={formik.values.name} onChange={formik.handleChange} type="text" name="name" />
                    {formik.errors.name? <h6>{formik.errors.name}</h6> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input value={formik.values.email} onChange={formik.handleChange} type="email" name="email" />
                    {formik.errors.email? <h6>{formik.errors.email}</h6> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password: </label>
                    <input value={formik.values.password} onChange={formik.handleChange} type="password" name="password" />
                    {formik.errors.password? <h6>{formik.errors.password}</h6> : null}
                </div>
                <div className="form-control">
                    <button type="submit">Submit form</button>
                </div>
            </form>
        </div>
    )
}
export default FormikForm;
