import React, {Component} from 'react'
import './New_tweet.css'

class New_tweet extends Component {
	// Data
	state = {
		text: ''
	}
	// Functions
	changeText = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	clearTweet = () => {
		this.setState({
			text: ''
		})
	}




	// Render
	render() {
		return (
			<div class = "new_tweet_box">
				<form onSubmit={(e) => {
									this.props.createTweet(e, this.state.text); this.clearTweet()}
								}>
								<div class="post_tweet">
								<input type="text" class="form-control" placeholder="New Tweet" value={this.state.text} onChange={(e) => this.changeTweet(e)}/>
								<button class="send_tweet" type="button" id="button-addon2">Send</button>
								</div>

								<div class = "hashtags">
								<span class= "hashtags2">#Birthdays</span>
								<span class= "hashtags2">#duderella</span>
								<span class= "hashtags2">#MuayThai</span>
								<span class="hashtags2" >#GermanGarden</span>
								</div>
				</form>
			</div>

		)
	}
}

export default New_tweet
