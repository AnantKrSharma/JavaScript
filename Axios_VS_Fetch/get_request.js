const axios = require('axios')


// ---------- Fetch ----------

const fetchFn = ()=>{
    fetch('https://sum-server.100xdevs.com/todos')
    .then((res) => {
        res.json()
        .then( (final) => {
            console.log(final);
            console.log(final.todos.length);
        })
    })
}

fetchFn();


const fetchFn_2 = async ()=>{
    const res = await fetch('https://sum-server.100xdevs.com/todos')
    const final = await res.json();
    
    console.log(final);
    console.log(final.todos.length);
}

fetchFn_2();



// ---------- Axios ----------

const axiosFn = async ()=>{
    const res = await axios.get('https://sum-server.100xdevs.com/todos');
    console.log(res.data.todos);
    console.log(res.data.todos.length);
}

axiosFn();