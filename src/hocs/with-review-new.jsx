export const withReviewNew = (Component) => {
  return class WithReviewNew extends React.PureComponent {
    constructor(props) {
      super(props);
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleFieldChange = this._handleFieldChange.bind(this);

      this.state = {
        rating: `0`,
        review: ``
      };
    }

    _handleSubmit(evt) {
      evt.preventDefault();
    }

    _handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value
      });
    }

    render() {
      const {rating, review} = this.state;

      return <Component
        rating={rating}
        text={review}
        onSubmit={this._handleSubmit}
        onChange={this._handleFieldChange}
      />;
    }
  };
};

