import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Body from '../Body/Body';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <main>
            <Header></Header>
            <Container>
                <div className="row py-5">
                    {
                        teams.map(team => <Body team={team}></Body>)
                    }
                </div>
            </Container>
        </main>
    );
};

export default Home;