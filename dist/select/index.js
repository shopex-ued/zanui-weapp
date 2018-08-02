'use strict';

Component({
  properties: {
    items: {
      type: Array,
      value: []
    },
    name: {
      type: String,
      value: ''
    },
    checkedValue: {
      type: String,
      value: ''
    },
    activeColor: {
      type: String,
      value: '#ff4444'
    }
  },

  methods: {
    handleSelectChange: function handleSelectChange(_ref) {
      var detail = _ref.detail;
      var value = detail.value;

      this.triggerEvent('change', { value: value });
    }
  }
});