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
  $('#change-password, #sign-out, .create, #quotes-index').show()
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
  $('#sign-out, #change-password, .create, #quotes-index').hide()
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
  store.quotes = data.quotes
  const showQuotesHtml = showQuotesTemplate({ quotes: data.quotes })
  $('#quotes-display').html(showQuotesHtml)
}

const onCreateQuoteFailure = function (response) {
  $('#user-message').text('Error on creating quote, try again!')
  $('#user-message').css('color', 'red')
}

const onGetQuotesSuccess = function (response) {
  $('#user-message').text('Here are your quotes, add a new one!')
  $('#user-message').css('color', '#69BF44')
  store.quotes = response.quotes
  const showQuotesHtml = showQuotesTemplate({ quotes: response.quotes })
  $('#quotes-display').html(showQuotesHtml)
}

const onGetQuotesFailure = function () {
  $('#user-message').html('Can\t find quotes, please try again')
  $('#user-message').css('color', 'red')
}

const onDeleteQuoteFailure = function () {
  $('#user-message').html('Can\'t delete quote!')
  $('#user-message').css('color', 'red')
}

const onUpdateQuoteSuccess = function (response) {
  store.quotes = response.quotes
  $('.update-modal').modal('hide')
  const showQuotesHtml = showQuotesTemplate({ quotes: response.quotes })
  $('#quotes-display').html(showQuotesHtml)
  $('#user-message').text(`Successfully updated quote!`)
  $('#user-message').css('color', '#69BF44')
  $('.modal-backdrop').remove()
}

const onUpdateQuoteFailure = function () {
  $('#user-message').html('Can\'t update quote!')
  $('#user-message').css('color', 'red')
}

const onGetRandomQuoteSuccess = function (response) {
  store.randomQuote = response.random_quote
  $('#daily-inspiration').css('padding', '50px')
  $('#daily-inspiration').html(`“${store.randomQuote.rand_text}”` + `<br>&mdash; <em>${store.randomQuote.rand_cite}</em>`)
}

const onGetRandomQuoteFailure = function () {
  $('#user-message').html('Can\t give inspiration, don\t give up!')
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
  onGetQuotesFailure,
  onDeleteQuoteFailure,
  onUpdateQuoteSuccess,
  onUpdateQuoteFailure,
  onGetRandomQuoteSuccess,
  onGetRandomQuoteFailure
}
