let initialState = {
    count: 0,
    id: "",
    password: ""
}

// store는 무조건 return 값이 있어야함.
// 그래서 reducer에서 기본 리턴이 필요함.
function reducer(state=initialState, action) {
    console.log("action", action)
    // if(action.type === "INCREMENT") {
    //     // ...state : 나머지 객체는 그대로, count만 바꾼다.
    //     return {...state, count: state.count + action.payload.num};
    // }
    switch(action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1};
        case "LOGIN":
            return {...state, id:action.payload.id, password:action.payload.password};
        case "DECREMENT":
            return {...state, count: state.count - action.payload.num};
        default:
            return {...state};
    }

    // return {...state};
}

export default reducer;