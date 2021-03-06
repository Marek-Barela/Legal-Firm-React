import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionHeader from '../section-header-left/header';
import styles from './consultation.module.css';

class Consultation extends Component {
  state = {
    user: "",
    email: "",
    subject: 1,
    message: "",
    formErrors: {
      user: "",
      email: "",
      message: ""
    },
    displaySuccess: false
  }

  isEmpty = (str) => {
    return (!str || 0 === str.length);
  }

  validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  checkValidation() {
    const { user, email, message } = this.state;
    const errors = {};
    if (this.isEmpty(user)) {
      errors.user = "Name field is required"
    }

    if (!this.validateEmail(email)) {
      errors.email = "Please enter valid email"
    }

    if (this.isEmpty(message)) {
      errors.message = "Message field is required"
    }

    return errors;
  }


  onHandleSubmit(e) {
    e.preventDefault();
    const errors = this.checkValidation();
    this.setState({
      formErrors: errors,
      displaySuccess: false
    })
    if (!Object.keys(errors).length) {
      this.sendMessage()
    }
  }

  sendMessage() {
    this.setState({
      displaySuccess: true
    })
    /**
     * Sent message to server here
     */
  }

  onHandleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const {
      wrapper,
      formContainer,
      imageContainer,
      form,
      inputContainer,
      inputWrapper,
      inputWrapperSecond,
      textarea,
      error,
      textareaSpan,
      successMessage
    } = styles;
    const { user, email, subject, message, formErrors, displaySuccess } = this.state;
    const userTextError = formErrors.user;
    const emailTextError = formErrors.email;
    const messageTextError = formErrors.message;
    return (
      <section id="consultation">
        <div className={wrapper}>
          <ScrollAnimation
            animateIn='fadeInLeft'
            className={formContainer}
            initiallyVisible={false}
            animateOnce={true}
          >
            <SectionHeader
              header="Free Consultation"
              paragraph="Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod tempor incidide labeore dolore magna."
            />
            <form onSubmit={(e) => this.onHandleSubmit(e)} className={form} noValidate>
              <div className={inputContainer}>
                <div className={inputWrapper}>
                  <label for="name">name</label>
                  <input
                    className={userTextError ? error : ""}
                    id="name"
                    name="user"
                    type="name"
                    placeholder="Your Name"
                    onChange={(e) => this.onHandleChange(e)}
                    value={user}
                  />
                  <span>{userTextError}</span>
                </div>
                <div className={inputWrapperSecond}>
                  <label for="email">email</label>
                  <input
                    className={emailTextError ? error : ""}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    onChange={(e) => this.onHandleChange(e)}
                    value={email}
                  />
                  <span>{emailTextError}</span>
                </div>
              </div>
              <label for="subject">subject</label>
              <select
                name="subject"
                id="subject"
                onChange={(e) => this.onHandleChange(e)}
                value={subject}
              >
                <option value="1">Practive Area</option>
                <option value="2">Criminal Law</option>
                <option value="3">International Law</option>
                <option value="4">Financial Law</option>
              </select>
              <label for="textarea">message</label>
              <textarea
                className={messageTextError ? `${textarea}  ${error}` : textarea}
                id="textarea"
                name="message"
                placeholder="Your Message"
                onChange={(e) => this.onHandleChange(e)}
                value={message}
              />
              <span className={textareaSpan}>{messageTextError}</span>
              <button type="submit">send request</button>
            </form>
            {displaySuccess && <p className={successMessage}>your form successfully sent</p>}
          </ScrollAnimation>
          <div className={`${imageContainer} wow fadeInRight`}></div>
        </div>
      </section>
    )
  }
}
export default Consultation