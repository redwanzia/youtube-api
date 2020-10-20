import React, { useState, useEffect } from 'react';
import './App.scss';
import SearchBar from './component/SearchBar';
import useVideos from './hooks/useVideos';
import VideoList from './component/VideoList';
import VideoDetail from './component/VideoDetail';

const App = () => {
	const [ selectVideo, setSelectVideos ] = useState(null);
	const [ videos, search ] = useVideos('norton motorcycles');

	useEffect(
		() => {
			setSelectVideos(videos[0]);
		},
		[ videos ]
	);

	// const onVideoSelect = (video) => {
	// 	setSelectVideos(video);
	// };
	return (
		<div className='ui container'>
			<SearchBar onTermSubmit={search} />
			<div className='ui grid'>
				<div className='ui row'>
					<div className='eleven wide column'>
						<VideoDetail video={selectVideo} />
					</div>
					<div className='five wide column'>
						<VideoList videos={videos} onVideoSelect={setSelectVideos} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
