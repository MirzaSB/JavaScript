const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        address = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers.');
            }
            else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address.');
            }
            else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('10023').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMsg) => {
    console.log(errorMsg);
});