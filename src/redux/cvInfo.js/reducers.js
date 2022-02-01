export const cvInfoReducer = {
    setSingleInfo: (state, action) => ({
        ...state,
        [action.payload.groupName]: {
            ...state[action.payload.groupName],
            [action.payload.name]: [action.payload.value]
        }
    }),
    setGroupInfo: (state, action) => {
        if(action.payload.type === 'add') {
            console.log({
                ...state,
                [action.payload.groupName]: [
                    ...state[action.payload.groupName],
                    action.payload.obj
                ]
            })
            return{
                ...state,
                [action.payload.groupName]: [
                    ...state[action.payload.groupName],
                    action.payload.obj
                ]
            }
        } else if(action.payload.type === 'delete') {
            return {
                ...state,
                [action.payload.groupName]: state[action.payload.groupName].filter((item, i) => i !== action.payload.index )
            }
        } else if(action.payload.type === 'edit') {
            return {
                ...state,
                [action.payload.groupName]: state[action.payload.groupName].map((item, i) => {
                    if(i !== action.payload.index) {
                        return item
                    }
                    return action.payload.obj
                })
            }
        }
    },
    setAvatar: (state, action) => ({
        ...state,
        avatar: action.payload.value
    }),
    setCVInfo: (state, action) => ({
        ...action.payload
    })
}