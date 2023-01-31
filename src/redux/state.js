

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 14},
            {id: 2, message: 'Its my first post', likesCount: 28},
            {id: 3, message: 'test', likesCount: 32},
            {id: 4, message: 'blabla', likesCount: 1},
        ],
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
        ]
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
}

export default state;