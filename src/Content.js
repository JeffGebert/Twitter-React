import React, {Component} from 'react'
import Latest_tweets from './Latest_tweets'
import New_tweets from './New_tweets'
import './Content.css'
import axios from 'axios'

class Content extends Component {
	// Data
	state = {

				tweets: []
	}
	// Functions

	componentWillMount() {
			console.log('url',`${process.env.REACT_APP_API}/api/tweets`)
			axios.get(`${process.env.REACT_APP_API}/api/tweets`).then((res) => {
				this.setState({
					tweets: res.data
				}, console.log('tweets', this.state.tweets))

			}).catch((err) => {
				console.log('err on component will mount', err)

			})
		}

	// componentWillReceiveProps(props) {
	// 	axios.get(`${process.env.REACT_APP_API}/api/messages?channel=${props.channel}`).then((res) => {
	// 		this.setState({
	// 			messages: res.data
	// 		})
	// 	}).catch((err) => {
	// 		console.log('err', err)
	// 	})
	// }



	createMessage = (e, text) => {
		e.preventDefault()
		let tweet = {
			body: text,
			channel: this.props.channel
		}
		axios.post(
			`${process.env.REACT_APP_API}/api/tweets`,
			tweet,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}
		).then((res) => {
			let tweet = this.state.tweets
			tweets.push(res.data)
			this.setState({tweets})
		}).catch((err) => {
			console.log('err', err)
		})
	}


	// Render
	render() {
		return (
			<div class = "contentbox">
				<div class = "tweet_container">
					<div id = "tweets">
						<New_tweets createMessage={this.createMessage}/>
						<Latest_tweets/>
					</div>
				</div>
			</div>
		)
	}
}

export default Content
