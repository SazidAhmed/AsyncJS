const getTodos = (callback)=>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if(request.readyState === 4){
            callback('could not find data', undefined);
        }
    });

    // request.open('get', 'https://jsonplaceholder.typicode.com/todos');
    request.open('GET', 'server/users.json');
    request.send();
}

console.log(1);
console.log(2); 

getTodos((err, data)=>{
    console.log('callback Fired!');
    if(err){
        console.log('error',err);
    }
    else{
        console.log('data',data);
    }
});

console.log(3);
console.log(4);