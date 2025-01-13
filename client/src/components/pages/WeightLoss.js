import React, { Component } from 'react';
// import HCDpageDivider from '../../images/HCDpageDivider.jpg';
import HCDpageDivider2 from '../../images/HCD_group_divider.jpg';
import {
    Image,
    Divider,
    Icon
} from 'semantic-ui-react';
import KarenBefore from '../../images/karenbefore.jpg';
import KarenAfter from '../../images/karenafter.jpeg';



class WeightLoss extends Component {
    componentDidMount() {
        document.title='Weight Loss'
    }

    render() {
        return(
            <>
                <h1 className='pageTitleReader' aria-label="Weight Loss">Weight Loss</h1>
                <Image id='image-divider' src={HCDpageDivider2} alt='image used to divide the top navbar from the rest of page. Shows staff working at conference table.' />


                <div id='mainCharacterWeightLoss'>
                <a href='tel:8014855055' className='iconButton phoneButton'>
                    <Icon className='phone square huge color' />
                </a>
                    <h2 className='weightTitle'>MEDICATION ASSISTED WEIGHT LOSS</h2>
                    <Divider />

                    <div id='weightBeforeAfterSection'>
                        <p className='beforeAfterTitle'>Karen, 112lbs lost</p>
                        <div id='weightImageContainer'>
                            <div className='beforeAfterContainer'>
                                <Image src={KarenBefore} className='beforeAfterPhoto' alt='A patient before' />
                                <p className='beforeAfterText'>Before</p>
                            </div>
                            <div className='beforeAfterContainer'>
                                <Image src={KarenAfter} className='beforeAfterPhoto' alt='A patient after' />
                                <p className='beforeAfterText'>After</p>
                            </div>
                        </div>
                    </div>
                            
                    <div className='weightSubTextContainer'>
                            <p className='weightSubText'>What is Semaglutide and How Does it Work?</p>
                            <div id='weightTopSection'>
                            <ul className='listItemContainer'>
                                <li className='servicesSubText'>Semaglutide is a prescription medication that is used to help with weight loss in adults who are overweight or obese.</li>
                                <li className='servicesSubText'>It works by mimicking hormones that your body naturally produces called incretin hormones.</li>
                                <li className='servicesSubText'>Incretin hormones are released by the small intestine and signal the brain, GI system, and other body systems that the body has consumed food and is ready to be metabolized.  This creates a feeling of satiety (or feeling “full”).</li>
                                <li className='servicesSubText'>Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist. It works by mimicking the action of an incretin hormone called GLP-1, which is naturally produced by the body. GLP-1 helps to regulate blood sugar levels and reduce appetite.</li>
                                <li className='servicesSubText'>GLP-1’s are different from previous classes of prescription weight loss medications because they work on underlying metabolic pathways to help support weight loss.</li>
                                <li className='servicesSubText'>Semaglutide is given as a once-weekly injection, and it works by helping to control hunger and reduce the amount of food that a person eats. In clinical trials, patients taking Semaglutide lost significantly more weight than those who were given a placebo.</li>
                                <li className='servicesSubText'>It is important to note that Semaglutide should not be a substitute for healthy lifestyle changes, such as diet and exercise, and it should only be used under the guidance of a healthcare professional. It may also cause side effects, so it is important to discuss the risks and benefits with your doctor before starting treatment.</li>
                            </ul>
                            
                        </div>

                        <p className='weightSubText'>What is Tirzepatide and How Does it Work?</p>
                        <ul id='listItemContainer'>
                            <li className='servicesSubText'>Tizepatide works much like Semaglutide, however, it works on both GLP-1 and GIP receptors.</li>
                            <li className='servicesSubText'>The GIP receptor (glucose-dependent insulinotropic polypeptide) is a protein found on the surface of certain cells in the body.  This receptor is activated by the hormone GIP which is released by the small intestine in response to the presence of food.</li>
                            <li className='servicesSubText'>Clinical trials have shown that Tirzepatide can lead to significant weight loss in people with type 2 diabetes and those without diabetes.</li>
                            <li className='weightSubListText'>In a trial including patients with type 2 diabetes, those who took Tirzepatide lost an average of 12.4% of their body weight over 72 weeks, compared to 2.4% for those who received a placebo.</li>
                            <li className='weightSubListText'>In another trial, people without diabetes who took Tirzepatide lost an average of 11.5% of their body weight over 26 weeks.</li>
                        </ul>
                        <p className='weightSubText'>It is important to note that Semaglutide or Tirzepatide  should not be a substitute for healthy lifestyle changes, such as diet and exercise, and it should only be used under the guidance of a healthcare professional. It may also cause side effects, so it is important to discuss the risks and benefits with your doctor before starting treatment.</p>

                        <p className='weightSubText'>Who Qualifies?</p>
                        <ul className='weightList'>
                            <li className='servicesSubText'>Patients Must:</li>
                            <li className='weightSubListText'>Have a BMI of 30 or greater</li>
                            <li className='weightSubListText'>OR have a BMI of 27-30 with a weight related complication, such as hyperlipidemia, hypertension, chronic low back pain, etc.</li>
                            <li className='weightSubListText'>Not be pregnant, nursing or planning to become pregnant</li>
                            <li className='weightSubListText'>Not have a personal or family history of Medullary thyroid cancer (MTC)</li>
                            <li className='weightSubListText'>Not have a personal history of Multiple Endocrine Neoplasia</li>
                        </ul>
                        <p className='weightSubText'>How Much Does it Cost?</p>
                        <ul className='weightList'>
                            <li className='servicesSubText'>If you do not have a diagnosis of diabetes, or if you have diabetes and have been unable to get the medication covered by your insurance, we ARE able to obtain the medication for you through a compounding pharmacy. However you will need to pay cash for your medication monthly by credit/debit card/HSA account.</li>
                            <li className='servicesSubText'>While FDA approved for weight loss, if you DO NOT have a diagnosis of diabetes, this medically assisted approach will NOT be covered by your insurance and you must pay cash.</li>
                            <li className='servicesSubText'>Cash price for Semaglutide:</li>
                            <li className='weightSubListText'>$250.00/patient for the 1st month.</li>
                            <li className='weightSubListText'>$300.00/patient for the 2nd month.</li>
                            <li className='weightSubListText'>$350.00/patient for each subsequent month.</li>
                        </ul>
                        <p className='weightSubText'>(This is a significant reduction in the retail price you would pay at a local retail pharmacy. The retail range for a month's supply of Semaglutide is roughly $879.60 - $1070.49).</p>
                        <p className='weightSubText'>Cash price for Tirzepatide:</p>
                        <ul className='weightList'>
                            <li className='weightSubListText'>$350.00/patient for the 1st-3rd months.</li>
                            <li className='weightSubListText'>$400.00/patient for the 4th month.</li>
                            <li className='weightSubListText'>$450.00/patient for the 5th month.</li>
                            <li className='weightSubListText'>$500.00/patient for any additional months.</li>
                        </ul>
                        <p className='weightSubText'>(This is a significant reduction in the retail price you would pay at a local retail pharmacy. The retail range for a month's supply of Tirzepatide is roughly $944.31 - $1169.00 if using a GoodRx discount card).</p>
                        <p className='weightSubText'>What To Expect?</p>
                        <ul className='weightList'>
                            <li className='servicesSubText'>Semaglutide and Tirzepatide are an injection administered under the skin once weekly.</li>
                            <li className='servicesSubText'>Our highly skilled clinicians will work closely with you to ensure you feel comfortable administering these injections on your own.</li>
                            <li className='servicesSubText'>Expect to see our clinician for a follow up appointment once per month. </li>
                            <li className='servicesSubText'>Potential side effects of treatment with Semaglutide or Tirzepatide:</li>
                        </ul>
                        <ul className='weightList columnList'>
                            <li className='weightSubListText'>Nausea</li>
                            <li className='weightSubListText'>Vomiting</li>
                            <li className='weightSubListText'>Belching</li>
                            <li className='weightSubListText'>Diarrhea</li>
                            <li className='weightSubListText'>Constipation</li>
                            <li className='weightSubListText'>Stomach Pain</li>
                            <li className='weightSubListText'>Headache</li>
                            <li className='weightSubListText'>Fatigue</li>
                            <li className='weightSubListText'>Dizziness</li>
                            <li className='weightSubListText'>Hypoglycemia</li>
                        </ul>
                        <ul className='weightList'>
                            <li className='servicesSubText'>Tips for managing potential side effects:</li>

                        </ul>
                        <ul className='weightList columnList'>
                            <li className='weightSubListText'>Eat bland, low-fat foods like cracker, toast, and rice.</li>
                            <li className='weightSubListText'>Eat foods that contain water, like soups and gelatin.</li>
                            <li className='weightSubListText'>Eat small portions, spaced throughout the day.</li>
                            <li className='weightSubListText'>Avoid eating within 2 hours of bedtime.</li>
                            <li className='weightSubListText'>Avoid large meals 1-2 days prior to your injection.</li>
                            <li className='weightSubListText'>Avoid fried, greasy, or sweet foods.</li>
                            <li className='weightSubListText'>Avoid laying down after you eat.</li>
                            <li className='weightSubListText'>Go outside for fresh air.</li>
                            <li className='weightSubListText'>Eat more slowly.</li>
                            <li className='weightSubListText'>Stop eating when you feel full.</li>
                            <li className='weightSubListText'>Drink clear or ice-cold drinks.</li>
                            <li className='weightSubListText'>Pepto Bismol or Prevacid can also be effective at managing side effects.</li>
                        </ul>
                        <h3 className='weightContactText'><a href='/contact-us#image-divider' id='weightContactButton'>Contact us</a> to schedule.</h3>
                    </div>
                </div>
                <div id='weightWhiteSpace' />
            </>
        )
    }
}

export default WeightLoss;