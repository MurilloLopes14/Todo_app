import styled from 'styled-components/native';

export const TodoContainer = styled.ScrollView``;

export const Todos = styled.View``;

export const NoTodoMsg = styled.Text`
  text-align: center;
  font-size: 20px;
  margin: 10px 0;
`;

export const Box = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-color: #000;
  border-bottom-width: 1px;
`;

export const Input = styled.TextInput`
  width: 350px;
  background-color: azure;
  border: 1px solid;
  border-color: #111;
  padding-left: 10px;
  font-size: 20px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin: 10px 0;
  gap: 100px;
  align-items: center;
`;

export const Btn = styled.TouchableOpacity`
  opacity: ${(props: any) => (props.disabled ? 0.5 : 1)};
`;

export const BtnContent = styled.Text`
  background-color: ${(props: any) =>
    props.property === 'add' ? '#23ba23' : '#e34e55'};
  color: #000;
  padding: 8px;
  border-radius: 10px;
`;
