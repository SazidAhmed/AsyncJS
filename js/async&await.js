const getData = async()=>{
    const response = await fetch('server/contacts.json');
    const data = await response.json();
    console.log(data);
    return data;
}

console.log('process 1');
console.log('process 2');

getData()
    .then(data=>console.log('resolved:',data))
    .catch(err=>console.log('rejected:',err.message));

console.log('process 3');
console.log('process 4');