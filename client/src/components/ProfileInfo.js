import React from 'react';
import Styled from 'styled-components';
import Mark from '../images/Mark.jpg';
import Trenaisa from '../images/Trenaisa.jpg';
import Likio from '../images/Likio.jpeg';

import MarkProfile from '../images/Mark-profile.png';
import TrenaisaProfile from '../images/Trenaisa-profile.png';
import LikioProfile from '../images/Likio-profile.png';

const Email = Styled.a`
  color: #AF3120;
  transition: all 200ms ease-in-out;
  :hover {
    color: black;
  }
`


const profiles = [
  {
    name: 'Mark Cacciamani, MD',
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
    interest5: 'Jiu Jitsu',
    interest6: 'Chess',
    interest7: 'Traveling',
    interest8: 'Engineering',
    profileImage: MarkProfile,
    officeName: 'Lara Vanderlaan',
    officePhone: '(801) 485-5055 ext 3',
    officeEmail: <Email href="mailto:lara@housecalldoctorsut.com">Lara@housecalldoctorsut.com</Email>,
    clinicalName: 'Karen Singletary',
    clinicalPhone: '(801) 485-5055 ext 7',
    clinicalEmail: <Email href="mailto:Karen@housecalldoctorsut.com">Karen@housecalldoctorsut.com</Email>,
    pager: '(801) 241-4483'
  },
  {
    name: 'Trenaisa Nay, GNP',
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
    officeName: 'Jamie Gardner',
    officePhone: '(801) 485-5055 ext 4',
    officeEmail: <Email href="mailto:jamie@housecalldoctorsut.com">Jamie@housecalldoctorsut.com</Email>,
    clinicalName: 'Tonya Ganigan',
    clinicalPhone: '(801) 485-5055',
    clinicalEmail: <Email href="mailto:tonya@housecalldoctorsut.com">Tonya@housecalldoctorsut.com</Email>,
    pager: '(801) 241-0484'
  },
  {
    name: 'Likio Pope, PA-C',
    linkName: 'likio',
    shortName: 'Likio',
    image: Likio,
    shortBio: "It's all about the patients. Whether they visit me in the office or I go to their homes, I find it best to meet them where they need to be. Working with House Call Doctors...",
    bio: "It's all about the patients. Whether they visit me in the office or I go to their homes, I find it best to meet them where they need to be. Working with House Call Doctors allows me to do just that. Seeing patients in the office helps me understand their medical needs, while home visits provide insight into unique challenges that must be addressed to access medical care effectively.",
    edu: 'Bachelor of Science/ Exercise and Sports Science August 2018',
    edu2: 'Master of Physician Assistant Studies from Rocky Mountain University of Health Professions, Provo, Ut August 2023',
    interest1: 'Member of Utah Academy of Physician Assistants',
    interest2: 'Special training in Hormone Replacement Therapy',
    interest3: 'Weight Loss Management',
    interest4: 'Toxins',
    interest5: 'Loves to educate/uplift Polynesian Community',
    interest6: 'Enjoys working out, sports, beaches, and family time',
    profileImage: LikioProfile,
    officeName: 'Lara Vanderlaan',
    officePhone: '(801) 485-5055 ext 3',
    officeEmail: <Email href="mailto:lara@housecalldoctorsut.com">Lara@housecalldoctorsut.com</Email>,
    clinicalName: 'Sandra Barlow',
    clinicalPhone: '(801) 485-5055',
    clinicalEmail: <Email href="mailto:sandrab@housecalldoctorsut.com">Sandrab@housecalldoctorsut.com</Email>,
    pager: '(801) 241-0255'
  }
]


export default profiles;
