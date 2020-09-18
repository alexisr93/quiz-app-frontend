import React, { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';

function UserDashboard() {
  const [username, setUserName] = useState(localStorage.getItem('username'));
  const [resultList, setResultList] = useState([]);
  const [dashboardData, setDashBoardData] = useState({
    quizzesTaken: 0,
    lastQuizTaken: 'None',
    quizzesFailed: 0,
  })

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/results/' + username, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then((data) => {
      let failed = data.filter(element => {
        return parseInt(element.quizScore.slice(0 , -1)) < 60;
      }).length;
      
      setDashBoardData({
        quizzesTaken: data.length,
        lastQuizTaken: data[Object.keys(data)[Object.keys(data).length - 1]].quizTitle ,
        quizzesFailed: failed,
      });
    })
    .catch(console.log)
  }, []);
  return (
    <>
      <h2 className="mt-4 mb-5">Hi, {username}!</h2>
      <h4>Quizzes Take:</h4>
      <h1>{dashboardData.quizzesTaken}</h1>
      <br/>
      <h4>Last Quiz Taken:</h4>
      <h1>{dashboardData.lastQuizTaken}</h1>
      <br/>
      <h4>Quizzes Failed:</h4>
      <h1>{dashboardData.quizzesFailed}</h1>
    </>
  )
}

export default UserDashboard;
