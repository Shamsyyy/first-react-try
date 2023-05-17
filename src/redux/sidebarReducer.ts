import {FriendsType} from "../types/types";

let initialState = {
    friends: [
        {id: 1, name: 'Daur', src: 'https://clck.ru/33QTBx'},
        {id: 2, name: 'Dima', src: 'https://clck.ru/33QTBx'},
        {id: 3, name: 'Diana', src: 'https://clck.ru/33QTBx'},
        {id: 4, name: 'Sasha', src: 'https://clck.ru/33QTBx'},
    ] as Array<FriendsType>
}



type InitialStateType = typeof initialState



const sidebarReducer = (state = initialState, action: any): InitialStateType => {
    return (
        state
    );
}

export default sidebarReducer;