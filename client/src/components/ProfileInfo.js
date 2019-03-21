import React from 'react';
import Styled from 'styled-components';
import Mark from '../images/Mark.jpg';
import Perrine from '../images/Perrine.jpg';
import Sandra from '../images/Sandra.jpg';
import Rita from '../images/Rita.jpg';
import Edie from '../images/Edie.jpg';
import MarkProfile from './../images/Mark-profile.jpg';
import PerrineProfile from './../images/Perrine-profile.jpg';
import SandraProfile from './../images/Sandra-profile.jpg';
import RitaProfile from './../images/Rita-profile.jpg';
import EdieProfile from './../images/Edie-profile.jpg';


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
    name: 'MARK CACCIAMANI, MD',
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
    interest1: 'Palliative Care Interventions',
    interest2: 'New payment models for care',
    interest3: 'Hospitalization Prevention Programs',
    interest4: 'Advanced Care Planning',
    interest5: 'Bike rides',
    interest6: 'Traveling',
    interest7: 'Engineering',
    profileImage: MarkProfile,
    info1: 'Terra Jacobs',
    info2: '(801) 485-5055 ext. 1',
    info3: <Email href="mailto:Terra@housecalldoctorsut.com">Terra@housecalldoctorsut.com</Email>,
    info4: 'Karen Singletary',
    info5: '(801) 485-5055 ext. 16',
    info6: <Email href="mailto:Karen@housecalldoctorsut.com">Karen@housecalldoctorsut.com</Email>,
    info7: '(801) 241-4483'
  },
  {
    name: 'PERRINE ANDERSON, GNP',
    linkName: 'perrine',
    shortName: 'Perrine',
    image: Perrine,
    shortBio: 'My experiences over the years clearly revealed the need for a unique practice which allows for continuity and collaboration of care for those living in the community...',
    bio: 'My experiences over the years clearly revealed the need for a unique practice which allows for continuity and collaboration of care for those living in the community who have difficulty accessing medical and psychiatric care.',
    edu: 'Board certified Gerontological Nurse Practitioner and Adult Nurse Practitioner.',
    edu2: 'MSN, University of Utah 1998.',
    edu3: 'BSN, University of Utah 1983.',
    edu4: 'Previous experience includes over 10 years as part of a medical team providing care in various skilled acute, long term, and dementia care facilities.',
    edu5: 'Ongoing interest in geriatric psychiatry.',
    edu6: "Previously worked with the Master's Program at Valley Mental Health, an innovative community health clinic serving adults of all ages. Worked part time in a hospital based outpatient senior behavioral health clinic.",
    interest1: 'Member of Utah Nurse Practitioners.',
    interest2: 'Member of Utah Council of Advanced Practice Psychiatric and Mental Health Nurses.',
    interest3: 'Member of Utah Geriatric Society.',
    interest4: 'Board of Trustees, Friendship Manor 2003-2011.',
    interest5: 'Certified member of PSIA-Intermountain since 1978, teaching Alpine and Telemark skiing.',
    interest6: 'Enjoys camping, road trips, traveling, gardening, hiking, cooking, and kayaking.',
    profileImage: PerrineProfile,
    info1: 'Sarah Johnson',
    info2: '(801) 485-5055 ext. 2',
    info3: <Email href="mailto:Sarahjohnson@housecalldoctorsut.com">Sarahjohnson@housecalldoctorsut.com</Email>,
    info4: 'Annalise Sauter',
    info5: '(801) 485-5055 ext. 17',
    info6: <Email href="mailto:Annalise@housecalldoctorsut.com">Annalise@housecalldoctorsut.com</Email>,
    info7: '(801) 241-0623'
  },
  {
    name: 'SANDRA JENSE, APRN',
    linkName: 'sandra',
    shortName: 'Sandra',
    image: Sandra,
    shortBio: 'As a health care provider I’m devoted to helping my patients and families find a way to merge their values and goals with their medical needs. Very few people want to...',
    bio: 'As a health care provider I’m devoted to helping my patients and families find a way to merge their values and goals with their medical needs. Very few people want to spend their time in a hospital or a clinic, waiting for medical care, and house calls are a way to support people’s medical needs while giving them more time to do what matters most to them.',
    edu: 'Board certified as an Acute Care Nurse Practitioner.',
    edu2: "Over 15 years of health care experience, including Hospice and Palliative Care, Women's Health, Nutrition Support, and Clinical laboratory Science.",
    edu3: 'Doctorate of Nursing Practice, University of Utah, 2013.',
    edu4: 'BSN, University of Utah, 2007.',
    edu5: 'BS Zoology, Weber State University, 1997.',
    interest1: 'Member of Hospice and Palliative Nurses Association, and of STTI Nursing Honor Society.',
    interest2: 'Enjoys knitting, cooking, reading, raising backyard chickens, advocating for family centered policy change, and spending time with husband and three children.',
    profileImage: SandraProfile,
    info1: 'Terra Jacobs',
    info2: '(801) 485-5055 ext. 1',
    info3: <Email href="mailto:Terra@housecalldoctorsut.com">Terra@housecalldoctorsut.com</Email>,
    info4: 'Kirby Trombetti',
    info5: '(801) 485-5055 ext. 17',
    info6: <Email href="mailto:Kirby@housecalldoctorsut.com">Kirby@housecalldoctorsut.com</Email>,
    info7: '(801) 241-0255'
  },
  {
    name: 'RITA RUTLAND, APRN',
    linkName: 'rita',
    shortName: 'Rita',
    image: Rita,
    shortBio: "My goal is to provide quality personalzed health care in a patient centered environment that prioritizes the patient's needs which is in line with the mission of House Call...",
    bio: "My goal is to provide quality personalzed health care in a patient centered environment that prioritizes the patient's needs which is in line with the mission of House Call Doctors. Seeing patients in their home gives me the time and resources I need to manage their health care in a manner that improves health outcomes, allows for flexibility, and tailors their health care plan specific to each patients' needs.",
    edu: 'Board certified as a Family Nurse Practitioner, AANP 2017',
    edu2: "Master's of Nursing Practice, Georgetown University, D.C. 2017",
    edu3: 'BSN in Geriatrics, University of Utah, 2009',
    edu4: 'Over 18 years of healthcare experience, including Geriatrics for 15 years, Acute Care Rehab and Long Term Care, Hospice and Palliative Care for 10 years, Personal Trainer and Nutrition Coach for 6 years.',
    edu5: 'From Canada, spent 18 years in Japan, and has lived in Utah for the past 20 years.',
    interest1: 'Member of Hospice and Palliative Nurses Association, STTI Nursing Honor Society, Utah Nurse Practitioners, and American Association of Nurse Practitioners',
    interest2: 'Enjoys the gym, paddle boarding, cooking, making costumes, puzzles, traveling, mentoring nursing students, and spending time with family',
    profileImage: RitaProfile,
    info1: 'Brittany Robb',
    info2: '(801) 485-5055 ext: 3',
    info3: <Email href="mailto:Brittany@housecalldoctorsut.com">Brittany@housecalldoctorsut.com</Email>,
    info4: 'Peter Haight',
    info5: '(801) 485-5055 ext. 17',
    info6: <Email href="mailto:Peter@housecalldoctorsut.com">Peter@housecalldoctorsut.com</Email>,
    info7: '(801) 241-0339'
  },
  {
    name: 'EDIE SHEPHERD, APRN',
    linkName: 'edie',
    shortName: 'Edie',
    image: Edie,
    shortBio: 'Seeing a patient in their home provides a place that is comfortable and familiar for them as they receive the healthcare they deserve. This is House Call Doctors’ objective in...',
    bio: 'Seeing a patient in their home provides a place that is comfortable and familiar for them as they receive the healthcare they deserve. This is House Call Doctors’ objective in providing for those in need of a reliable provider. Families and patients are present in the home environment which allows realistic and more accurate assessments that might be missed in a clinic setting.  This allows me the ability to see the home environment including food, clothing, bathing, and living conditions.  House Call Doctors’ is a great place for me to practice because of their team approach with many caring and encouraging staff members who help patients with their needs. In hospitals I felt like I was trying to make the bean counters happy when patient care should have been the main ambition. House Call Doctors’ focus is the patient.',
    edu: 'US Army Medic:  1981-1984. Received Army Achievement Medal.',
    edu2: 'Salt Lake Community College LPN/RN: 1984-1990',
    edu3: 'University of Phoenix: BSN: 2001.',
    edu4: 'University of Utah: Master’s Degree Science: Adult Nurse Practitioner 2009.',
    edu5: 'University of Utah: Sub-Specialty in Geriatric Medicine Certificate 2009.',
    interest1: 'Member of American Association of Nurse Practitioners, and Utah State Nurse Practitioners.',
    interest2: 'Sigma Phi Omega member.',
    interest3: 'Loves boating, four wheeling, and camping with kid and grandkids.',
    interest4: 'A patriot: there are American flags in my house and yard.',
    profileImage: EdieProfile,
    info1: 'Brittany Robb',
    info2: '(801) 485-5055 ext: 3',
    info3: <Email href="mailto:Brittany@housecalldoctorsut.com">Brittany@housecalldoctorsut.com</Email>,
    info4: 'Megan Widmer',
    info5: '(801) 485-5055 ext. 17',
    info6: <Email href="mailto:Megan@housecalldoctorsut.com">Megan@housecalldoctorsut.com</Email>,
    info7: '(801) 241-0021'
  },
]


export default profiles;
