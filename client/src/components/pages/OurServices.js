import React, { Component } from 'react';
import { Image, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import HCDpageDivider from '../../images/HCDpageDivider.jpg';


const Email = Styled.a`
  color: black;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
  }
`

class OurServices extends Component {

  componentDidMount() {
    document.title='Our Services'
  }

  render() {
    return(
      <>
        <h1 className='pageTitleReader' aria-label="Our Services page">Our Services</h1>
        <Image id='image-divider' src={HCDpageDivider} alt='image used to divide the top navbar from the rest of page. Shows staff working at conference table.' />
        <div id='mainCharacterOurServices'>

          <h2 className='servicesTitle'>PRIMARY CARE SERVICES</h2>
          <Divider />
          <div className='servicesSubTextContainer'>
            <p className='servicesSubText'>
              House Call Doctors has been providing primary care services to patients in assisted livings, group homes, and individual homes since 2004.<br />Our providers specialize in geriatrics, hospice and palliative care, dementia, and caring for disabled adults in the group home setting.<br />We are dedicated to our patients and strive to provide the most comprehensive and compassionate patient care.<br />We work with a number of companies that provide services in the home.
            </p>
            <p className='servicesPointsTitle'>These services include but are not limited to:</p>
            <div id='servicesPointsContainer'>
              <p className='servicesPointText'>• X-ray</p>
              <p className='servicesPointText'>• Ultrasound</p>
              <p className='servicesPointText'>• Sleep Studies</p>
              <p className='servicesPointText'>• EEG/EKG/Echocardiogram</p>
              <p className='servicesPointText'>• Eye Exams</p>
              <p className='servicesPointText'>• Bone Density Screening</p>
              <p className='servicesPointText'>• Bloodwork</p>
              <p className='servicesPointText'>• Podiatry</p>
              <p className='servicesPointText'>• Talk Therapy</p>
              <p className='servicesPointText'>• Home Health, Hospice, and much more.</p>
            </div>
            <br />
            <p className='servicesPointsTitle'><b>Please contact our office to schedule an appointment!</b></p>
          </div>

          <h2 className='servicesTitle'>WEIGHT LOSS</h2>
          <Divider />
          <div className='servicesSubTextContainer'>
            <p className='servicesSubText'>What is Semaglutide and How Does it Work?</p>
            <ul id='weightListContainer'>
              <li className='weightListText'>Semaglutide is a prescription medication that is used to help with weight loss in adults who are overweight or obese.</li>
              <li className='weightListText'>It works by mimicking hormones that your body naturally produces called incretin hormones.  </li>
              <li className='weightListText'>Incretin hormones are released by the small intestine and signal the brain, GI system, and other body systems that the body has consumed food and is ready to be metabolized.  This creates a feeling of satiety (or feeling “full”) </li>
              <li className='weightListText'>Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist. It works by mimicking the action of an incretin hormone called GLP-1, which is naturally produced by the body. GLP-1 helps to regulate blood sugar levels and reduce appetite.</li>
              <li className='weightListText'>GLP-1’s are different from previous classes of prescription weight loss medications because they work on underlying metabolic pathways to help support weight loss.  </li>
              <li className='weightListText'>Semaglutide is given as a once-weekly injection, and it works by helping to control hunger and reduce the amount of food that a person eats. In clinical trials, patients taking Semaglutide lost significantly more weight than those who were given a placebo.</li>
              <li className='weightListText'>It is important to note that Semaglutide should not be a substitute for healthy lifestyle changes, such as diet and exercise, and it should only be used under the guidance of a healthcare professional. It may also cause side effects, so it is important to discuss the risks and benefits with your doctor before starting treatment.</li>
            </ul>
            <Link to={'/weight-loss'} id='weightLossButton'>For more info</Link>
          </div>

          <h2 className='servicesTitle'>IN HOME ASSESSMENT SERVICES</h2>
          <Divider />
          <div className='servicesSubTextContainer'>
            <p className='servicesSubText'>We are currently scheduling 2023 In-Home Assessments for Molina Healthcare, SelectHealth, Health Choice Generations, and University of Utah Health.<br /><br />Please contact our scheduling department to schedule your free in-home exam!  Dial 801-485-5055, press option 2, then: <br /><b>Sienna: opt 2, Daisy: opt 3, Jackie: opt 4, Mary: opt 5, Cinthia: opt 6, Bailey: opt 7, Sharlee: opt 8, Jeanne: opt 10</b></p>
            <p className='servicesSubText'>Since 2012 House Call Doctors has worked with numerous health plans to provide convenient, annual wellness check-ups in the home.</p>
            <p className='servicesSubText'>These visits are requested by your insurance company to aid them in updating member information and ensuring all benefits are being utilized.</p>
            <p className='servicesSubText'>During these visits our skilled and professional provider will review your diagnosis history and medications, recommend preventive screenings, take basic vital signs, and perform some point-of-care testing.</p>
            <p className='servicesSubText'>There is <b>no fee</b> for these visits.</p>
            <p className='servicesSubText'>Your eligibility is determined by your health plan.</p>
            <p className='servicesSubText'>If you feel you are eligible for an in-home wellness check-up please contact your health plan.</p>
            <p className='servicesSubText'>For any questions regarding in-home assessments, please contact Emma Eakland at (801) 485-5055 or <Email href="mailto:Emma@housecalldoctorsut.com">Emma@housecalldoctorsut.com</Email>.</p>
          </div>

          <h2 className='servicesTitle'>IN-OFFICE VISITS</h2>
          <Divider />
          <div className='servicesSubTextContainer'>
            <p className='servicesSubText'>Due to interest from families, friends, caregivers, and the community, House Call Doctors is now offering primary care visits to non-homebound patients, age 18+, in our office! </p>
            <p className='servicesPointsTitle'>Services We Can Provide:</p>
            <div id='servicesPointsContainer'>
              <p className='servicesPointText'>• Primary Care Visits</p>
              <p className='servicesPointText'>• Physical Exams (excluding Pap Smears)</p>
              <p className='servicesPointText'>• Management of Chronic Conditions</p>
              <p className='servicesPointText'>• Medication Refills</p>
              <p className='servicesPointText'>• Bloodwork</p>
              <p className='servicesPointText'>• Ear Lavage</p>
            </div>
            <p className='servicesSubText'>We see patients for a variety of reasons.  If you have a question or concern that you would like to have addressed that isn’t listed above, please contact our office. </p>
            <div id='insuranceListContainer'>
              <div id='insuranceList'>
                <ul>
                  <li className='insurancePlan'>AARP Medicare Complete (now OptumCare)</li>
                  <li className='insurancePlan'>Aetna Medicare HMO/PPO, Aetna Commercial, POS, PPO, EPO</li>
                  <li className='insurancePlan'>Altius Advantra</li>
                  <li className='insurancePlan'>American Health Advantage of Utah - Medicare plan</li>
                  <li className='insurancePlan'>Blue Cross Blue Shield (if pt has Regence, please see Regence BCBS UT)</li>
                  <li className='insurancePlan'>BCBS FEP (Federal Employee Plan)</li>
                  <li className='insurancePlan'>BridgeSpan Health Company (affiliate of Regence)</li>
                  <li className='insurancePlan'>Bright Health - Commercial, Medicare, Employer Plan</li>
                  <li className='insurancePlan'>CHAMPVA</li>
                  <li className='insurancePlan'>Cigna - Medicare, HealthSprings (Medicare), PPO, Open Access Plus (NOT LocalPlus)</li>
                  <li className='insurancePlan'>Coventry Medicare Advantage</li>
                  <li className='insurancePlan'>DMBA (not for Harper, Shepherd, Nay, Gwen-bill under Cacciamani)</li>
                  <li className='insurancePlan'>EMI (not for Harper, Shepherd, Nay, Gwen-bill under Cacciamani)</li>
                  <li className='insurancePlan'>Health Choice Generations (Steward Health Choice) - Medicare</li>
                  <li className='insurancePlan'>Health Choice UT (Steward Health Choice) - Medicaid</li>
                  <li className='insurancePlan'>Humana Medicare HMO/PPO/FFA, Choice Care PPO, Gold Choice, Gold Plus</li>
                  <li className='insurancePlan'>Medicare of Utah</li>
                  <li className='insurancePlan'>Medicare RailRoad</li>
                  <li className='insurancePlan'>Molina Medicare/Advantage/Healthy Advantage/Complete Care/Options, Molina Marketplace, Molina Medicaid</li>
                  <li className='insurancePlan'>OptumCare UT (formerly AARP Medicare Complete or Optum Medical Network)</li>
                  <li className='insurancePlan'>PEHP: Par Preferred, Advantage, Summit, Capital Network</li>
                  <li className='insurancePlan'>Regence BCBS Utah: Participating, Blue Options, Preferred Value Care, MedAdvantage PPO, FEP</li>
                  <li className='insurancePlan'>Select Health: SelectAdvantage, SelectChoice, SelectMed, SelectShare, Select Value, Community Care</li>
                  <li className='insurancePlan'>Steward Health - Health Choice UT Medicaid or Health Choice Generations (Medicare) -> Now Health Choice</li>
                  <li className='insurancePlan'>TriCare for Life (We do not take VA, our services aren’t covered)</li>
                  <li className='insurancePlan'>UMR</li>
                  <li className='insurancePlan'>United Healthcare – all lines of business</li>
                  <li className='insurancePlan'>University of Utah - Advantage U, Healthy U, Marketplace, Healthy Preferred Utah (Bronze, HSA, limited, silver, gold, etc); Advantage U Medicare, U Health Plans (Individual/Family Marketplace)</li>
                  <li className='insurancePlan'>Medicaid of Utah</li>
                  <li className='insurancePlan'>Medicare Advantage Plans:</li>
                  <li className='subInsurancePlan'>Altius Advantra</li>
                  <li className='subInsurancePlan'>Aetna Medicare</li>
                  <li className='subInsurancePlan'>American Health Advantage of Utah</li>
                  <li className='subInsurancePlan'>Bright Health Medicare</li>
                  <li className='subInsurancePlan'>Cigna HealthSprings/Medicare</li>
                  <li className='subInsurancePlan'>Coventry Medicare Advantage</li>
                  <li className='subInsurancePlan'>Molina Advantage/Options</li>
                  <li className='subInsurancePlan'>Regence MedAdvantage</li>
                  <li className='subInsurancePlan'>Humana Medicare</li>
                  <li className='subInsurancePlan'>OptumCare</li>
                  <li className='subInsurancePlan'>Select Health Medicare</li>
                  <li className='insurancePlan'>Medicaid Managed Care plans:</li>
                  <li className='subInsurancePlan'>HealthChoice UT</li>
                  <li className='subInsurancePlan'>Molina Medicaid</li>
                  <li className='subInsurancePlan'>Select Health Community Care</li>
                  <li className='subInsurancePlan'>University of Utah Healthy U</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id='servicesWhiteSpace' />
      </>
    )
  }
};


export default OurServices;
