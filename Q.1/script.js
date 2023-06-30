'use strict';
// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

console.log('Week 9 assessment');
const posts = [
  { title: 'post one', body: 'This is post one' },
  { title: 'post Two', body: 'This is post Two' },
  { title: 'post Three', body: 'This is post Three' },
];

console.log(posts);

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
getPosts(posts);

createPost({ title: 'Post Four', body: 'This is post Four' }, getPosts);
