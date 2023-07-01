import React from "react";
import {actions} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/reduxStore";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,

    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage: actions.addMessageCreator}),
    withAuthRedirect
)(Dialogs);