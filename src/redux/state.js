import {rerenderEntireTree} from "../render";


let state = {
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
}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);

}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export let addMessage = () => {
    let NewMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(NewMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export default state;