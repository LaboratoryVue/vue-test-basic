import Vue from 'vue';
import App from '@/App';

describe('App.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App);
    const wm = new Constructor().$mount();
    expect(wm.$el.querySelector('.ui .selectable thead tr th').textContent).to.contain('Items')
    expect(wm.$el.querySelector('.ui .button').textContent).to.contain('Add')
    expect(wm.$el.querySelector('.ui .label').textContent).to.contain('Remove all')
  });
  it('should set correct default data', () => {
    // => функция data возвращает объект компонента App
    const initData = App.data();
    // => ожидаем, что свойство item объекта initData является пустой строкой
    expect(initData.item).to.equal('');
    // => ожидаем, что свойство items объекта initData является пустым массивом
    // => deep.equal - deep для сравнения объектов, ибо объекты ссылочные типы данных и простое сравнение здесь не сработает
    expect(initData.items).to.deep.equal([]);
  });
});
