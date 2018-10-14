

export const getProvinces = async () =>
    await (await fetch(`https://geopagos-challenge.s3.amazonaws.com/provinces.json`)).json()

export const getLocalities = async id =>
    await (await fetch(`https://geopagos-challenge.s3.amazonaws.com/provinces/${id}.json`)).json()
