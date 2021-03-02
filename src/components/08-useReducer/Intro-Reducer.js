const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if (action?.state === 'agregar') {
        return [...state, action.payload];
    }
    return state;

}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar Leche',
    done: false
};
const AgregarAction = {
    type: 'agregar',
    payload: newTodo
}
todos = todoReducer(todos, AgregarAction);

console.log(todos);