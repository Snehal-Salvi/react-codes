//Input
const obj = [
  {
    key: "Sample 1",
    data: "Data 1",
  },
  {
    key: "Sample 2",
    data: "Data 2",
  },
  {
    key: "Sample 3",
    data: "Data 3",
  },
  {
    key: "Sample 4",
    data: "Data 4",
  },
  {
    key: "Sample 1",
    data: "Data 2",
  },
  {
    key: "Sample 1",
    data: "Data 3",
  },
  {
    key: "Sample 1",
    data: "Data 4",
  },
];

//Output should be
/*let output = {
    "Sample 1": [
        {
            key: "Sample 1",
            data: "Data 1", 
        },
        {
            key: "Sample 1",
            data: "Data 2",
          },
          {
            key: "Sample 1",
            data: "Data 3",
          },
          {
            key: "Sample 1",
            data: "Data 4",
          }
    ],
    "Sample 2" : [
        {
            key: "Sample 2",
            data: "Data 2",
          }
    ],
    "Sample 3" : [
        {
            key: "Sample 3",
            data: "Data 3",
          }
    ],
    "Sample 4" : [
        {
            key: "Sample 4",
            data: "Data 4",
          }
    ],
};
*/


const output = {};

obj.forEach(element => {
    if(output[element.key]){
        //key is available then push it
        output[element.key].push(element);
    }else{
        output[element.key] = [element];
    }
});

console.log(output);

//Another way using reduce method

const output1 = obj.reduce((acc, element) => {
    if (acc[element.key]) {
      acc[element.key].push(element);
    } else {
      acc[element.key] = [element];
    }
    return acc;
  }, {});
  
  console.log(output1);
