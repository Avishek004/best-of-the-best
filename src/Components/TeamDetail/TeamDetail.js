import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import facebook from '../../Images/Icon/Facebook.png';
import Youtube from '../../Images/Icon/YouTube.png';
import twitter from '../../Images/Icon/Twitter.png';
import './TeamDetail.css'

const TeamDetail = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState({});
    const { strTeam, intFormedYear, strTeamLogo, strCountry, strSport, strGender, strTeamFanart3, strDescriptionEN, strTeamBanner, strTwitter, strFacebook, strYoutube } = team;

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId]);
    return (
        <section>
            <div className="header">
                <img src={strTeamBanner} alt="" className="banner" />
                <img src={strTeamLogo} alt="" className="center" />
            </div>
            <div className="team-details" style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ paddingLeft: "20px" }}>
                    <h1>{strTeam}</h1>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} />Founded: {intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag} />Country: {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} />Sport Type: {strSport}</p>
                    <p><FontAwesomeIcon icon={faMars} />Gender: {strGender}</p>
                </div>
                <div>
                    <img src={strTeamFanart3} alt="" style={{ width: "300px", height: "200px", padding: "10px" }} />
                </div>
            </div>
            <div className="description">
                <p>{strDescriptionEN}</p>
            </div>
            <div className="picture">
                <a href={strTwitter}><img src={twitter} alt=""></img></a>
                <a href={strFacebook}><img src={facebook} alt=""></img></a>
                <a href={strYoutube}><img src={Youtube} alt=""></img></a>
            </div>
        </section>
    );
};

export default TeamDetail;