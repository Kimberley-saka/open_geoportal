import './styling/about_us.css'

export default function About(){

    return(
        <div className="about">
            <div className='content'>
              <p className='about-text'>
              About Us
              </p>

              <p className='description'>
              Welcome to our Geospatial Data Sharing Portal!
              </p>

              <p className='description'>
              Geospatial data plays a vital role in today's world, as it
              encompasses information tied to specific positions on Earth,
              represented by latitudes and longitudes. The sharing of this
              data is crucial as it enables rapid response to disasters,
              facilitates landcover change detection, and serves various
              other purposes.
              </p>

              <p className='description'>
              Our project aims to develop an open geospatial portal that
              empowers users to seamlessly share diverse types of spatial data.
              Whether it's vector files, raster data, or pre-made maps, our
              platform provides a user-friendly interface for sharing and
              accessing geospatial information. Check out our
              project repository &nbsp;
              <a href='https://github.com/Kimberley-saka/open_geoportal'
              target='_blank' rel='noreferrer'>
                here.
              </a>
              </p>
            </div>
            
        </div>
    );
}