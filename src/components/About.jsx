import React from "react";

const About = () => {
  return (
    <>
      <div class="border-0">
        <img
          class="card-img"
          src="assets/about.jpg"
          alt="About"
          height="450px"
        />
        <div className="container my-5 py-5 mt-0">
          <div className="card-body text-center">
            <h1 className="display-6 fw-bolder">About us</h1>
            <p className="card-text fs-4 lead text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="card-body text-center ">
            <h1 className="display-6 mt-5 fw-bolder text-center">Visit us</h1>

            <p className="card-text fs-4 text-justify">
              Greg Store
              <br />
              449 J. Alcantara Street
              <br />
              Cebu, Filipiny
            </p>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.518416069941!2d123.88878147465371!3d10.30033196779564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99957d3758de9%3A0x87709ed0d8c557f9!2sGreg%20Store!5e0!3m2!1spl!2spl!4v1670333982147!5m2!1spl!2spl"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
