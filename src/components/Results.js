import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import BarGraph from './BarGraph';
//We need to have the endpoints from the backend

function Results({scores, tracks}) {
	const [selectedTrack, setSelectedTrack] = useState({
		id: 4,
		name: 'Wizard',
		description: 'You are a wizard Penny',
		shortDesc: '!wizard',
		link: 'www.sortinghat.tech',
		strengths: 'Transportation',
	});

	useEffect(() => {
		let highest = {track: null, score: 0};
		for (let score in scores) {
			if (scores[score] > highest.score) {
				highest = {track: score, score: scores[score]};
			}
		}
		setSelectedTrack(tracks.find((track) => track.id == highest.track));
	}, []);

	if (!selectedTrack) {
		return <Redirect to="/quiz" />;
	}
	return (
		<>
			<div className="flex px-1 py-1 my-8 items-start mx-5 pt-2">
				<Link
					to="/quiz"
					className="bg-purple-900 hover:bg-purple-100 text-white mr-5 py-0.5 px-10 border border-purple-100 rounded flex align-middle justify-center"
				>
					<i className="material-icons">arrow_left</i>
					<span>Retake Quiz</span>
				</Link>
			</div>
			<div className=" noto-sans flex justify-center items-center">
				<section className="flex-column m-10 border-black max-w-5xl">
					<h2 className="font-bold text-3xl text-black border-b-2 p-3">
						Results
					</h2>
					<div className="flex justify-center flex-column">
						<BarGraph top={selectedTrack} />
					</div>
					<div className="container mt-5">
						<h2 className="font-bold text-xl p-3 border-b-2">
							You are {'  '} {selectedTrack.name}
						</h2>
						<p className="py-3">{selectedTrack.strengths}</p>
					</div>
					<div className="flex-col justify-center items-center">
						<h2 className="font-bold text-xl self-start p-3">Learn More</h2>
						<div className="flex justify-center py-2">
							{selectedTrack.link}
							{/* {selectedTrack. ? trackInfo.trackVideo : } */}
						</div>
					</div>
					<div>
						<h2 className="font-bold text-2xl text-black border-b-2 p-3 mb-1">
							Discover Other Tracks
						</h2>
						{/*I need to axios all this info*/}
						{tracks.map((el) => {
							if (el.id != selectedTrack.id) {
								return (
									<div
										key={el.id}
										className="font-bold py-1"
										onClick={() => setSelectedTrack(el)}
									>
										{el.name}
										<span className="text-gray-800 font-normal">
											{' '}
											- {el.shortDesc}
										</span>
									</div>
								);
							}
						})}
					</div>
				</section>
			</div>

			<div className="flex justify-center px-1 py-1 my-8 mx-5 pt-2">
				<Link
					to="/quiz"
					className=" flex bg-purple-900 hover:bg-purple-100 text-white mr-5 py-0.5 px-10 border border-purple-900 rounded align-baseline"
				>
					<i className="material-icons">arrow_left</i>
					<span>Retake Quiz</span>
				</Link>
			</div>
		</>
	);
}

//Redux Interface
const mapStateToProps = (state) => {
	return {
		scores: state.scores,
		tracks: state.tracks,
	};
};
export default connect(mapStateToProps, {})(Results);
