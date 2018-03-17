// Holds Reducers related to Todos. Ex: ADD_TODO, DELETE_TODO, EDIT_TODO, etc.

// state is an array of todos
const initialState = [
	{
		text: 'Learn Redux',
		complated: false,
		id: 0
	}
]

// Todos reducers
export default function todos(state = initialState, action){
	switch(action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			]

		case DELETE_TODO:
			return [
				
			]

		default:
			return state;
	}




}