//This file is to just check requests
const axios = require("axios")


async function Get() {
    const data = await axios.get("http://localhost:3000/petals/123", {
        data:{
            name: "Apoorv"
        }
    })
    console.log(data.headers)
}

Get()