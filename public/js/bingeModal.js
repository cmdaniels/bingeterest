function addBinge() {
  var id = new Date().valueOf();
  var post = {
    title: $('#add-binge-title')[0].value,
    url: $('#add-binge-url')[0].value,
    displayName: displayName,
    userId: userId,
    likes: 0,
    time: new Date()
  };
  firebase.database().ref('posts/' + id).set(post);
  $('#add-binge-title')[0].value = '';
  $('#add-binge-url')[0].value = '';
  $('.binges').append('<div class="panel panel-default binge" id="' + id + '">' +
    '<div class="panel-heading">' +
      '<h3 class="panel-title">' + post.title + '</h3>' +
      '<a href="#" class="cancel" onclick="deleteBinge(' + id + ')">&times;</a>' +
    '</div>' +
    '<div class="panel-body">' +
      '<a href="#" class="thumbnail"><img src="' + post.url + '"></a>' +
      '<a href="/' + post.userId + '">' + post.displayName + '</a>' +
    '</div>' +
  '</div>');
}

function cancelAddBinge() {
  $('#add-binge-title')[0].value = '';
  $('#add-binge-url')[0].value = '';
}