import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import classes from "../Common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", null, Input, {type: "checkbox"}, "Remember me")}

            {captchaUrl && <img src={captchaUrl} alt={"error"}/> }
            {captchaUrl && (createField("Symbols from image", "captcha", [required], Input, {}))}

            {error &&
                <div
                    className={classes.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Navigate to="/profile" replace={true}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    captchaUrl: state.authReducer.captchaUrl
})
export default connect(mapStateToProps, {login, logout})(Login)