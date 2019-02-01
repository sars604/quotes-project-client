'use strict'
const store = require('./store')
const showQuotesTemplate = require('./templates/helpers/quote-listing.handlebars')

const onSignUpSuccess = (responseData) => {
  $('#signupModalCenter').modal('toggle')
  $('#user-message').html(`<div class="alert alert-success alert-dissmissable fade show" role="alert">
  Successfully signed up as ${responseData.user.email}!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up, .create-button').hide()
}
const onSignUpFailure = () => {
  $('#signupModalCenter').modal('toggle')
  $('#user-message').html(`<div class="alert alert-danger alert-dissmissable fade show" role="alert">
  Error on signup, please try again!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
}

const onSignInSuccess = (responseData) => {
  $('#signinModalCenter').modal('toggle')
  $('#user-message').html(`<div class="alert alert-success alert-dissmissable fade show" role="alert">
  Successfully signed in as ${responseData.user.email}!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
  store.user = responseData.user
  $('#sign-in, #sign-up, .open-screen').hide()
  $('#change-password, #sign-out, .create-button, #quotes-index, .nav-title').show()
}

const onSignInFailure = () => {
  $('#signinModalCenter').modal('toggle')
  $('#user-message').html(`<div class="alert alert-danger alert-dissmissable fade show" role="alert">
  Error on signin, please try again!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
}

const onSignOutSuccess = () => {
  $('#user-message').html(`<div class="alert alert-success alert-dissmissable fade show" role="alert">
  Successfully signed out!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
  store.user = null
  $('#sign-out, #change-password, .create-button, #quotes-index, .create-, .nav-title').hide()
  $('#sign-in, #sign-up, .open-screen').show()
  $('#quotes-display').html('')
}
const onSignOutFailure = () => {
  $('#user-message').html(`<div class="alert alert-danger alert-dissmissable fade show" role="alert">
  Error on signing out, try again!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
}

const onChangePasswordSuccess = () => {
  $('#user-message').html(`<div class="alert alert-success alert-dissmissable fade show" role="alert">
  Successfully changed password!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
  $('#passwordModalCenter').modal('toggle')
}
const onChangePasswordFailure = () => {
  $('#user-message').html(`<div class="alert alert-danger alert-dissmissable fade show" role="alert">
  Error on changing password, try again!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
  $('#passwordModalCenter').modal('toggle')
}

const onCreateQuoteSuccess = function (data) {
  $('#user-message').html(`<div class="alert alert-success alert-dissmissable fade show" role="alert">
  Quote successfully created!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
  store.quotes = data.quotes
  const showQuotesHtml = showQuotesTemplate({ quotes: data.quotes })
  $('#quotes-display').html(showQuotesHtml)
}

const onCreateQuoteFailure = function (response) {
  $('#user-message').html(`<div class="alert alert-danger alert-dissmissable fade show" role="alert">
  Error on creating quote, try again!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
}

const onGetQuotesSuccess = function (response) {
  $('#user-message').html(`<div class="alert alert-success alert-dissmissable fade show" role="alert">
  Add your own quote!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
  store.quotes = response.quotes
  const showQuotesHtml = showQuotesTemplate({ quotes: response.quotes })
  $('#quotes-display').html(showQuotesHtml)
}

const onGetQuotesFailure = function () {
  $('#user-message').html(`<div class="alert alert-danger alert-dissmissable fade show" role="alert">
  Can\t find quotes, please try again<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
}

const onDeleteQuoteFailure = function () {
  $('#user-message').html(`<div class="alert alert-danger alert-dissmissable fade show" role="alert">
  Can\t delete quote!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
}

const onUpdateQuoteSuccess = function (response) {
  store.quotes = response.quotes
  $('.update-modal').modal('hide')
  const showQuotesHtml = showQuotesTemplate({ quotes: response.quotes })
  $('#quotes-display').html(showQuotesHtml)
  $('#user-message').html(`<div class="alert alert-success alert-dissmissable fade show" role="alert">
  Successfully updated quote!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
  $('.modal-backdrop').remove()
  $('body').removeClass('modal-open')
}

const onUpdateQuoteFailure = function () {
  $('#user-message').html(`<div class="alert alert-danger alert-dissmissable fade show" role="alert">
  Can not update quote, please include quote and cite!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
}

const onGetRandomQuoteSuccess = function (response) {
  store.randomQuote = response.random_quote
  $('#daily-inspiration').css('padding', '50px')
  $('#daily-inspiration').html(`“${store.randomQuote.rand_text}”` + `<br>&mdash; <em>${store.randomQuote.rand_cite}</em>`)
}

const onGetRandomQuoteFailure = function () {
  $('#user-message').html(`<div class="alert alert-danger alert-dissmissable fade show" role="alert">
  Can not give inspiration, but do not give up!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>`)
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
