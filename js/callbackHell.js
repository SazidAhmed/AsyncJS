const getData = (resource, callback)=>{
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
    request.open('GET', resource);
    request.send();
}

getData('server/users.json',(err, data)=>{
    console.log('user',data);
    getData('server/roles.json',(err, data)=>{
        console.log('roles',data);
        getData('server/contacts.json',(err, data)=>{
            console.log('contacts',data);
        });
    });
});
