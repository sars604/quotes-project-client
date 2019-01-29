'use strict'
const events = require('./events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$('#change-password').hide()
$('#sign-out').hide()

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
})
