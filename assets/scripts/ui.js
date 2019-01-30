'use strict'
const store = require('./store')
const showQuotesTemplate = require('./templates/helpers/quote-listing.handlebars')

const onSignUpSuccess = (responseData) => {
  $('#signupModalCenter').modal('toggle')
  $('#user-message').text(`Successfully signed up as ${responseData.user.email}!`)
  $('#user-message').css('color', '#69BF44')
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').hide()
}
const onSignUpFailure = () => {
  $('#signupModalCenter').modal('toggle')
  $('#user-message').text('Error on signup, please try again!')
  $('#user-message').css('color', 'red')
}

const onSignInSuccess = (responseData) => {
  $('#signinModalCenter').modal('toggle')
  $('#user-message').text(`Successfully signed in as ${responseData.user.email}!`)
  $('#user-message').css('color', '#69BF44')
  store.user = responseData.user
  $('#sign-in, #sign-up').hide()
  $('#change-password, #sign-out').show()
}

const onSignInFailure = () => {
  $('#signinModalCenter').modal('toggle')
  $('#user-message').text('Error on sign in, please try again!')
  $('#user-message').css('color', 'red')
}

const onSignOutSuccess = () => {
  $('#user-message').text(`Successfully signed out!`)
  $('#user-message').css('color', '#69BF44')
  store.user = null
  $('#sign-out, #change-password').hide()
  $('#sign-in, #sign-up').show()
}
const onSignOutFailure = () => {
  $('#user-message').text('Error on signing out, try again!')
  $('#user-message').css('color', 'red')
}

const onChangePasswordSuccess = () => {
  $('#passwordModalCenter').modal('toggle')
  $('#user-message').text(`Successfully changed password!`)
  $('#user-message').css('color', '#69BF44')
}
const onChangePasswordFailure = () => {
  $('#passwordModalCenter').modal('toggle')
  $('#user-message').text('Error on changing password, try again!')
  $('#user-message').css('color', 'red')
}

const onCreateQuoteSuccess = function (data) {
  $('#user-message').text('Quote successfully created')
  $('#user-message').css('color', '#69BF44')
}

const onCreateQuoteFailure = function (response) {
  $('#user-message').text('Error on creating example')
  $('#user-message').css('color', 'red')
}

const onGetQuotesSuccess = function (response) {
  store.quotes = response.quotes
  // let quotesDisplay
  // store.quotes.forEach(quote => {
  //   quotesDisplay = (`<p>"${quote.text}"<br>&mdash; <em>${quote.cite}</em></p>`)
  //   console.log(quotesDisplay)
  //   $('#user-message').append(quotesDisplay)
  // })
  console.log(response.quotes)
  const showQuotesHtml = showQuotesTemplate({ quotes: response.quotes })
  $('#user-message').html(showQuotesHtml)

  // console.log(gameNum)
}

const onGetQuotesFailure = function () {
  $('#user-message').html('Can not grab list of quotes, please try again')
  $('#user-message').css('color', 'red')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onCreateQuoteSuccess,
  onCreateQuoteFailure,
  onGetQuotesSuccess,
  onGetQuotesFailure
}