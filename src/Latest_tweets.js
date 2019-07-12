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
	  tweets.date = moment(tweets.date).format('D MMM YYYY - h:mma')
		this.setState({tweets})
	}


	// Render
	render() {
		return (
			<div className = "tweets">
				<span className="author">{this.state.tweets.author.name}</span>
				<span className="date">{this.state.tweets.date}</span>
				<div className="body">{this.state.tweets.body}</div>
			</div>
		)
	}
}


// <div className="message">
			// <span className="author">{this.state.message.author.name}</span>
			// <span className="date">{this.state.message.date}</span>
			// <div className="body">{this.state.message.body}</div>
		// </div>


export default Latest_tweets
