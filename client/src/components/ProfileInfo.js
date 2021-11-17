import React from 'react';
import Styled from 'styled-components';
import Mark from '../images/Mark.jpg';
import Perrine from '../images/Perrine.jpg';
import Sandra from '../images/Sandra.jpg';
import Gwen from '../images/Gwen.jpg';
import Edie from '../images/Edie.jpg';
import Trenaisa from '../images/trenaisa.jpg';
import Courtney from '../images/Courtney.jpg';

import MarkProfile from '../images/Mark-profile.jpg';
import PerrineProfile from '../images/Perrine-profile.jpg';
import SandraProfile from '../images/Sandra-profile.jpg';
import GwenProfile from '../images/Gwen-profile.png';
import EdieProfile from '../images/Edie-profile.jpg';
import TrenaisaProfile from '../images/Trenaisa-profile.png';
import CourtneyProfile from '../images/Courtney-profile.png';

// import Placeholder from '../images/female-placeholder.jpeg';
// import PlaceholderProfile from '../images/female-placeholder-profile.png';


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
    shortBio: 'More care is not always better care. There are few areas in medicine that can result in higher patient satisfaction, and decreased utilization while maintaining...',
    bio: 'More care is not always better care. There are few areas in medicine that can result in higher patient satisfaction, and decreased utilization while maintaining quality measures.',
    bio2: 'Here at House Call Doctors we take a collaborative approach and utilize a person centered care plan to direct our delivery of health care in a place and in a manner that makes the most sense.   Our patients often have barriers to care that would otherwise result in care being given in Emergency Rooms and Instacares.',
    edu: 'Expertise in Medicare Annual Wellness Exams, Hierarchal Conditional Categories and Risk Assessment.',
    edu2: 'Experience as director of multiple Hospice and Home Health agencies.',
    edu3: "More than 10 years’ experience delivering medical care in group homes for the disabled and assisted livings.",
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
    info1: 'Sarah Sylvester',
    info2: '(801) 485-5055 ext. 2',
    info3: <Email href="mailto:sarahs@housecalldoctorsut.com">SarahS@housecalldoctorsut.com</Email>,
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
    info1: 'Sarah Sylvester',
    info2: '(801) 485-5055 ext. 2',
    info3: <Email href="mailto:SarahS@housecalldoctorsut.com">SarahS@housecalldoctorsut.com</Email>,
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
    info1: 'NA',
    info2: 'NA',
    info3: 'NA',
    info4: 'NA',
    info5: 'NA',
    info6: 'NA',
    info7: 'NA'
  },
  {
    name: 'GWEN MITCHELL, APRN',
    linkName: 'gwen',
    shortName: 'Gwen',
    image: Gwen,
    shortBio: "Meeting with patients in their home environment gives me the opportunity to get to know them and their family/support system better, making it easier understand their needs...",
    bio: "Meeting with patients in their home environment gives me the opportunity to get to know them and their family/support system better, making it easier understand their needs--psychosocial as well as medical.  In the home environment I am able to get to know my patients better as people, with concerns and preferences that often don’t get mentioned in a more sterile clinic setting.  Overall, I am able to assist a person with maximizing their health and function in a way that isn’t possible in a traditional 15-20 minute clinic visit.",
    edu: 'Board certified Family Nurse Practitioner',
    edu2: "MS in Nursing University of Utah 1992",
    edu3: 'BS in Nursing Westminster College 1980',
    edu4: '27+ years of experience as an APRN, with 25 years of experience at the VA Hospital providing medical care to Veterans in their homes',
    interest1: 'Member of American Nurses Association and Utah Nurse Practitioners',
    interest2: 'Supporting people through end of life of care',
    interest3: 'Personally, I love to hike, camp, go indoor and outdoor climbing, curl up with a good murder mystery, and try out new ethnic food restaurants.',
    interest4: 'I also have made 6 trips to Tanzania and Kenya for medical and humanitarian mission work.',
    profileImage: GwenProfile,
    info1: 'Brittany Morrill',
    info2: '(801) 485-5055 ext: 3',
    info3: <Email href="mailto:Brittany@housecalldoctorsut.com">Brittany@housecalldoctorsut.com</Email>,
    info4: 'Brooke Hulse',
    info5: '(801) 485-5055 ext. 17',
    info6: <Email href="mailto:brooke@housecalldoctorsut.com">Brooke@housecalldoctorsut.com</Email>,
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
    info1: 'Brittany Morrill',
    info2: '(801) 485-5055 ext: 3',
    info3: <Email href="mailto:Brittany@housecalldoctorsut.com">Brittany@housecalldoctorsut.com</Email>,
    info4: 'Megan Widmer',
    info5: '(801) 485-5055 ext. 17',
    info6: <Email href="mailto:Megan@housecalldoctorsut.com">Megan@housecalldoctorsut.com</Email>,
    info7: '(801) 241-0021'
  },
  {
    name: 'TRENAISA NAY, GNP',
    linkName: 'trenaisa',
    shortName: 'Trenaisa',
    image: Trenaisa,
    shortBio: '"Theres no place like home.” I believe that rings true for most people, especially in times of an illness or deteriorating health. That is the reason I strongly believe in...',
    bio: '"Theres no place like home.” I believe that rings true for most people, especially in times of an illness or deteriorating health. That is the reason I strongly believe in bringing medical services to you! Being in your home allows for a more personal assessment and discussion about what matters the most to you. I believe whole- heartedly in allowing you and your family to make educated decisions that make the most sense for your health and wellness. As a Nurse Practitioner, I value spending time making sure your physical and mental health needs are met in order for you to have the best quality of life possible. As a provider for House Call Doctors, I am able to deliver quality health care in the comfort of your own home.',
    edu: 'Graduated from Weber State University (BSN, 1997), and University or Utah (MSN, 2003)',
    edu2: 'Board certified through American Nurses Credentialing Center',
    edu3: 'Geriatric Nurse Practitioner with 15+ years’ experience',
    edu4: 'Experienced in the management of both acute and chronic diseases',
    edu5: 'Experienced in the management of various types of chronic wounds',
    edu6: 'Experienced in the delivery of primary care, palliative care, and hospice care',
    interest1: 'I value treating you as an individual and involving your family members (as desired) in the decision-making process.',
    interest2: 'I value discussions about your goals of care and what quality of life means to you.',
    interest3: 'I value time with my family, as my husband and three sons fill my heart.',
    interest4: 'I enjoy being with my family and our dogs, baking/cooking, running outside with my Golden-doodle, reading a good book, laughing with friends, and taking a nap whenever I can!',
    profileImage: TrenaisaProfile,
    info1: 'Terra Jacobs',
    info2: '(801) 485-5055 ext. 1',
    info3: <Email href="mailto:terra@housecalldoctorsut.com">Terra@housecalldoctorsut.com</Email>,
    info4: 'Sasha Glass',
    info5: '(801) 485-5055 ext. 17',
    info6: <Email href="mailto:sasha@housecalldoctorsut.com">sasha@housecalldoctorsut.com</Email>,
    info7: '(801) 241-0484'
  },
  {
    name: 'COURTNEY HARPER, PA-C',
    linkName: 'courtney',
    shortName: 'Courtney',
    image: Courtney,
    shortBio: 'As a provider, I always strive to put my patients first. Being able to visit patients in their homes while treating their healthcare needs allows for an overall better patient-centered experience...',
    bio: 'As a provider, I always strive to put my patients first. Being able to visit patients in their homes while treating their healthcare needs allows for an overall better patient-centered experience. This is one of the main reasons why I chose to work in this field of medicine. I thoroughly enjoy bringing healthcare to the home where patients can be at ease while in the comfort of their own surroundings. I look forward to caring for you, your family, and your loved ones to meet your medical needs.',
    edu: 'Rosalind Franklin University of Medicine and Science - MS Physician Assistant Studies - 2021',
    edu2: 'University of Utah - BS Communication, Business Administration Minor, Honors College',
    interest1: 'Member of the American Academy of Physician Assistants',
    interest2: 'Member of the Utah Academy of Physician Assistants',
    interest3: 'Level 1 Alpine Ski Instructor',
    interest4: 'Enjoys traveling, hiking, biking, climbing, skiing, dog walking, and baking',
    profileImage: CourtneyProfile,
    info1: 'Jenna Hughes',
    info2: '(801) 485-5055 ext. 1',
    info3: <Email href="mailto:jenna@housecalldoctorsut.com">Jenna@housecalldoctorsut.com</Email>,
    info4: 'Weston Unice',
    info5: '(801) 485-5055 ext. 17',
    info6: <Email href="mailto:Weston@housecalldoctorsut.com">Weston@housecalldoctorsut.com</Email>,
    info7: '(801) 241-0255'
  }
]


export default profiles;
