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
        <div style={{ float: 'left', width: '500px'}}>
            <Card className="card">
                <Card.Img variant="Center" src={strTeamBadge} style={{ width: '200px', height: '200px' }} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>{strLeague}</Card.Text>
                    <Button onClick={() => handleClick(idTeam)}>Explore<FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Body;