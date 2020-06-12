import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Container } from 'react-bootstrap'

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=cats", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "d32a5fb763msh4f620fd71788343p11643cjsn19b7b9ebe9d1"
            }
        })
            .then(response => response.json())
            .then(responseObj => {
                const { data } = responseObj;
                this.setState({ albums: data })
                console.log(data)
            })
            .catch(err => {
                console.log(err);
            });
    }



    render() {
        return (

            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-4 pt-4 text-center">{this.state.albums.map(albumCard =>
                <Card className="pt-2 mb-2 mr-2" key={albumCard.id}>
                    <Card.Img variant="top" src={albumCard.album.cover_big} />
                    <Card.Body>
                        <Card.Title>{albumCard.album.title}</Card.Title>
                    </Card.Body>
                </Card>
            )}</Row>


        )
    }
}

export default HomePage;