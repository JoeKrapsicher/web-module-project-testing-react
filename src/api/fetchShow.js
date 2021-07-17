import axios from 'axios';
import stripTags from 'striptags';

const formatSeasons = (allEpisodes) => {
  const seasons = [
    {id:0, name: "Season 1", episodes: []}, 
    {id:1, name: "Season 2", episodes: []}, 
    {id:2, name: "Season 3", episodes: []}, 
    {id:3, name: "Season 4", episodes: []}
  ];

  allEpisodes.forEach((episode) => {
    seasons[episode.season-1].episodes.push({
      ...episode,
      summary: stripTags(episode.summary),
      image: episode.image ? episode.image.medium : null
    });
  });

  return seasons;
};


const fetchShow = () => {
  return axios
  // HAD TO FIX YOUR API REQUEST!!!!!! THE ASSIGNMENT WORKS NOW!!!
  // the old url freaked out if there was a "-things" tied to the end 
  // ex : https://api.tvmaze.com/singlesearch/shows?q=stranger -things &embed=episodes
  // new : https://api.tvmaze.com/singlesearch/shows?q=stranger&embed=episodes
  // new works just fine
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger&embed=episodes")
    .then(res => {
      console.log('Im in the axios then!')
      const { data } = res;
      
      return {
        name: data.name,
        image: data.image,
        summary: stripTags(data.summary),
        seasons: formatSeasons(data._embedded.episodes)
      };
    });
};

export default fetchShow;