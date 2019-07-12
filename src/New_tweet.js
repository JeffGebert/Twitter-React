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
			<div className = "new_tweet_box">

				<form onSubmit={(e) => {
									this.props.createTweet(e, this.state.text); this.clearTweet()}
								}>
								<div className="post_tweet">
									<input type="text" className="form-control" placeholder="New Tweet" value={this.state.text} onChange={(e) => this.changeText(e)}/>
									<button type="submit" className="send_tweet">Send</button>
								</div>


								<div className = "hashtags">
									<span className= "hashtags2">#Birthdays</span>
									<span className= "hashtags2">#Duderella</span>
									<span className= "hashtags2">#MuayThai</span>
									<span className="hashtags2" >#GermanGarden</span>
								</div>
				</form>
			</div>

		)
	}
}




export default New_tweet
