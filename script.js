fetch('https://type.fit/api/quotes').then((response) => {
    // console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);

}).catch((err) => {
    // console.log('rejected', err)
})
//  console.log(data);