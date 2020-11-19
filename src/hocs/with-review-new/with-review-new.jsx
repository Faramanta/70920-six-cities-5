const withReviewNew = (Component) => {
  return class WithReviewNew extends React.PureComponent {
    constructor() {
      super();
      this._changeDisabledFormStatus = this._changeDisabledFormStatus.bind(this);
      this._handleFieldChange = this._handleFieldChange.bind(this);
      this._resetForm = this._resetForm.bind(this);
      this.state = {
        rating: ``,
        review: ``,
        isDisabled: false
      };
    }

    _handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value
      });
    }

    _changeDisabledFormStatus(status) {
      this.setState({
        isDisabled: status
      });
    }

    _resetForm() {
      this.setState({
        rating: ``,
        review: ``,
      });
    }

    render() {
      const {rating, review, isDisabled} = this.state;

      return <Component
        rating={rating}
        review={review}
        onChange={this._handleFieldChange}
        changeDisabledFormStatus={this._changeDisabledFormStatus}
        resetForm={this._resetForm}
        isDisabled={isDisabled}
        {...this.props}
      />;
    }
  };
};

export default withReviewNew;
