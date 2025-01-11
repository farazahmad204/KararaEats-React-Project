import React , { useEffect } from 'react'

export default function Slideshow() {

  // useEffect(() => {
  //   showalert("This is called from slideshow", "success");
  // }, [showalert]); // Run only when the component mounts (because showalert won't change)



  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="container">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="1000"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                  
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="images/karara_eats_banner_1.png"
                    className="d-block w-100 blurred-bg"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="images/karara_eats_banner_1.png"
                    className="d-block w-100 blurred-bg"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="images/karara_eats_banner_1.png"
                    className="d-block w-100 blurred-bg"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
