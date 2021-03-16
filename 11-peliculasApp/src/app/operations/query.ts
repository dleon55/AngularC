import gql from 'graphql-tag';

export const getCartelera = gql`
  query($page:Int) {
  getCartelera(page:$page) {
    page
    total_pages
    total_results
    results {
      id
      adult
      title
      original_title
      overview
      popularity
      backdrop_path
      genre_ids
      poster_path
      release_date
      video
      vote_average
      vote_count
      original_language
    }
  }
}
`;
