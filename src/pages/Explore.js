import './styling/explore-style.css';

export default function Explore(){

    return(
        <div className="explore">
          <div className='map-categories'>
            <div className='admin'>
              Administration Boundaries
            </div>

            <div className='admin'>
              Transportation
            </div>

            <div className='admin'>
              <a href=''> Health </a>
            </div>


            <div className='admin'>
              Water
            </div>
          </div>        
        </div>
    );
}