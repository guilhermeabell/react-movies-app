import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`

  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 80, paddingRight: 40 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 221px;
  height: 385px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const TabText = styled.Text`
  font-size: 14px;
  color: #f4f4f4;
  text-align: center;
`;