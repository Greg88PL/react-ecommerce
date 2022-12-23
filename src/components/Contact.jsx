import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l5aba4z",
        "template_o72kg8p",
        form.current,
        "Nv6KiaSjU-C5c6uC2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src="assets/contact.png"
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <form ref={form} onSubmit={sendEmail}>
              <div class="mb-3">
                <label for="fullName">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  placeholder="Jan Kowalski"
                  name="user_name"
                />
              </div>
              <div class="mb-3">
                <label for="email">E-mail address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  name="user_email"
                />
              </div>
              <div class="mb-3">
                <label for="textarea">Write Your Message</label>
                <textarea
                  class="form-control"
                  id="textarea"
                  rows="5"
                  name="message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-dark" value="Send">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
