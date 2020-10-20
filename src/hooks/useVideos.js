import React, { useState, useEffect } from 'react';
import YouTube from '../apis/YouTube';

const KEY = 'AIzaSyAoppsGamif1FXiiyj3HgTfI0Iql616UDE ';

const useVideos = (defaultSearchTerm) => {
	const [ videos, setVideos ] = useState([]);
	useEffect(() => {
		search(defaultSearchTerm);
	}, []);

	const search = async (term) => {
		const response = await YouTube.get('/search', {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 10,
				key: KEY
			}
		});
		setVideos(response.data.items);
	};

	return [ videos, search ];
};

export default useVideos;
