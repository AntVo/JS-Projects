// Holds Reducers related to Todos. Ex: ADD_TODO, DELETE_TODO, EDIT_TODO, etc.

// state is an array of todos
const initialState = [
	{
		text: 'Learn Redux',
		completed: false,
		id: 0
	}
]

// Todos reducers
export default function todos(state = initialState, action){
	switch(action.type) {

		case 'ADD_TODO':
			return [
				...state,
				{
					id: state.length-1,
					text: action.text,
					completed: false
				}
			]

		case 'DELETE_TODO':
			return state.filter(todo => todo.id !== action.id);

		default:
			return state;
	}


}