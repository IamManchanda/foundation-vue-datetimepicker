import Vue from 'vue';
import { DatePicker, TimePicker, TimeSelect } from 'element-datepicker';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import App from './App.vue';

locale.use(lang);

Vue.component(DatePicker.name, DatePicker);
Vue.component(TimePicker.name, TimePicker);
Vue.component(TimeSelect.name, TimeSelect);

new Vue({
  el: '#app',
  render: h => h(App),
});
