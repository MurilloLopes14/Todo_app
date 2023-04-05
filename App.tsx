//* Styles
import {Container} from './Styles';

//* React-native
import {StatusBar} from 'react-native';

//* Hooks
import {useState} from 'react';

//* Types
import type {StatusBarStyle} from 'react-native';

//* Components
import {TodoItem} from './src/components/TodoItem/TodoItem';
import {Todo} from './src/screens/Todo/Todo';

function App(): JSX.Element {
  const STYLES = ['default', 'light-content', 'dark-content'] as const;
  const TRANSITIONS = ['fade', 'slide', 'none'] as const;

  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[2],
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[1]);

  return (
    <>
      <StatusBar
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        backgroundColor={'#444'}
      />
      <Container contentInsetAdjustmentBehavior="automatic">
        <Todo />
      </Container>
    </>
  );
}

export default App;
