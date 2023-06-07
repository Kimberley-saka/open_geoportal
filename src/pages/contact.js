import './styling/contact-us.css';
import twittersvg from './twittersvg.svg';
import emailsvg from './emailsvg.svg';
import phonesvg from './phonesvg.svg'
import linkedinsvg from './linkedinsvg.svg';

export default function Contact(){

  return(
    <div className="contact-us">
      <div className='contents'>
        <p>
          Get in touch
        </p>
        <div className='email-container'>
          <img src={emailsvg} alt='email'
        className='email-address'/>
        </div>

        <div className='email-container'>
          <img src={phonesvg} alt='email'
        className='email-address'/>
        </div>

        <div className='email-container'>
          <img src={linkedinsvg} alt='email'
        className='email-address'/>
        </div>

        <div className='email-container'>
          <img src={twittersvg}
           alt='email'
        className='email-address'/>
        </div>

      </div>
        
    </div>
    );
}