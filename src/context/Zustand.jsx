import { create } from 'zustand'
import top from "../assets/top.svg"
import action from "../assets/action.svg"
import adventure from "../assets/adventure.svg"
import comedy from "../assets/comedy.svg"
import drama from "../assets/drama.svg"
import fantasy from "../assets/fantasy.svg"
import horror from "../assets/horror.svg"
import romance from "../assets/romance.svg"
import sliceOfLife from "../assets/slice.svg"

export const useZustand = create((set) => ({
  genre : [{id: 0, icon: top, name: "Top Anime", link: "/"},{ id: 1, icon: action, name: "Action",  link: "/Genre/1" },{id: 2, icon: adventure, name: "Adventure",  link: "/Genre/2"},{id:4, icon: comedy, name: "Comedy", link: "/Genre/4"},{id:8, icon: drama, name: "Drama" , link: "/Genre/8"},{ id:10, icon: fantasy, name: "Fantasy", link: "/Genre/10"},{ id:14, icon: horror, name: "Horror", link: "/Genre/14"},{ id:22, icon: romance, name: "Romance", link: "/Genre/22"},{ id:36, icon: sliceOfLife, name: "Slice of Life" ,  link: "/Genre/36"}],
  pagination : 1,
  data : null,
  drawer : false,
  error : null,
  activeNav : "Top Anime",
  animeInformation : null,
  updatePagination: (pagination) => set(() => ({pagination: pagination})),
  updateData: (data) => set(() => ({data : data}) ),
  updateDrawerActive: () => set((state) =>({drawer: !state.drawer})),
  updateActiveNav: (active) => set(() => ({activeNav: active })),
  updateAnimeInformation: (animeInformation) => set(() => ({animeInformation: animeInformation})),
}))