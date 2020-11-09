import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${colors.primary};
    padding: 100px 45px
`;

export const Icon = styled.Image`
    margin-bottom: 30px;
`;

export const Title = styled.Text`
    font-size: 22px;
    color: #fff;
    font-weight: bold;
`;

export const Description = styled.Text`
    font-size: 18px;
    color: #aaa;
    text-align: center;
    margin-top: 35px;
`;

export const Button = styled.TouchableOpacity`
    position: absolute; 
    bottom: 40px;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${colors.orchid};
    padding: 20px 20px;
    border-radius: 15px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;