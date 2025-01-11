import React , { useEffect } from 'react'


export default function About() {



  return (
        <section className="about-section text-start">
          <div className="container mt-4 bg-light">
            <div className="row">
              {/* Text Content Section */}
              <div className="col-lg-6 col-md-12">
                <div className="text-content">
                  <h1 className=" text-center my-5"><span className='MainHeadline' style={{ color: '#3f3d3d' }}>About Us</span></h1>
                  <p>
                    Welcome to <strong className="text-danger">KararaEats</strong>, where the vibrant flavors of South
                    Asian cuisine come to life! Nestled in the heart of [Location], we are passionate about bringing the authentic
                    taste of desi dishes to our community.
                    Whether you're here for a family gathering, a special celebration, or simply to indulge in
                    your favorite desi comfort food, we strive to create a warm and welcoming atmosphere where
                    everyone feels like family.
                  </p>
    
                  <h2 style={{ color: '#3f3d3d' }}>Why Choose Us?</h2>
                  <p>
                    At <strong className="text-danger">KararaEats</strong>, we believe that food is more than just a meal; it's an
                    experience that connects people and celebrates heritage. Our menu features a carefully
                    curated selection of traditional dishes, including our signature <strong className="text-warning">Karachi Biryani</strong>—a fragrant
                    and spicy rice dish layered with marinated meat and infused with aromatic spices.
                    Our chefs, hailing from diverse culinary backgrounds, are dedicated to using only the
                    freshest ingredients and traditional cooking techniques. From the savory delights of <strong className="text-info">Nihari</strong> and
                    <strong className="text-info">Karahi</strong> to the sweet indulgence of <strong className="text-info">Gulab Jamun</strong> and <strong className="text-info">Jalebi</strong>,
                    each dish is crafted with love and care, ensuring an authentic taste that feels like home.
                  </p>
    
                  <h2 style={{ color: '#3f3d3d' }}>What We Offer</h2>
                  <ul className="list-unstyled">
                    <li>
                      <strong className="animated fadeInUp delay-1s">🍽️ Catering</strong>
                      <p>
                        Whether it's a wedding, birthday, or corporate event, our catering services are tailored to
                        make your special occasions unforgettable. We offer customizable menus to suit your needs, ensuring every guest experiences the best of Pakistani cuisine.
                      </p>
                    </li>
                    <li>
                      <strong className="animated fadeInUp delay-2s">🍽️ Tiffin Services</strong>
                      <p>
                        For those who crave homemade flavors on a daily basis, our tiffin service brings you fresh, delicious meals straight to your doorstep.
                        Enjoy the convenience of healthy, hearty lunches without the hassle of cooking.
                      </p>
                    </li>
                    <li>
                      <strong className="animated fadeInUp delay-3s">🍽️ Authentic Pakistani Food</strong>
                      <p>
                        Indulge in a wide range of dishes, from aromatic biryanis and succulent kebabs to flavorful curries and delightful desserts. Each bite tells a story, inspired by the rich culinary heritage of Pakistan.
                      </p>
                    </li>
                    <li>
                      <strong className="animated fadeInUp delay-4s">🍽️ Registered Kitchen</strong>
                      <p>
                        Safety and quality are our top priorities. Our fully registered kitchen meets all health and safety standards, ensuring that every meal you enjoy is not only delicious but also prepared with the utmost care and hygiene.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Image Section */}
              <div className="col-lg-6 col-md-12 my-4">
                <img src="/images/logo.png" className="d-block w-100 mb-3 rounded" alt="KararaEats Logo" />
                <img src="/images/chicken_biriyani_product_image.png" className="d-block w-100 rounded" alt="Chicken Biryani" />
              </div>
            </div>
          </div>
        </section>
  )
}
