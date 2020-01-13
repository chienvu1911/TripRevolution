import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            contactData: {
                name: '',
                email: ''
            }
        }
    }
    
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let { contactData } = this.state;
        contactData[name] = value;
        
        this.setState({
            contactData
        });
    }

    onHandleContactMe = (event) => {
        // submit form without reload page
        event.preventDefault(); 
        this.setState({
            isRedirect: true
        })       
    }

    render() {
        if(this.state.isRedirect) {
            return <Redirect to="/" />
        }
        return (
            <>
                <section className="page-section" id="contact">
                    <div className="container">
                    {/* Contact Section Heading */}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    {/* Contact Section Form */}
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                        <form name="sentMessage" id="contactForm" noValidate="novalidate">
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Name</label>
                                <input className="form-control" id="name" type="text" placeholder="Name" required="required" name="name" 
                                       data-validation-required-message="Please enter your name."
                                       onChange={this.handleInputChange} />
                                <p className="help-block text-danger" />
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Email Address</label>
                                <input onChange={this.handleInputChange} className="form-control" id="email" type="email" name="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger" />
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Phone Number</label>
                                <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger" />
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Message</label>
                                <textarea className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." aria-invalid="false" defaultValue={""} />
                                <p className="help-block text-danger" />
                            </div>
                            </div>
                            <br />
                            <div id="success" />
                            <div className="form-group">
                                <button type="button" className="btn btn-primary btn-xl" onClick={(e) => this.onHandleContactMe(e)}>
                                    Send
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ContactForm;