import './styling/contact-us.css';
import twittersvg from './twittersvg.svg';
import emailsvg from './emailsvg.svg';
import phonesvg from './phonesvg.svg'
import linkedinsvg from './linkedinsvg.svg';

export default function Contact(){

  return(
    <div className="contact-us">
      <div className='contents'>
        <p className='title-text'>
          Get in touch
        </p>
        <div className='email-container'>
          <img src={emailsvg} alt='email'/>
          <p className='email'>kimberleysaka@gmail</p>
        </div>

        <div className='phone-container'>
          <img src={phonesvg} alt='phone number'
          />
          <p className='phone-number'>+265 994 368 987</p>
        </div>

        <div className='linkedin-container'>
  
          <img src={linkedinsvg} alt='LinkedIn'/>
          <p className='linkedin-username'>Kimberley Saka</p>
          
          
        </div>

        <div className='twitter-container'>
          <img src={twittersvg}
           alt='Twitter'/>
           <p className='twitter-account'> &#64;SaberMrypo </p>
        </div>

      </div>
        
    </div>
    );
}