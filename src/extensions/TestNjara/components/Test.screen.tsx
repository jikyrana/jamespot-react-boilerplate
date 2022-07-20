import * as React from 'react';
import styled from 'styled-components';
import { JRCButtonProps } from 'jamespot-react-components';
import jamespot from 'jamespot-user-api';

const Button = J.react.registry.getLazyComponent<JRCButtonProps>('Button');

const Container = styled.div`
    margin: 50px;
`
const Dialog = styled.div<{isVisible: boolean}>`
    background: grey;  
    opacity: ${(props) => (props.isVisible ? '1' : '0')};  
    margin: 100px;
`
const listArticle = ()=> {
    jamespot.article.create('test', 'description').then((response) => {
        console.log(response);
    });
}

export const AppScreen: React.FC = () => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <Container>
        <Button dataCy='test' color='valid' float='right' onClick={()=>{listArticle()}}>PUBLIER ARTICLE</Button>
        <Dialog isVisible={isOpen}>TEST ICI</Dialog>
    </Container>
    );
};


