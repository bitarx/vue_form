
new Vue({
  el: '#app',
  data: {
      edit: {
        attach_num  : '',
        new_attach_num : '',
        removal : '',
        relocate : '',
        reserve_date : '',
      },
      maxLength: 10
  },
  computed: {
    validation() {
      const edit = this.edit
      return {
        attach_num  : (!!edit.attach_num && edit.attach_num.length <= this.maxLength),
        new_attach_num  : (!!edit.new_attach_num && edit.new_attach_num.length <= this.maxLength),
        removal  : (!!edit.removal && edit.removal.length <= this.maxLength),
        relocate  : (!!edit.relocate && edit.relocate.length <= this.maxLength),
        reserve_date: (!!edit.reserve_date)
      }
    },
    isValid() {
      const validation = this.validation
      return Object
        .keys(validation)
        .every(function (key) {
          return validation[key]
      })
    }
  },
  methods: {
    errorClassObject(key) {
      return {
        'has-error': (this.validation[key] == false)
      }
    },
    doSubmit() {
console.log('aaa');
    }
  }
})
