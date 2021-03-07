import gql from 'graphql-tag';
import LaunchItem from '../LaunchItem/LaunchItem';

export const LAUNCHES_QUERY = gql`
query LaunchesQuery{
    launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
    }
}
`;

// export const getLaunchItems = ({ launches }) => (launches.map((launch) => {
//     <LaunchItem key={launch.flight_number} launch={launch} />
// }));

