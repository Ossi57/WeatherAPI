async function getLocation () {
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return { latitute: (pos.coords.latitude), longitude: (pos.coords.longitude) };
};