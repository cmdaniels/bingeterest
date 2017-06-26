var provider = new firebase.auth.TwitterAuthProvider();
var userId;
var displayName;

function signin() {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var secret = result.credential.secret;
    var user = result.user;
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.error(errorCode, errorMessage, email, credential);
  });
}

function signout() {
  firebase.auth().signOut().then(function() {
    // Send user to homepage
    window.location.href = '/';
  }).catch(function(error) {
    console.error(error);
  });
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    $('#navbar-signin').addClass('hidden');
    $('#navbar-signout').removeClass('hidden');
    $('#navbar-bingeboard').removeClass('hidden');
    $('#navbar-add-binge').removeClass('hidden');
    userId = user.uid;
    displayName = user.displayName;
  } else {
    $('#navbar-signout').addClass('hidden');
    $('#navbar-bingeboard').addClass('hidden');
    $('#navbar-add-binge').addClass('hidden');
    $('#navbar-signin').removeClass('hidden');
    userId = '';
    displayName = '';
  }
});
