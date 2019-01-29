'use strict'
const store = require('./store')

const onSignUpSuccess = (responseData) => {
  $('#user-message').text(`Successfully signed up as ${responseData.user.email}!`)
  $('#user-message').css('color', '#69BF44')
  $('#game-board').hide()
  $('#games-index').hide()
  $('#create-game').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').hide()
}
const onSignUpFailure = () => {
  $('#user-message').text('Error on signup, please try again!')
  $('#user-message').css('color', 'red')
}

const onSignInSuccess = (responseData) => {
  $('#user-message').text(`Successfully signed in as ${responseData.user.email}! Now, Play a Game!`)
  $('#user-message').css('color', '#69BF44')
  store.user = responseData.user
  $('#game-board, #sign-in, #sign-up').hide()
  $('#games-index, #change-password, #create-game').show()
}

const onSignInFailure = () => {
  $('#user-message').text('Error on sign in, please try again!')
  $('#user-message').css('color', 'red')
}

const onSignOutSuccess = () => {
  $('#user-message').text(`Successfully signed out!`)
  $('#user-message').css('color', '#69BF44')
  store.user = null
  $('#game-board, #games-index, #create-game, #change-password').hide()
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

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
