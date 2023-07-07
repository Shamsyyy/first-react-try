import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect, useDispatch, useSelector} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import classes from "../Common/FormsControls/FormsControls.module.css";
import {AppDispatch, AppStateType} from "../../redux/reduxStore";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}

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

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

/*type MapStatePropsType = {
    //captchaUrl: string | null,
    //isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email :string, password :string, rememberMe :boolean, captcha :string) => void
}
*/

export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

type LoginFormValuesTypeKeys = keyof LoginFormValuesType
/*type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>*/  // при ошибке типизации string | number | symbol


export const Login: React.FC = (props) => {
    const captchaUrl = useSelector((state: AppStateType) => state.authReducer.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.authReducer.isAuth)
    const dispatch: AppDispatch = useDispatch();

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
    }

    if (isAuth) {
        return <Navigate to="/profile" replace={true}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}
/*const mapStateToProps = (state: AppStateType) : MapStatePropsType => ({
    //isAuth: state.authReducer.isAuth,
    //state.authReducer.captchaUrl
})
export default connect({login, logout})(Login)*/