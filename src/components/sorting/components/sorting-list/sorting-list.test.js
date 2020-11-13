import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from "@store/redusers/root-reducer";
import SortingForTest from "./sorting-list";

const store = createStore(reducer);

it(`SortingList render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <SortingForTest
            sortingType={`Popular`}
            onOpenList={() => {}}
            changeSortingTypeAction={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
