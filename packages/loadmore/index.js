Component({
  externalClasses: ['loadmore-class'],

  properties: {
    type: {
      type: String,
      value: 'loading'
    },
    text: {
      type: String,
      value: ''
    },
    customContent: {
      type: Boolean,
      value: false
    }
  }
});
