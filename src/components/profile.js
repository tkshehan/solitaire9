import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export function Profile(props) {
  if (!props.loggedIn) {
    return <Redirect to="/profile/login" />;
  }

  return (
    <div className="profile">
      <section>
        <h2>User's Profile</h2>
      </section>
      <section>
        <h3>Username</h3>
        <table>
          <tr>
            <th>Game</th>
            <th>Date</th>
            <th>Score</th>
            <th>Time</th>
          </tr>
          <tr>
            <td>Pyramid</td>
            <td>5 minutes ago</td>
            <td>100</td>
            <td>20 minutes, 10 seconds</td>
          </tr>
          <tr>
            <td>Pyramid</td>
            <td>5 minutes ago</td>
            <td>100</td>
            <td>20 minutes, 10 seconds</td>
          </tr>
          <tr>
            <td>Pyramid</td>
            <td>5 minutes ago</td>
            <td>100</td>
            <td>20 minutes, 10 seconds</td>
          </tr>
          <tr>
            <td>Pyramid</td>
            <td>5 minutes ago</td>
            <td>100</td>
            <td>20 minutes, 10 seconds</td>
          </tr>
        </table>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(Profile);
