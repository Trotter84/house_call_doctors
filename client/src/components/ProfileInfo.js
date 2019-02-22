import React from 'react';
import Styled from 'styled-components';
import Mark from '../images/Mark.jpg';
import Perrine from '../images/Perrine.jpg';
import Sandra from '../images/Sandra.jpg';
import Rita from '../images/Rita.jpg';
import Edie from '../images/Edie.jpg';
import MarkProfile from './../images/Mark-profile.png';
import PerrineProfile from './../images/Perrine-profile.png';
import SandraProfile from './../images/Sandra-profile.png';
import RitaProfile from './../images/Rita-profile.png';
import EdieProfile from './../images/Edie-profile.png';


const Email = Styled.a`
  font-size: 13px;
  color: #AF3120;
  transition: all 200ms ease-in-out;
  :hover {
    color: black;
  }
`


const profiles = [
  {
    name: 'MARK J. CACCIAMANI, M.D.',
    linkName: 'mark',
    shortName: 'Mark',
    image: Mark,
    shortBio: 'Dr. Mark Cacciamani has always had an interest in serving the underserved. He took a yearoff before attending medical school to volunteer in Southern California, aiding...',
    bio: 'Dr. Mark Cacciamani has always had an interest in serving the underserved. He took a yearoff before attending medical school to volunteer in Southern California, aiding the Spanish-speaking community that didn’t have access to medical care.',
    edu: 'Expertise in Medicare Annual Wellness Exams, Hierarchal Conditional Categories and Risk Assessment.',
    edu2: 'Experience as director of multiple Hospice and Home Health agencies.',
    edu3: "More than 10 years'  experience delivering medical care in group homes for the disabled and assisted livings.",
    edu4: 'Board Certified in Family Medicine and Hospice and Palliative Medicine.',
    edu5: 'Graduated from Georgetown University 1999.',
    edu6: 'Residency at University of Utah in Family Medicine.',
    edu7: '1 year Jesuit Volunteer Program: simple living community, spirituality, and social justice.',
    edu8: 'Graduated from University of Scranton Biology Degree.',
    profileImage: MarkProfile,
    info1: 'Terra Jacobs',
    info2: '(801) 485-5055 ext: 1',
    info3: <Email href="mailto:Brittany@housecalldoctorsut.com">Brittany@housecalldoctorsut.com</Email>,
    info4: 'Karen Singletary',
    info5: <Email href="mailto:Peter@housecalldoctorsut.com">Peter@housecalldoctorsut.com</Email>,
  },
  {
    name: 'PERRINE ANDERSON, GNP',
    linkName: 'perrine',
    shortName: 'Perrine',
    image: Perrine,
    shortBio: 'My experiences over the years clearly revealed the need for a unique practice which allows for continuity and collaboration of care for those living in the community...',
    bio: 'My experiences over the years clearly revealed the need for a unique practice which allows for continuity and collaboration of care for those living in the community who have difficulty accessing medical and psychiatric care.',
    profileImage: PerrineProfile,
    info1: 'Sarah Johnson',
    info2: '(801) 485-5055 ext: 2',
    info3: <Email href="mailto:Sarahjohnson@housecalldoctorsut.com">Sarahjohnson@housecalldoctorsut.com</Email>,
    info4: 'Courtney Leonard',
    info5: <Email href="mailto:Courtney@housecalldoctorsut.com">Courtney@housecalldoctorsut.com</Email>,
  },
  {
    name: 'SANDRA JENSE, APRN',
    linkName: 'sandra',
    shortName: 'Sandra',
    image: Sandra,
    shortBio: 'As a health care provider I’m devoted to helping my patients and families find a way to merge their values and goals with their medical needs. Very few people want to...',
    bio: 'As a health care provider I’m devoted to helping my patients and families find a way to merge their values and goals with their medical needs. Very few people want to spend their time in a hospital or a clinic, waiting for medical care, and house calls are a way to support people’s medical needs while giving them more time to do what matters most to them.',
    profileImage: SandraProfile,
    info1: 'Terra Jacobs',
    info2: '(801) 485-5055 ext: 1',
    info3: <Email href="mailto:Sarahjohnson@housecalldoctorsut.com">Sarahjohnson@housecalldoctorsut.com</Email>,
    info4: 'Kirby Trombetti',
    info5: <Email href="mailto:Kirby@housecalldoctorsut.com">Kirby@housecalldoctorsut.com</Email>,
  },
  {
    name: 'RITA RUTLAND, APRN',
    linkName: 'rita',
    shortName: 'Rita',
    image: Rita,
    shortBio: "My goal is to provide quality personalzed health care in a patient centered environment that prioritizes the patient's needs which is in line with the mission of House Call...",
    bio: "My goal is to provide quality personalzed health care in a patient centered environment that prioritizes the patient's needs which is in line with the mission of House Call Doctors. Seeing patients in their home gives me the time and resources I need to manage their health care in a manner that improves health outcomes, allows for flexibility, and tailors their health care plan specific to each patients' needs.",
    profileImage: RitaProfile,
    info1: 'Brittany Robb',
    info2: '(801) 485-5055 ext: 3',
    info3: <Email href="mailto:Brittany@housecalldoctorsut.com">Brittany@housecalldoctorsut.com</Email>,
    info4: 'Peter Haight',
    info5: <Email href="mailto:Peter@housecalldoctorsut.com">Peter@housecalldoctorsut.com</Email>,
  },
  {
    name: 'EDIE SHEPHERDS, NP',
    linkName: 'edie',
    shortName: 'Edie',
    image: Edie,
    shortBio: 'Seeing a patient in their home provides a place that is comfortable and familiar for them as they receive the healthcare they deserve. This is House Call Doctors’ objective in...',
    bio: 'Seeing a patient in their home provides a place that is comfortable and familiar for them as they receive the healthcare they deserve. This is House Call Doctors’ objective in providing for those in need of a reliable provider. Families and patients are present in the home environment which allows realistic and more accurate assessments that might be missed in a clinic setting.  This allows me the ability to see the home environment including food, clothing, bathing, and living conditions.  House Call Doctors’ is a great place for me to practice because of their team approach with many caring and encouraging staff members who help patients with their needs. In hospitals I felt like I was trying to make the bean counters happy when patient care should have been the main ambition. House Call Doctors’ focus is the patient.',
    profileImage: EdieProfile,
    info1: 'Brittany Robb',
    info2: '(801) 485-5055 ext: 3',
    info3: <Email href="mailto:Brittany@housecalldoctorsut.com">Brittany@housecalldoctorsut.com</Email>,
    info4: 'Megan Widmer',
    info5: <Email href="mailto:Megan@housecalldoctorsut.com">Megan@housecalldoctorsut.com</Email>,
  },
]


export default profiles;
