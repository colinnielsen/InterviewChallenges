//first pass, non recursive;
function flatten(obj) {
   let arr = [];
   if (obj.id) arr = [...arr, {id: obj.id}];
   if (obj.children) arr = [...arr, ...obj.children];
   return arr;
}

//second attempt, using recursion
function flattenRecursive(obj, arr = []) {
   for(let [key, value] of Object.entries(obj)){
      if(typeof value == 'string') {
         arr = [...arr, { [key]: value }];
      }else {
         arr = [...flattenRecursive(value, arr)];
      }
   }
   return arr;
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