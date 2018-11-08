import React from 'react';

export default function Scores(props) {
  return (
    <section className="scores">
      <h2>High Scores</h2>
      <table>
        <tr>
          <th>Username</th>
          <th>Score</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>User1</td>
          <td>120 points</td>
          <td>15 minutes, 0 seconds</td>
          <td>1 minute ago</td>
        </tr>
        <tr>
          <td>User1</td>
          <td>120 points</td>
          <td>15 minutes, 0 seconds</td>
          <td>1 minute ago</td>
        </tr>
        <tr>
          <td>User1</td>
          <td>120 points</td>
          <td>15 minutes, 0 seconds</td>
          <td>1 minute ago</td>
        </tr>
        <tr>
          <td>User1</td>
          <td>120 points</td>
          <td>15 minutes, 0 seconds</td>
          <td>1 minute ago</td>
        </tr>
      </table>
    </section>
  );
}
