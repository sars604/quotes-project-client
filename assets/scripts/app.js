'use strict'
const events = require('./events')
// const store = require('./store')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$('#change-password').hide()
$('#sign-out').hide()
$('.create').hide()
$('#quotes-index').hide()

$(() => {
  // user sign up
  $('#signupModalCenter').on('hidden.bs.modal', function () {
    $('#sign-up-form').trigger('reset')
  })
  $('#sign-up-form').on('submit', events.onSignUp)
  // user sign in
  $('#signinModalCenter').on('hidden.bs.modal', function () {
    $('#sign-in-form').trigger('reset')
  })
  $('#sign-in-form').on('submit', events.onSignIn)
  // user change password
  $('#passwordModalCenter').on('hidden.bs.modal', function () {
    $('#change-password-form').trigger('reset')
  })
  $('#change-password-form').on('submit', events.onChangePassword)
  // user sign out
  $('#sign-out').on('click', events.onSignOut)
  // create a new quote
  $('#create-quote').on('submit', events.onCreateQuote)
  // get index of quotes
  $('#quotes-index').on('click', events.onGetQuotes)
  // delete a quote
  $('#user-message').on('click', '.remove', events.onDeleteQuote)
  // update a quote
  $('body').on('hide.bs.modal', '.update-modal', function () {
    $('.update-quote-form').trigger('reset')
  })
  $('#user-message').on('submit', '.update-quote-form', events.onUpdateQuote)
})
