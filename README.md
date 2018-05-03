# finalizejs
JavaScript Asynchronous Requests Queue

## Usage
```javascript
var Finalize = require("finalize");
var request_set = new Finalize(function() {
    // Code inside this function will be executed at the end
});

// To add an item to the queue
var hook1 = request_set.queue();

// Let's add another item
var hook2 = request_set.queue();

// The code inside the final callback will only be called after
// all the items in queue are completed.
// Let's consider we have two async requests:
jQuery.get('http://example.com', function(data) {
    // We now have the response from the first request
    // Remove one item from queue by calling the item's name
    hook1();
});

// The items can also be removed by passing them directly as callback
jQuery.get('http://example.com', hook2);

// You can even skip declaring items and create them on the fly as the callback function
jQuery.get('http://example.com', request_set.queue()); // hook3

// After you've added all items to the queue we need to execute it
request_set.exec();
```