
console.log('hello world')


// const fs = require('fs');

//  fs.readFile('my_dirty_example.json', 'utf8', function(err, data) {
  
//    console.log(data);
//  });




// const fs = require('fs');
   

// const data = fs.readFileSync('./my_dirty_example.json',
//             {encoding:'utf8', flag:'r'});
            

//             let obj1 = JSON.parse(data);//l'analyser dans une variable (en utilisant JSON.parse).
//             let obj= JSON.stringify(obj1,null,2);

// console.log(obj); // {"name":"tran","age":39}




const fs = require('fs');
   
const data1 = fs.readFileSync('./my_dirty_example.json')
            // {encoding:'utf8', flag:'r'});
const data = fs.writeFileSync('./output.json',"**FÉLICITATIONS \o/**w")
let obj1 = JSON.parse(data1);//l'analyser dans une variable (en utilisant JSON.parse).
let obj= JSON.stringify(obj1,null,2);

console.log(obj); // {"name":"tran","age":39}
