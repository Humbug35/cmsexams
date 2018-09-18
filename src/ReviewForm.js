import React, { Component } from 'react';

class ReviewForm extends Component {
  constructor() {
    super();
    this.state = {
      reviewObject: {
        ProductId: null,
        Author: '',
        Review: '',
        Rating: null
      }
    }
  }
  getInputValues(e) {
    e.preventDefault();
    this.setState({
      reviewObject: {
        ProductId: this.props.id,
        Author: this.refs.author.value,
        Review: this.refs.review.value,
        Rating: Number(this.refs.rating.value),
      }
    })
  }
  postReview(e) {
    e.preventDefault();
    fetch('http://localhost:1337/review', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.reviewObject)
    }).then(() => this.props.updateReview())

    this.setState({
      reviewObject: {
        ProductId: null,
        Author: '',
        Review: '',
        Rating: null
      }
    })
    this.refs.clearForm.reset();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.postReview.bind(this)} ref="clearForm">
          Ditt namn: <input type="text" required ref="author" onChange={this.getInputValues.bind(this)}/>
          <br />
          Recension: <br /> <textarea rows="10" cols="50" required ref="review" onChange={this.getInputValues.bind(this)}/>
          <br />
          Betyg: <input type="number" min="1" max="5" required ref="rating" onChange={this.getInputValues.bind(this)}/>
          <button type="submit">Skicka</button>
        </form>
      </div>
    )
  }
}
export default ReviewForm;
