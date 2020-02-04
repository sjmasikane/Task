import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import bootImage from '../assets/Screenshot.png';

const Styles = styled.div`
.jumbotron{
    background: url(${bootImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
}
.overlay{
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    rigth: 0;
    z-index: -1;
}
`;

export const Jumbotron = () =>(
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcom</h1>
                <p>Learn to code from me.</p>
            </Container>
        </Jumbo>
    </Styles>
)