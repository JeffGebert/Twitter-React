import React, {Component} from 'react'
import moment from 'moment'


class Latest_tweets extends Component {
	// Data
	state = {
			tweets: this.props.tweets
		}

	// Functions
	componentWillMount() {
		let tweets = this.state.tweets
		console.log('tweets', tweets)
		// tweets.date = moment(tweets.date).format('D MMM YYYY - h:mma')
		this.setState({tweets})
	}


	// Render
	render() {
		return (
			<div class = "tweets">
		
			</div>
		)
	}
}

export default Latest_tweets
