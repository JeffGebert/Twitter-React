import React, {Component} from 'react'
import Latest_tweets from './Latest_tweets'
import New_tweet from './New_tweet'
import './Content.css'
import axios from 'axios'

class Content extends Component {
	// Data
	state = {
					tweets: []
	}
	// Functions


	componentWillMount() {
			console.log(`${process.env.REACT_APP_API}/api/tweets`)
			axios.get(`${process.env.REACT_APP_API}/api/tweets`).then((res) => {
				this.setState({
					tweets: res.data
				}, console.log('tweetsssssss', this.state.tweets),
					 console.log('response', res.data)

			)

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



	createTweet = (e, text) => {
		e.preventDefault()
		let tweet = {
			body: text
		}
		axios.post(
			`${process.env.REACT_APP_API}/api/tweets`,
			tweet,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}
		).then((res) => {
			let tweets = this.state.tweets
			tweets.push(res.data)
			this.setState({tweets})
		}).catch((err) => {
			console.log('err', err)
		})
	}


	// Render
	render() {
		return (
			<div className = "contentbox">
				<div className = "tweet_container">
					<div id = "tweets">
							{
							this.state.tweets.map((m) => {
								return <Latest_tweets tweets={m} key={m._id} />
							})
						 }
					</div>
				</div>
			</div>
		)
	}


}




export default Content
