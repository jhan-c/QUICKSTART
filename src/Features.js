import React from 'react';

const Features = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header">
          <h2>Features</h2>
          <p>Check out the great features we provide</p>
        </div>

        <div className="row feature-icons" data-aos="fade-up">
          <div className="col-xl-4 text-center" data-aos="fade-right">
            <img src="assets/img/features-1.png" className="img-fluid p-4" alt="Feature 1" />
          </div>

          <div className="col-xl-8 d-flex content">
            <div className="row align-self-center gy-4">
              <div className="col-md-6 icon-box" data-aos="fade-up">
                <i className="bi bi-receipt"></i>
                <div>
                  <h4>Corporis voluptates sit</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
              </div>

              <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-cube"></i>
                <div>
                  <h4>Ullamco laboris ladore pan</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>

              <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-images"></i>
                <div>
                  <h4>Labore consequatur</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
              </div>

              <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-shield"></i>
                <div>
                  <h4>Beatae veritatis</h4>
                  <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                </div>
              </div>

              <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-heart"></i>
                <div>
                  <h4>Molestiae dolor</h4>
                  <p>Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte</p>
                </div>
              </div>

              <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-gear"></i>
                <div>
                  <h4>Explicabo consectetur</h4>
                  <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;
