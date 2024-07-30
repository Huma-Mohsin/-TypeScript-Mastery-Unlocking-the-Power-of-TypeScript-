/*More Advance Topic Of Fetching Data through async . */


async function Fetchdata(){

let url="https://jsonplaceholder.typicode.com/todos/1";


//Fetching data using await.
try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

Fetchdata();