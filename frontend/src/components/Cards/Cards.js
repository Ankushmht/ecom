import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import './cards.css'
import CardsHeading from './CardsHeading';
import tshirt from './Img/t.jpg'
import dogt from './Img/d.jpg'
import { Link } from "react-router-dom";



const Cards = () => {
    const numberOfCards = 11;
    return (
        <div>
            <CardsHeading />
            <Container>
                <Row xs={3}>
                    {[...Array(numberOfCards)].map((e, i) => {
                        return (
                            <Col>
                                <Card>
                                    <CardBody>
                                        <div class="flip-box">
                                            <div class="flip-box-inner">
                                                <div class="flip-box-front">
                                                 <img src={tshirt} alt="Paris" class="img" width="100%" />
                                                </div>
                                                <div class="flip-box-back">
                                                <Link to="/products">  <img src={dogt} alt="Paris" class="img"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <CardTitle ><Link to="/products"> Card title #{i + 1}</Link> </CardTitle>
                                        <CardSubtitle className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Cards
