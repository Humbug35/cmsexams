import React, { Component } from 'react';
import ReviewForm from './ReviewForm';


class ShowReviews extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
      }
    }
    getReviews() {
      fetch("http://localhost:1337/review")
      .then(res => res.json())
      .then(review => {
        this.setState({
          reviews: review.reverse()
        })
      })
    }
    componentDidMount() {
      this.getReviews();
    }
  render() {
    const review = this.state.reviews.map(rev => {
      if(rev.ProductId.match(this.props.id)) {
        return (
          <div key={rev.id}>
            <fieldset>
              <p><strong>Skrivet av:</strong> {rev.Author}</p>
              <p><strong>Kommentar:</strong> {rev.Review}</p>
              <p><strong>Betyg:</strong> {rev.Rating}</p>
            </fieldset>
          </div>
        )
      }
    })
    return (
      <div>
      <div>
        <ReviewForm id={this.props.id} updateReview={this.getReviews.bind(this)}/>
      </div>
        <h3>Recensioner</h3>
        <p>{review}</p>
      </div>
    )
  }
}
export default ShowReviews;
