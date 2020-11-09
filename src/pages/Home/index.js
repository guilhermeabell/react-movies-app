import React from 'react';
import {Image} from 'react-native'

import { Container, Button, ButtonText, Title, Description, Icon } from './styles';

import HomeIcon from '../../assets/home.png';
import Arrow from '../../assets/vector/arrow.png';

const Home = ({ navigation }) => {
    function handleNavigate() {
        navigation.navigate('/recommendations');
    }

    return (
        <Container>
            <Icon source={HomeIcon} />
            <Title>
                Olá!
            </Title>
            <Description>
                Nossas boas vindas a você, amante de filmes. Com o MyMovii você 
                poderá descobrir novos filmes e adiciona-los a sua lista de 
                favoritos.
            </Description>
            <Button onPress={handleNavigate}>
                <ButtonText>Começar</ButtonText>
                <Image source={Arrow} />
            </Button>
        </Container>
    );
}

export default Home;
