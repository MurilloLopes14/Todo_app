//* Styles
import {
  Btn,
  BtnContent,
  ButtonsContainer,
  Input,
  TodoContainer,
  Todos,
  NoTodoMsg,
  Box,
} from './TodoStyle';

//* Hooks
import {useState, useEffect} from 'react';

//* Firebase
import {db} from '../../firebase/firebase-config';
import {onValue, ref, push, remove} from 'firebase/database';
import {TodoItem} from '../../components/TodoItem/TodoItem';

export function Todo() {
  const [todos, setTodos] = useState([]);
  const [presentTodo, setPresentTodo] = useState('');

  const todoKey: string[] = Object.keys(todos);

  // Get all todos from database
  useEffect(() => {
    const getTodos = async () => {
      await onValue(ref(db, '/todos'), snaphot => {
        const data = snaphot.val() || {};
        const todoItems = {...data};
        setTodos(todoItems);
      });
    };
    getTodos();
  }, []);

  const addTodo = async () => {
    await push(ref(db, '/todos'), {
      done: false,
      content: presentTodo,
    });

    setPresentTodo('');
  };

  const clearAll = async () => {
    await remove(ref(db, '/todos'));
  };

  return (
    <TodoContainer contentContainerStyle={{padding: 10}}>
      <Box>
        <Input
          placeholder="Nova tarefa"
          value={presentTodo}
          onChangeText={(value: string) => {
            setPresentTodo(value);
          }}
        />
        <ButtonsContainer>
          <Btn onPress={addTodo} disabled={presentTodo == ''}>
            <BtnContent property={'add'}>Adicionar</BtnContent>
          </Btn>
          <Btn onPress={clearAll}>
            <BtnContent property={'clear'}>Limpar todas</BtnContent>
          </Btn>
        </ButtonsContainer>
      </Box>
      <Todos>
        {todoKey.length > 0 ? (
          todoKey.map((key: any) => (
            <TodoItem key={key} id={key} todoItem={todos[key]} />
          ))
        ) : (
          <NoTodoMsg>Você ainda não adiciounou tarefas</NoTodoMsg>
        )}
      </Todos>
    </TodoContainer>
  );
}
