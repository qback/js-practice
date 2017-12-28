const http = new easyHttp();

const post = {
  title: 'test',
  body:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni in fugiat placeat beatae eos distinctio, doloribus cupiditate earum porro! Quibusdam, unde ducimus incidunt, sapiente nisi aliquam quod ea, sint eum laborum ab dignissimos. Magnam asperiores praesentium officia. Porro, facere ipsum aliquid veritatis laborum cum qui placeat deserunt dignissimos? Culpa, harum.'
};

// http.get('http://jsonplaceholder.typicode.com/posts', (err, posts) => {
//   if (err) {
//     console.log('error:', err);
//     return;
//   }
//   console.log('posts:', posts);
// });

// http.post('http://jsonplaceholder.typicode.com/posts', post, (err, post) => {
//   if (err) {
//     console.log('error:', err);
//     return;
//   }
//   console.log('posts:', post);
// });

// http.put('http://jsonplaceholder.typicode.com/posts/1', post, (err, post) => {
//   if (err) {
//     console.log('error:', err);
//     return;
//   }
//   console.log('posts:', post);
// });

// http.delete('http://jsonplaceholder.typicode.com/posts/1', (err, post) => {
//   if (err) {
//     console.log('error:', err);
//     return;
//   }
//   console.log('Статус:', post);
//   console.log('@'.repeat(50));
// });

const http2 = new EasyHTTPFetch();

const user = {
  name: 'Опаньки',
  username: 'Опаньки',
  email: 'asdasda@saaaa.ru'
};

// http2
//   .get('http://jsonplaceholder.typicode.com/users/')
//   .then(data => {
//     console.log('data:', data);
//   })
//   .catch(err => {
//     console.log('err:', err);
//   });

// http2
//   .post('http://jsonplaceholder.typicode.com/users/', user)
//   .then(data => {
//     console.log('data:', data);
//   })
//   .catch(err => {
//     console.log('err:', err);
//   });

// http2
//   .put('http://jsonplaceholder.typicode.com/users/1', user)
//   .then(data => {
//     console.log('data:', data);
//   })
//   .catch(err => {
//     console.log('err:', err);
//   });

// http2
//   .delete('http://jsonplaceholder.typicode.com/users/1', user)
//   .then(message => {
//     console.log(message);
//   })
//   .catch(err => {
//     console.log('err:', err);
//   });

// http3
//   .get('http://jsonplaceholder.typicode.com/users/')
//   .then(data => {
//     console.log('data:', data);
//   })
//   .catch(err => {
//     console.log('err:', err);
//   });

// http3
//   .post('http://jsonplaceholder.typicode.com/users/', user)
//   .then(data => {
//     console.log('data:', data);
//   })
//   .catch(err => {
//     console.log('err:', err);
//   });

// http3
//   .put('http://jsonplaceholder.typicode.com/users/1', user)
//   .then(data => {
//     console.log('data:', data);
//   })
//   .catch(err => {
//     console.log('err:', err);
//   });

const http3 = new EasyHTTPAsyncAwait();
http3
  .delete('http://jsonplaceholder.typicode.com/users/1', user)
  .then(data => {
    console.log(data.status, data.statusText);
  })
  .catch(err => {
    console.log('err:', err);
  });
