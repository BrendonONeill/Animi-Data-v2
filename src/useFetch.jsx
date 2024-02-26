export async function useFetch() {
    try {
        const res = await fetch("https://api.jikan.moe/v4/top/anime?page=1&sfw")
       if(res.ok)
       {
        const data = await res.json()
        return {api:data, err:null}
       }
       } 
    catch (err) {
        console.error(err)
        return {api:null, err:err}
    }
}

export async function useFetchGenre(genre) {
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?genres=${genre}&page=${1}&sfw&order_by=score&sort=desc`)
       if(res.ok)
       {
        const data = await res.json()
        return {api:data, err:null}
       }
       } 
    catch (err) {
        console.error(err)
        return {api:null, err:err}
    }
}

export async function useFetchSearch(searchWord) {
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?order_by=score&sort=desc&sfw&q=${searchWord}`)
       if(res.ok)
       {
        const data = await res.json()
        return {api:data, err:null}
       }
       } 
    catch (err) {
        console.error(err)
        return {api:null, err:err}
    }
}