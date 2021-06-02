import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Body.css';

const Body = (props) => {
    const { strTeam, strLeague, strTeamBadge, idTeam } = props.team;

    const history = useHistory();
    const handleClick = (teamId) => {
        const url = `/team/${teamId}`;
        history.push(url);
    }
    return (
        <div className="col-md-3 col-sm-6 col-12 text-center pb-3">
            <Card>
                <Card.Img variant="top" src={strTeamBadge} style={{ height: '200px' }} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>{strLeague}</Card.Text>
                    <Button variant="primary" onClick={() => handleClick(idTeam)}>Explore<FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Body;