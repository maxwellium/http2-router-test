```npm start```

little helper to do get/post and auth from browser console

```javascript
function ajax( url, body, token ) {
  let post = undefined;

  if ( body ) {
    post = { method: 'post', body: JSON.stringify( body ) };
    if ( token ) {
      post.headers = new Headers( {
        Authorization: 'Bearer ' + token
      } );
    }
  }

  return fetch( url, post )
    .then( a => a.text() )
    .then( a => { console.log( a ); return a; } );
}

ajax( 'minnie/get/hi' );
ajax( 'minnie/get/huhu' );

ajax( 'mickey/login', { id: 'a', name: 'b' } )
  .then( a => JSON.parse( a ) )
  .then( a => ajax( 'minnie/whoami', {}, a.token ) );
```
