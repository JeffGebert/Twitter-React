import React, {Component} from 'react'
import Latest_tweets from './Latest_tweets'
import Tweets from './Tweets'
import './Content.css'
import axios from 'axios'

class Content extends Component {
	// Data
	state = {
				tweets:[]
	}
	// Functions

	componentDidMount() {
			console.log('url',`${process.env.REACT_APP_API}/api/tweets`)
			axios.get(`${process.env.REACT_APP_API}/api/tweets`).then((res) => {
				console.log('res', res.data)
				let twats = this.state.tweets
				twats = res.data
				console.log('twats', twats);
				this.setState({
					tweets: twats
				}, console.log('tweets', this.state.tweets))

			}).catch((err) => {
				console.log('err on component will mount', err)

			})
		}




	// Render
	render() {
		return (
			<div class = "contentbox">
				<div class = "tweet_container">
					<div class = "tweets">
						<Latest_tweets/>
					</div>
				</div>
			</div>
		)
	}
}

export default Content
