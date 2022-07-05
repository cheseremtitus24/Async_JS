const posts = [
  {title: 'post one', body: 'This is post one'},
  {title: 'post two', body: 'This is post two'}
];

function getPosts()
{
  // setTimeout(() =>
  // timeout function takes in a callback and a sleep time in milliseconds.
  setTimeout(function()
{
  var interpret = '';
              for (var i in posts)
              {
                interpret += '<div><ul>' +
                '<li>ID: ' + posts[i].title + '</li>' +
                '<li>Name: ' + posts[i].body + '</li>' +
                '<ul></div>';
              }




  // var output = '';
  // posts.forEach((post, i) => {
  //   output += '<li>'+post.title+'</li>';
  // });
  document.body.innerHTML=interpret;

}, 1000);
}

function createPost(post)
{
  // Lets return a promist
  return new Promise(function(resolve,reject)
{
  setTimeout(() => {
    posts.push(post);
    const error = false;

    if (!error)
    {
      resolve();
    }
    else {
      reject('Error: Something went wrong');
    }


  },2000);
});

}

createPost({title: 'post 3',body: 'post 3 body'}) // // NOTE: returns a promise
.then(getPosts)
.catch(err => console.log(err));
