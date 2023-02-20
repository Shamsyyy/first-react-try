import React from "react";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

/*const DialogsContainer = (props) => {
    debugger
    // let state = props.store.getState().dialogsReducer
    // let sendMessage = () => {
    //     props.store.dispatch(addMessageCreator());
    // }
    //
    // let onMessageChange = (text) => {
    //     props.store.dispatch(updateNewMessageTextCreator(text));
    // }

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogsReducer

                let sendMessage = () => {
                    store.dispatch(addMessageCreator());
                }

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextCreator(text));
                }

                return <Dialogs onMessageChange={onMessageChange}
                                sendMessage={sendMessage}
                                dialogsPage={state}
                                dialogs={state.dialogs}
                                messsages={state.messages}
                                newMessageText={state.newMessageText}/>
            }
            }
        </StoreContext.Consumer>
    )
}*/

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,
        newMessageText: state.dialogsReducer.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageCreator());
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextCreator(text));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);