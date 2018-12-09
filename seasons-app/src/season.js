import React from 'react';
import './season.css';

const seasonConfig = {
    summer: {
      text: "Let's hit the beach",
      iconName: "sun"
    },
    winter: {
      text: "Burr, it is chilly",
      iconName: "snowflake"
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const Season = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season);
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default Season;