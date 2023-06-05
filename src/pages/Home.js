import './styling/home-landing.css';
import { Link } from 'react-router-dom';

export default function Home(){

    return(
        <div className="landing">
            <div className='content'>
            <p>
            Open Geospatial Data Portal, discover geospatial
            datasets that suit your needs.
            </p>

            <Link to='/explore'>
            <button className='get-started-button'>Get Started</button>
            </Link>  
            </div>
              
           
        </div>
    );
}