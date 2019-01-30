const api = require('./api')
const getFormFields = require('../../lib/get-form-fields.js')
const ui = require('./ui')
const store = require('./store')

// User sign up
const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
  $('form').trigger('reset')
}

// User sign in
const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
  $('form').trigger('reset')
}

// User sign Out
const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
  $('form').trigger('reset')
}

// User Change password
const onChangePassword = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
  $('#change-password-form').trigger('reset')
}

const onCreateQuote = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateQuoteSuccess)
    .catch(ui.onCreateQuoteFailure)
}

// Get Index of Quotes
const onGetQuotes = function () {
  // make API call for index of quotes
  api.index()
  // when API call is successful
    .then(ui.onGetQuotesSuccess)
  // when API call fails
    .catch(ui.onGetQuotesFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateQuote,
  onGetQuotes
}