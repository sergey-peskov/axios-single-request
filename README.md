# axios-single-request

Canceling previous requests with an identical ID

## Installation

``` sh
npm install axios-single-request
```

## Usage

```js
import {requestInterceptorFulfilled, responseFulfilled, responseRejected} from 'axios-single-request';

axios.interceptors.request.use(requestInterceptorFulfilled);
axios.interceptors.response.use(responseFulfilled, responseRejected);


// Now all previous failed requests will be canceled when sending each new request with the "singleRequestId" parameter.

axios.get('url', {
  singleRequestId:'request_id',
})

axios.post('url', {}, {
  singleRequestId:'request_id',
})



```
