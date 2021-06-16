const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
     if(Array.isArray(collection)) {
       collection.forEach(element => {
         return callback(element, index, collection)
       })
       return collection 
     } else {
       for (const key in collection) {
         return function callback(value, key, collection) {
           alert(key)
         }
       }
       return collection 
     }
    },

    map: function(collection, callback) {
     return function callback(value, index, collection) {
        let newArray = collection.map()
     }
    },

    reduce: function() {

    },

    functions: function() {

    },

    first: function(array, n) {
      return array[0]
    }


  }
})()

fi.libraryMethod()
