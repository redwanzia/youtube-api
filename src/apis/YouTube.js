import axios from 'axios';

const KEY = 'AIzaSyAoppsGamif1FXiiyj3HgTfI0Iql616UDE ';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 10,
		key: KEY
	}
});

// url: GET https://www.googleapis.com/youtube/v3/search
