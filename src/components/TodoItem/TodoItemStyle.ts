import styled from 'styled-components/native';

export const TodoContainer = styled.ScrollView``;

export const TodoStyle = styled.View`
  flex-direction: row;
  margin: 10px 0;
  align-items: center;
  border-color: rgba(200, 200, 200, 0.8);
  border-bottom-width: 1px;
  height: 50px;
  justify-content: space-between;
`;

export const TodoContent = styled.Text`
  padding: 0 5px;
  font-size: 20px;
  color: #000;
  opacity: ${(props: any) => (props.property ? 0.5 : 1)};
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Btn = styled.TouchableOpacity`
  background-color: rgba(200, 0, 0, 0.5);
  padding: 5px;
  margin-right: 2px;
  border-radius: 25px;
`;
