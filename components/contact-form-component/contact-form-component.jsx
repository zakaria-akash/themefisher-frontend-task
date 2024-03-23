import React from "react";

import classes from "./contact-form-component.module.scss";

const ContactForm = () => {
  return (
    <div className="row w-100">
      <div className="col-md-4"></div>
      <div className={`col-md-8 ${classes.contactFormSection}`}>
        <div className="row">
          <div className={`col-md-12 ${classes.contactFormTitleCol}`}>
            <p className={classes.contactFormTitle}>Contact</p>
          </div>
        </div>
        <form method="post" className={classes.contactForm}>
          <div className={`form-group row`}>
            <div className="col-md-6 my-3">
              <label
                className={`${classes.inputFieldTitle} mb-2`}
                htmlFor="firstName"
              >
                First Name*
              </label>
              <input
                required
                name="firstName"
                id="firstName"
                type="text"
                className={`form-control ${classes.inputField}`}
              />
            </div>
            <div className="col-md-6 my-3">
              <label
                className={`${classes.inputFieldTitle} mb-2`}
                htmlFor="lastName"
              >
                Last Name*
              </label>
              <input
                required
                name="lastName"
                id="lastName"
                type="text"
                className={`form-control ${classes.inputField} px-0`}
              />
            </div>
          </div>

          <div className={`form-group row`}>
            <div className="col-md-6 my-3">
              <label
                className={`${classes.inputFieldTitle} mb-2`}
                htmlFor="email"
              >
                Email*
              </label>
              <input
                required
                name="email"
                id="email"
                type="email"
                className={`form-control ${classes.inputField} px-0`}
              />
            </div>
            <div className="col-md-6 my-3">
              <label
                className={`${classes.inputFieldTitle} mb-2`}
                htmlFor="phone"
              >
                Phone*
              </label>
              <input
                required
                name="phone"
                id="phone"
                type="tel"
                className={`form-control ${classes.inputField} px-0`}
              />
            </div>
          </div>

          <div className={`form-group row`}>
            <div className="col-md-12 my-3">
              <label
                className={`${classes.inputFieldTitle} mb-2`}
                htmlFor="message"
              >
                Message*
              </label>
              <textarea
                required
                name="message"
                id="message"
                type="text"
                rows={3}
                className={`form-control ${classes.inputField} px-0`}
              ></textarea>
            </div>
          </div>
          <div className={`form-group row`}>
            <div className="col-md-12 my-3">
              <button className={`${classes.submitdBtn}`}>
                <p className={classes.submitdBtnText}>Send Message</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
