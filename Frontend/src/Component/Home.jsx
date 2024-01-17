import React, { useEffect } from 'react';
import Notes from './Notes';
import { useNavigate } from 'react-router-dom';
const Home = (props) => {

  const { showAlert } = props;
  const navigat = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigat("/Login")
    }
  }, [])
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  )
}

export default Home;
