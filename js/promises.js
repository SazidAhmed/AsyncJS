const getData = (resource)=>{
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=>{
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4){
                reject('error getting resource');
            }
        });
        request.open('GET', resource);
        request.send();
    })
}

getData('server/contacts.json').then(data=>{
    console.log('promise resolved', data);
}).catch(err=>{
    console.log('promise rejected', err);
})

//example
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

// promise 
const getPromise = ()=>{
    return new Promise((resolve, reject)=>{
        // fetch data
        resolve ('Some Data');
        reject('Some Error');
    });
}

getPromise().then(data => {
    console.log(data);
}).catch(err=>{
    console.log(err);
})
