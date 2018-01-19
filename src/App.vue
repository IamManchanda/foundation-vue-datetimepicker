<template>
  <div id="app">
    <el-date-picker
      v-model="pickDate"
      type="datetime"
      placeholder="Select date and time"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      pickerOptions1: {
        shortcuts: [{
          text: 'Today',
          onClick(picker) {
            picker.$emit('pick', new Date());
          },
        }, {
          text: 'Yesterday',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - (3600 * 1000 * 24));
            picker.$emit('pick', date);
          },
        }, {
          text: 'A week ago',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - (3600 * 1000 * 24 * 7));
            picker.$emit('pick', date);
          },
        }],
      },
      pickDate: '',
    };
  },
};
</script>

<style lang="scss">
body {
  padding: 2rem;
}
</style>
