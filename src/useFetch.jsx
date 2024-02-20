export default async function useFetch() {
    try {
        const res = await fetch("https://api.jikan.moe/v4/top/anime?page=1")
       if(res.ok)
       {
        const data = await res.json()
        console.log(data)
        return {api:data, err:null}
       }
       } 
    catch (err) {
        console.error(err)
        return {api:null, err:err}
    }
}
