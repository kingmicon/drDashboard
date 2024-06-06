import React, { useEffect, useState } from 'react';
import dot from "../images/more_horiz_FILL0_wght300_GRAD0_opsz24.jpg";
import search from "../images/search_FILL0_wght300_GRAD0_opsz24.jpg";
import PatientProfile from './PatientProfile';
import Diagonstic from './Diagonstic';

const PatientList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  
  let username = 'coalition';
  let password = 'skills-test';
  let auth = btoa(`${username}:${password}`);

  useEffect(() => {
    fetch(`https://fedskillstest.coalitiontechnologies.workers.dev`, {
      headers: {
        'Authorization': `Basic ${auth}`
      }
    })
    .then((response) => {
      if (!response.ok) {
        alert(`This is an HTTP Error: The status is ${response.status}`);
        throw new Error(`This is an HTTP Error: The status is ${response.status}`);
      }
      return response.json();
    })
    .then((actualData) => {
      setData(actualData);
      setError(null);
      if (actualData && actualData.length > 0) {
        setSelectedPatient(actualData[3]);
      }
      console.log('Fetched Data:', actualData);
    })
    .catch((error) => {
      setError(error);
      setData([]);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [auth]);

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  useEffect(() => {
    console.log('Selected Patient:', selectedPatient);
  }, [selectedPatient]);

  return (
    <div className='patientlist-heading1'>
      <div className='patientlist-heading'>
        <div className='patientlist-title'>
          <h3>Patients</h3>
          <img src={search} alt='search'/>
        </div>
        {loading && <div className='loading'>Data is loading. Please wait...</div>}
        {error && <div className='error'>{`There is a problem fetching your data - ${error}`}</div>}
        <ul className='PatientList'>
          {data && data.map((item, index) => (
            <li key={index} onClick={() => handleSelectPatient(item)} className={selectedPatient === item ? 'selected' : ''}>
              <section className='card'>
                <div className='PatientPic'>
                  <img src={item.profile_picture} alt='profile' />
                </div>
                <div className='patientName'>
                  <h3>{item.name}</h3>
                  <div className='patientGender'>
                    <p>{item.gender},{item.age}</p>
                  </div>
                </div>
                <button className='profile-dot'>
                  <img src={dot} alt='dots' />
                </button>
              </section>
            </li>
          ))}
        </ul>
      </div>
        <Diagonstic patient={selectedPatient}  />
        <PatientProfile patient={selectedPatient} data={data}/>
    </div>
  );
}

export default PatientList;
