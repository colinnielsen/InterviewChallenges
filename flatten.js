//first pass, non recursive;
function flatten(obj) {
   let arr = [];
   if (obj.id) arr = [...arr, {id: obj.id}];
   if (obj.children) arr = [...arr, ...obj.children];
   return arr;
}

//Second attempt, using recursion
const flattenRecursive = (obj, arr = []) => {
   for(let [key, value] of Object.entries(obj)){
      if(typeof value == 'string') {
         arr = [...arr, { [key]: value }];
      }else {
         arr = [...flattenRecursive(value, arr)];
      }
   }
   return arr;
}

//More 'developer-friendly' version

const flattenReadable = (object) => {
   //iterate through the keys of the object, (object.keys works on arrays too)
   return Object.keys(object).reduce((accumulator, key) => {
      //get the value of the object. Works for both arrays and objects as well)
      let value = object[key];
      //check to see if the value is a string, in other words, you have reached the bottom of the array
      if(typeof value === 'string') {
         //place the key/value pair into the array of objects
         return accumulator = [...accumulator, { [key]: value }];
      } else {
         //if the value is an object or array, recursively call flatten readable, passing the value as the 'object'
         return accumulator = [...accumulator, ...flattenReadable(value)];
      }
   }, []);
}

var exampleInput = {
   id: "abc",
   i: {edge:'case'},
   children: [
      {id: "def"},
      {id: "ghi"},
      {id: "jkl"},
      {children: [
         {id: "mno"},
         {id: "pqr"},
         {children: [
            {id:"stu"}
         ]}
      ]}
   ],
};

flattenRecursive(exampleInput);
