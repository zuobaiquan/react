//根据action 返回不同的state
function loginReducer(state={ username:''},action){
    switch(action.type){
        case 'login':return {
            username: 'zuobaiquan'
        }
        case 'logout': return {
            username: ''
        }
        default:return state
    }
}
export default loginReducer