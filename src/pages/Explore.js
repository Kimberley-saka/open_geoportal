import './styling/explore-style.css';

export default function Explore(){

    return(
        <div className="explore">
          <p className='title'>Explore available datasets</p>
          <div className='map-categories'>
            <div className='admin'>
              <a href='/admin-boundaries' >
              Administration Boundaries
              </a>
              
            </div>

            <div className='admin'>
              Transportation
            </div>

            <div className='admin'>
              Health 
            </div>


            <div className='admin'>
              Water
            </div>
          </div>        
        </div>
    );
}