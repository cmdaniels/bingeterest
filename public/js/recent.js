firebase.database().ref('posts/').once('value', function(snapshot) {
  var posts = snapshot.val();
  for (var id in posts) {
    if (posts.hasOwnProperty(id)) {
      var post = posts[id];
      $('.binges').append('<div class="panel panel-default binge" id="' + id + '">' +
        '<div class="panel-heading">' +
          '<h3 class="panel-title">' + post.title + '</h3>' +
        '</div>' +
        '<div class="panel-body">' +
          '<a href="#" class="thumbnail"><img src="' + post.url + '"></a>' +
          '<a href="/user/' + post.userId + '">' + post.displayName + '</a>' +
        '</div>' +
      '</div>');
    }
  }
});
