import React, {Component} from 'react'
import './New_tweet.css'

class Tweets extends Component {
	// Data
	state = {

	}
	// Functions

	// Render
	render() {
		return (
			<div class = "new_tweet_box">
				<div class="post_tweet">
					<input type="text" class="form-control" placeholder="New Tweet"/>
					<button class="send_tweet" type="button" id="button-addon2">Send</button>
				</div>

				<div class = "hashtags">
					<span class= "hashtags2">#Birthdays</span>
					<span class= "hashtags2">#duderella</span>
					<span class= "hashtags2">#MuayThai</span>
					<span class="hashtags2" >#GermanGarden</span>
				</div>
			</div>

		)
	}
}

export default Tweets
