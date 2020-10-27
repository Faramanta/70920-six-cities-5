export const withOpenSortingList = (Component) => {
  return class WithOpenSortingList extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };

      this._handleOpenList = this._handleOpenList.bind(this);
    }

    // Открыть сортировку
    _handleOpenList() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return <Component
        {...this.props}
        isOpen={this.state.isOpen}
        onOpenList={this._handleOpenList}
      />;
    }
  };
};
