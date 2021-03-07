import React from 'react';
import { Query } from 'react-apollo';
import { LAUNCHES_QUERY } from './Launches.constants';
import LaunchItem from '../LaunchItem/LaunchItem';

const Launches = () => {
    const content = ({ loading, error, data }) => {
        if (loading) return <h4>Loading...</h4>;
        if (error) console.log(error);
        return <>{data.launches.map(launch => <LaunchItem key={launch.mission_name} launch={launch} />)}</>;
    };

    return (
        <>
            <h3 className={"display-6 my-3"}>Launches</h3>
            <Query query={LAUNCHES_QUERY}>
                {content}
            </Query>
        </>
    )
}

export default Launches
