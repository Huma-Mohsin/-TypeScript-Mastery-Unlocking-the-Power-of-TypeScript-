//Advance use of Promise by fetch() method:-
//*******************************************
//fetch returns a promise also but it is a new way of declaring a promise.
let url = "https://jsonplaceholder.typicode.com/todos/1";
let fetchData = fetch(url)
    // Fetching data Using .then()
    .then((res) => {
    return res.json();
})
    .then((res) => {
    console.log(res);
})
    .catch((err) => {
    console.log(err);
});
export {};
