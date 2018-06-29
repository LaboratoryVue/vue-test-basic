import App from '@/App';
import { shallow } from 'vue-test-utils';

describe('App.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(App);
  });
  it('should render correct contents', () => {
    expect(wrapper.html())
      .to.contain('<th>Items</th>');
    expect(wrapper.html())
      .to.contain('<input v-model="item" type="text" class="prompt" placeholder="Add item..." value="" />');
    expect(wrapper.html())
      .to.contain('<button type="submit" class="ui button" :disabled="!item">Add</button>');
    expect(wrapper.html())
      .to.contain('<span @click="removeAllItems" class="ui label">Remove all</span>');
  });
  it('should set correct default data', () => {
    expect(wrapper.wm.item).to.equal('');
    expect(wrapper.wm.items).to.deep.equal([]);
  });
});
