import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

// need refactor code this state/store!!!!!!!

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 14},
                {id: 2, message: 'Its my first post', likesCount: 28},
                {id: 3, message: 'test', likesCount: 32},
                {id: 4, message: 'blabla', likesCount: 1},
            ],
            newPostText: 'test post'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Daur'},
                {id: 2, name: 'Dimych'},
                {id: 3, name: 'Diana'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Misha'},
                {id: 6, name: 'Pasha'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your course?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageText: 'test message'
        },

        sidebar: {
            friends: [
                {id: 1, name: 'Daur', src: 'https://clck.ru/33QTBx'},
                {id: 2, name: 'Dima', src: 'https://clck.ru/33QTBx'},
                {id: 3, name: 'Diana', src: 'https://clck.ru/33QTBx'},
                {id: 4, name: 'Sasha', src: 'https://clck.ru/33QTBx'},
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;   // observer patern // publisher-subscriber // addEventListener
    },

    /*    addPost() {

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        },
        updateNewPostText(newText) {
            this._state.profilePage.newPostText = newText;
            this._callSubscriber(this._state);
        },
        addMessage() {
            let NewMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(NewMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        },
        updateNewMessageText(newText) {
            this._state.dialogsPage.newMessageText = newText;
            this._callSubscriber(this._state);
        },*/

    dispatch(action) {// { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;