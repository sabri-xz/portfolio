import querystring from 'querystring'

// Access values with enviroment variables
const client_id = process.env.client_id
const client_secret = process.env.client_secret
const refresh_token = process.env.refresh_token

// We encode our client_id and client_secret again to send with the POST request.
// This is a part of the authorization header
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

// This function gets the access token so that we can access the API

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
          Authorization: `Basic ${basic}`,
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: querystring.stringify({
          grant_type: 'refresh_token',
          refresh_token,
      }),
    })
    return response.json()
}

// We use the afformentioned access token and send it with the request to the API
// this requests gets the currently playing song.
export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken()
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    })

    //If response status > 400 means there was some error while fetching the required information
    if (response.status > 400) {
      throw new Error('Unable to Fetch Song');
    } else if(response.status === 204) { //The response was fetched but there was no content
      throw new Error('Currently Not Playing')
    }

    //Extracting the required data from the response into seperate variables
    const song = await response.json();
    console.log(song)

    if (song.item === null) {
      return null;
    }

    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((artist:{name:string}) => artist.name).join(', ');
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const timePlayed = song.progress_ms;
    const timeTotal = song.item.duration_ms;
    const artistUrl = song.item.album.artists[0].external_urls.spotify;

    //Returning the song details
    return {
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl
    };
}
