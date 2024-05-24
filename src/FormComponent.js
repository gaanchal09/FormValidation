import React from "react";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      firstNameError: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
      this
    );
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "firstName",
      "lastName",
      "username",
      "emailAddress",
      "password",
      "passwordConfirmation",
      "phoneno",
        "country",
        "city",
        "panno",
        "aadharno"
    ];
    let isValid = true;
    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    if (name === "firstName") isValid = this.validateFirstName();
    else if (name === "lastName") isValid = this.validateLastName();
    else if (name === "username") isValid = this.validateUsername();
    else if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "password") isValid = this.validatePassword();
    else if (name === "passwordConfirmation")
      isValid = this.validatePasswordConfirmation();
    else if (name === "phoneno") isValid = this.validatePhoneNo();
    else if (name === "country") isValid = this.validateCountry();
    else if (name === "city") isValid = this.validateCity();
    else if (name === "panno") isValid = this.validatePanNo();
    else if (name === "aadharno") isValid = this.validateAadharNo();
    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName;
    if (value.trim() === "") firstNameError = "First Name is required";

    this.setState({
      firstNameError
    });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName;
    if (value.trim() === "") lastNameError = "Last Name is required";

    this.setState({
      lastNameError
    });
    return lastNameError === "";
  }
  validateUsername() {
    let usernameError = "";
    const value = this.state.username;
    if (value.trim() === "") usernameError = "User Name is required";

    this.setState({
      usernameError
    });
    return usernameError === "";
  }
  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value))
      emailAddressError = "Email is not valid";

    this.setState({
      emailAddressError
    });
    return emailAddressError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({
      passwordError
    });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    let passwordConfirmationError = "";
    if (this.state.password !== this.state.passwordConfirmation)
      passwordConfirmationError = "Password does not match Confirmation";

    this.setState({
      passwordConfirmationError
    });
    return passwordConfirmationError === "";
  }
  validatePhoneNo() {
    let phonenoError = "";
    const countryCode = this.state.countryCode.trim();
    const phoneno = this.state.phoneno.trim();
    if (countryCode === "" || phoneno === "") {
        phonenoError = "Phone No. is required";
    } else if (!/^\+\d{1,3}$/.test(countryCode)) {
        phonenoError = "Country Code is not valid";
    } else if (!/^\d{10}$/.test(phoneno)) {
        phonenoError = "Phone No. is not valid";
    }

    this.setState({ phonenoError });
    return phonenoError === "";
}
validateCountry() {
    const countryError = this.state.country ? "" : "Country is required";
    this.setState({ countryError });
    return countryError === "";
}
validateCity() {
    const cityError = this.state.city ? "" : "City is required";
    this.setState({ cityError });
    return cityError === "";
}

validatePanNo() {
    let pannoError = "";
    const value = this.state.panno.trim();
    if (value === "") {
        pannoError = "Pan No. is required";
    } else if (!/^[A-Za-z]{5}\d{4}[A-Za-z]$/.test(value)) {
        pannoError = "Pan No. is not valid";
    }

    this.setState({ pannoError });
    return pannoError === "";
}
validateAadharNo() {
    let aadharnoError = "";
    const value = this.state.aadharno.trim();
    if (value === "") {
        aadharnoError = "Aadhar No. is required";
    } else if (!/^\d{12}$/.test(value)) {
        aadharnoError = "Aadhar No. is not valid";
    }

    this.setState({ aadharnoError });
    return aadharnoError === "";
}

  render() {
    return (
      <div className="main" >
        <h3>SignUp Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>User Name: {this.state.username}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            <div>Phone No.: {this.state.phoneno}</div>
            <div>Country: {this.state.country}</div>
            <div>PAN No.: {this.state.panno}</div>
            <div>Aadhar No.: {this.state.aadharno}</div>
          </div>
        ) : (
          <div style={{textAlign:"center"}}>
          <form onSubmit={this.handleSubmit} >
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.firstNameError && (
              <div className="errorMsg">{this.state.firstNameError}</div>
            )}
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.lastNameError && (
              <div className="errorMsg">{this.state.lastNameError}</div>
            )}
            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.usernameError && (
              <div className="errorMsg">{this.state.usernameError}</div>
            )}
            <input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.emailAddressError && (
              <div className="errorMsg">{this.state.emailAddressError}</div>
            )}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordError && (
              <div className="errorMsg">{this.state.passwordError}</div>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordConfirmationError && (
              <div className="errorMsg">
                {this.state.passwordConfirmationError}
              </div>

            )}
<div>
  <input
    type="text"
    placeholder="Country Code"
    name="countryCode"
    value={this.state.countryCode}
    onChange={this.handleChange}
    onBlur={this.handleBlur}
    autoComplete="off"
  />
  <input
    type="text"
    placeholder="Phone No."
    name="phoneNo"
    value={this.state.phoneNo}
    onChange={this.handleChange}
    onBlur={this.handleBlur}
    autoComplete="off"
  />
</div>
{this.state.phoneNoError && (
  <div className="errorMsg">{this.state.phoneNoError}</div>
)}


<select
placeholder="country"
  name="country"
  value={this.state.country}
  onChange={this.handleChange}
  onBlur={this.handleBlur}
>
  <option value="" disabled hidden>Select Country</option>
  <option value="India">India</option>
  <option value="USA">USA</option>
  
</select>
<br />
{this.state.countryError && (
  <div className="errorMsg">{this.state.countryError}</div>
)}
<select
placeholder="city"
  name="city"
  value={this.state.city}
  onChange={this.handleChange}
  onBlur={this.handleBlur}
>
  <option value="" disabled hidden>Select City</option>
  <option value="Delhi">Delhi</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Newyork">Newyork</option>
  <option value="Los angeles">Los Angeles</option>
  
</select>
<br />
{this.state.cityError && (
  <div className="errorMsg">{this.state.cityError}</div>
)}

<input
  type="text"
  placeholder="Pan No."
  name="panNo"
  value={this.state.panNo}
  onChange={this.handleChange}
  onBlur={this.handleBlur}
  autoComplete="off"
/>
<br />
{this.state.panNoError && (
  <div className="errorMsg">{this.state.panNoError}</div>
)}

<input
  type="text"
  placeholder="Aadhar No."
  name="aadharNo"
  value={this.state.aadharNo}
  onChange={this.handleChange}
  onBlur={this.handleBlur}
  autoComplete="off"
/>
<br />
{this.state.aadharNoError && (
  <div className="errorMsg">{this.state.aadharNoError}</div>
)}

            <button>Signup</button>
          </form>
          </div>
        )}
      </div>
    );
  }
}
export default FormComponent;