import React from 'react';

export default function Profile(props) {
  return (
    <div className="profile">
      < section >
        <h2>User's Profile</h2>
      </section >
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
