export async function useFetch(pagination, animeType) {
    try {
        let url;
        if(animeType === "")
        {
             url = `https://api.jikan.moe/v4/top/anime?page=${pagination}&sfw` 
        }
        else
        {
             url = `https://api.jikan.moe/v4/top/anime?page=${pagination}&type=${animeType}&sfw`
        }
        const res = await fetch(url)
       if(res.ok)
       {
        return res.json()
       }
       } 
    catch (err) {
        return res.json()
    }
}

export async function useFetchPop(pagination, animeType) {
    try {
        let url;
        if(animeType === "")
        {
             url = `https://api.jikan.moe/v4/top/anime?page=${pagination}&filter=bypopularity&sfw` 
        }
        else
        {
             url = `https://api.jikan.moe/v4/top/anime?page=${pagination}&type=${animeType}&filter=bypopularity&sfw`
        }
        const res = await fetch(url)
       if(res.ok)
       {
        return res.json()
       }
       } 
    catch (err) {
        return res.json()
    }
}

export async function useFetchGenre(genre,pagination,animeType) {
    try {
        let url;
        if(animeType === "")
        {
             url = `https://api.jikan.moe/v4/anime?genres=${genre}&page=${pagination}&sfw&order_by=score&sort=desc` 
        }
        else
        {
             url = `https://api.jikan.moe/v4/anime?genres=${genre}&page=${pagination}&type=${animeType}&sfw&order_by=score&sort=desc`
        }
        const res = await fetch(url)
        console.log(res)
       if(res.ok)
       {
        return res.json()
       }
       } 
    catch (err) {
        return res.json()
    }
}

export async function useFetchSearch(searchWord) {
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?order_by=score&sort=desc&sfw&q=${searchWord}`)
       if(res.ok)
       {
        return res.json()
       }
       } 
    catch (err) {
        return res.json()
    }
}



export async function useFetchAnimeInformation(id) {
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
       if(res.ok)
       {
        return res.json()
       }
       } 
    catch (err) {
        return res.json()
    }
}