import styled from 'styled-components';

export const Button = styled.button`
    color:#fff;
    background-color:${props => props.color ? 'blue' : 'red'};
    &.button-style{
        color:black;
    }
`
export const NewButton = styled(Button)`
    color:blue;
    font-size:4px;
`