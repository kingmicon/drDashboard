import React from 'react';
import birthIcon from "../images/BirthIcon.jpg"
import gender from "../images/FemaleIcon.jpg"
import phone from "../images/PhoneIcon.jpg"
import insurance from "../images/InsuranceIcon.jpg"
import downloadicon from "../images/download_FILL0_wght300_GRAD0_opsz24 (1).jpg"

const PatientProfile = ({ patient }) => {
  if (!patient) {
    return <div>Select a patient to see details</div>;
  }
  
  const { lab_results = [] } = patient;

  return (
    <div className='patient-profile'>
      <div className='patient-profile-details'>
        <img src={patient.profile_picture} alt="profile-pic" />
        <div className='profile-name'>
          <h3>{patient.name}</h3>
        </div>
        <div className='profile-details'>
          <img src={birthIcon} alt='birthicon' />
          <div className='profile-details-text'>
            <p>Date Of Birth</p>
            <h6>{patient.date_of_birth}</h6>
          </div>
        </div>
        <div className='profile-details'>
          <img src={gender} alt='gender' />
          <div className='profile-details-text'>
            <p>Gender</p>
            <h6>{patient.gender}</h6>
          </div>
        </div>
        <div className='profile-details'>
          <img src={phone} alt='contact' />
          <div className='profile-details-text'>
            <p>Contact Info.</p>
            <h6>{patient.phone_number}</h6>
          </div>
        </div>
        <div className='profile-details'>
          <img src={phone} alt='emergency' />
          <div className='profile-details-text'>
            <p>Emergency Contacts</p>
            <h6>{patient.emergency_contact}</h6>
          </div>
        </div>
        <div className='profile-details'>
          <img src={insurance} alt='insurance' />
          <div className='profile-details-text'>
            <p>Insurance Provider</p>
            <h6>{patient.insurance_type}</h6>
          </div>
        </div>
        <div className='profile-more-details'>
          <button>Show All Information</button>
        </div>
      </div>
      <div className='profile-lab-results'>
        <h3>Lab Results</h3>
        <ul>
          {lab_results.map((result, index) => (
            <li key={index}>
              {result}
              <span><img src={downloadicon} alt='download-icon' /></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PatientProfile;
