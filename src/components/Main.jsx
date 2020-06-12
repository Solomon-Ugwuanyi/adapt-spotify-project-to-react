import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage'
import { Container } from 'react-bootstrap'


class Main extends React.Component {
    render() {
        return (
            <Container>
                <div className="col-12 col-md-9 offset-md-3 mainPage">
                    <div className="row">
                        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                            <a href="#">TRENDING</a>
                            <a href="#">PODCAST</a>
                            <a href="#">MOODS AND GENRES</a>
                            <a href="#">NEW RELEASES</a>
                            <a href="#">DISCOVER</a>
                        </div>
                    </div>
                    <HomePage />
                </div>
            </Container>
        )
    }
}
export default Main;