firebase.database().ref('posts/').once('value', function(snapshot) {
  var posts = snapshot.val();
  for (var id in posts) {
    if (posts.hasOwnProperty(id)) {
      var post = posts[id];
      if(post.userId === location.href.split('/')[4]) {
        $('.displayName').html(post.displayName);
        $('.binges').append('<div class="panel panel-default binge" id="' + id + '">' +
          '<div class="panel-heading">' +
            '<h3 class="panel-title">' + post.title + '</h3>' +
          '</div>' +
          '<div class="panel-body">' +
            '<a href="#" class="thumbnail"><img src="' + post.url + '" onError="this.onerror=null;this.src=\'http://s.quickmeme.com/img/1e/1ec9a271bcc921ea5017c45bf024b7025f1b382baec33928b3da29eb37f203f5.jpg\';"></a>' +
          '</div>' +
        '</div>');
      }
    }
  }
});
