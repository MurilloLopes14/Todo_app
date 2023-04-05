//* Styles
import {TodoStyle, TodoContent, Btn, Box} from './TodoItemStyle';

//* RN vector-icons
import Icon from 'react-native-vector-icons/Ionicons';

//* Hooks
import {useState} from 'react';

//* RN Checkbox
import CheckBox from '@react-native-community/checkbox';

//* Firebase
import {ref, update, remove} from 'firebase/database';
import {db} from '../../firebase/firebase-config';

//* Types
type TodoType = {
  id: string;
  key?: string;
  todoItem: {done: boolean; content: string};
};

export function TodoItem({id, todoItem: {done, content}}: TodoType) {
  const [doneState, setDoneState] = useState(false);

  const onCheck = async (isChecked: boolean) => {
    setDoneState(isChecked);

    await update(ref(db, '/todos'), {
      [id]: {
        content,
        done: !doneState,
      },
    });
  };

  const removeSingle = async () => {
    await remove(ref(db, `/todos/${id}`));
  };

  return (
    <TodoStyle>
      <Box>
        <CheckBox onValueChange={onCheck} value={done} />
        <TodoContent property={done}>{content}</TodoContent>
      </Box>
      <Btn onPress={removeSingle}>
        <Icon name="trash-outline" style={{fontSize: 25, color: '#f00'}} />
      </Btn>
    </TodoStyle>
  );
}
