import App from '@/App';
import { shallow } from 'vue-test-utils';

describe('App.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(App);
  });

  // => тестим наличие HTML-элементов
  it('should render correct contents', () => {
    expect(wrapper.html()).to.contain('<th>Items</th>');
    expect(wrapper.html()).to.contain(
      '<input type="text" placeholder="Add item..." value="" class="prompt">'
    );
    expect(wrapper.html()).to.contain(
      '<button type="submit" disabled="disabled" class="ui button">Add</button>'
    );
    expect(wrapper.html()).to.contain(
      '<span class="ui label">Remove all</span>'
    );
  });

  // => тестим данные компонента
  it('should set correct default data', () => {
    expect(wrapper.vm.item).to.equal('');
    expect(wrapper.vm.items).to.deep.equal([]);
  });

  // => тестим значение атрибута элемента
  it('should have button Add disabled', () => {
    // => получаем button с классами .ui и .button
    const button = wrapper.find('.ui .button');
    // => ожидаем, что у кнопки атрибут disabled стоит в true
    expect(button.element.disabled).to.be.true;
  });
});
