const axios = require('axios')


// ---------- Fetch ----------

// async function fetchFn(){
//     const res = await fetch('https://httpdump.app/dumps/2f06fe88-9abb-4be0-8a7f-26cdb14dd661'
//                             ,{
//                                 method: 'POST',
//                                 body: JSON.stringify({
//                                     username: "AKS",
//                                     password: "42069"
//                                 }),
//                                 headers: {
//                                     "Authorization": "Bearer 123xyz"
//                                 }
//                             }
//                     );
//     const final = await res.text()

//     console.log(final);
// }

// fetchFn();



// ---------- Axios ----------

async function AxiosFn(){
    const res = await axios.post('https://httpdump.app/dumps/2f06fe88-9abb-4be0-8a7f-26cdb14dd661' ,
                {
                    username: "Anant",
                    password: "420__69"   
                },

                {
                    headers:{
                        Authorization: "Bearer 123xyz"
                    }
                }
    )
}

AxiosFn();