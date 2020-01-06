import React from 'react';

class ContactPage extends React.Component{
    render() {
        return (
<body className="contact-body">
    <div className="container-fluid h-100">
        <div className="row h-100">
            <div className="col-lg-5 bg-full">
                <div className="left">
                    <div className="bg-blue">
                        <div className="image"></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 right">
                <h1 className="contact-us">Contact Us</h1>
                <form>
                    <div className="form">
                        <label for="full-name">
                            Full Name<span id="asterisk">*</span> 
                        </label>
                            <input type="text" id="full-name" name="full-name" placeholder="John Doe"required />
                        <label for="email-address">
                            Email Address<span id="asterisk">*</span>
                        </label>
                            <input type="email" id="email-address" name="email-address" placeholder="example@alterra.id" required />
                        <label for="phone-number">
                            Phone Number<span id="asterisk">*</span>
                        </label>
                            <input type="tel" id="phone-number" name="phone-number" placeholder="085554447900" required />
                        <label for="role">
                            Role
                        </label>
                        <select id="role" name="role">
                            <option value="role0" disabled selected>Selected...</option>
                            <option value="role1">Role 1</option>
                            <option value="role2">Role 2</option>
                            <option value="role3">Role 3</option>
                        </select>
                        <label for="message">
                            Message
                        </label>
                            <textarea id="message" name="message"></textarea>
                        <input type="submit" value="Submit" id="submit" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
    )
    }
}

export default ContactPage;