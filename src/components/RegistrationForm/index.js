// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({showLastNameError: !isValidLastName})
  }

  validateLastName = () => {
    const {lastNameInput} = this.state
    return lastNameInput !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({showFirstNameError: !isValidFirstName})
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state
    return firstNameInput !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  submitAnotherResponse = () => {
    this.setState(prevState => ({
      firstNameInput: '',
      lastNameInput: '',
      isFormSubmitted: !prevState.isFormSubmitted,
    }))
  }

  render() {
    const {
      firstNameInput,
      lastNameInput,
      showFirstNameError,
      showLastNameError,
      isFormSubmitted,
    } = this.state
    const firstNameClassName = showFirstNameError
      ? 'error-input'
      : 'no-error-input'
    const lastNameClassName = showLastNameError
      ? 'error-input'
      : 'no-error-input'
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        {isFormSubmitted ? (
          <div className="register-successfully-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-icon"
            />
            <p className="success-description">Submitted Successfully</p>
            <button
              className="submit-btn"
              type="button"
              onClick={this.submitAnotherResponse}
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={this.onSubmitForm}>
            <label className="label" htmlFor="firstName">
              FIRST NAME
            </label>
            <input
              type="text"
              placeholder="First name"
              id="firstName"
              className={`input ${firstNameClassName}`}
              value={firstNameInput}
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
            />
            {showFirstNameError && <p className="error">Required</p>}
            <label className="label" htmlFor="firstName">
              LAST NAME
            </label>
            <input
              type="text"
              placeholder="Last name"
              id="lastName"
              className={`input ${lastNameClassName}`}
              value={lastNameInput}
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
            />
            {showLastNameError && <p className="error">Required</p>}
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}
export default RegistrationForm
