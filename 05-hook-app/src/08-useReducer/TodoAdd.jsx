import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        onNewTodo(newTodo);
        onResetForm();

    }

    return (
        <form onSubmit={onFormSubmit} aria-label='formTodoAdd'>
            <input
                type="text"
                name="description"
                className="form-control"
                placeholder="¿Qué hay que hacer?"
                autoComplete="off"
                value={description}
                onChange={onInputChange}
                aria-label='inputTodoAdd'
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1 btn-block"
                aria-label='buttonTodoAdd'
            // onClick={ onNewTodo }
            >
                Agregar
            </button>
        </form>
    )
}
