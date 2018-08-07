const prefixCls = 'i-radio';

Component({
  externalClasses: ['i-class'],
  relations: {
    '../radio-group/index': {
      type: 'parent'
    }
  },
  properties: {
    value: {
      type: String,
      value: ''
    },
    checked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: '#d91e18'
    },
    position: {
      type: String,
      value: 'left',
      observer: 'setPosition'
    },
    valueSlot: {
      type: Boolean,
      value: false
    }
  },
  data: {
    checked: true,
    positionCls: `${prefixCls}-radio-left`,
  },
  attached() {
    this.setPosition();
  },
  methods: {
    changeCurrent(current) {
      this.setData({ checked: current });
    },
    radioChange() {
      if (this.data.disabled) return;
      const item = { current: !this.data.checked, value: this.data.value };
      const parent = this.getRelationNodes('../radio-group/index')[0];
      console.log(parent, item);
      parent ? parent.emitEvent(item) : this.triggerEvent('change', item);
    },
    setPosition() {
      this.setData({
        positionCls: this.data.position.indexOf('left') !== -1 ? `${prefixCls}-radio-left` : `${prefixCls}-radio-right`,
      });
    }
  }
});
