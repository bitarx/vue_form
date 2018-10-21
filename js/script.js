const dateFormat = /^[0-9]{4}\/[0-9]{1,2}\/[0-9]{1,2}$/
const numberFormat = /[0-9]/

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
      maxLength: 10,
  },
  computed: {
    validation() {
      const edit = this.edit
      return {
        attach_num  : (!!edit.attach_num && edit.attach_num.length <= this.maxLength
                       && numberFormat.test(edit.attach_num)),
        new_attach_num  : (!!edit.new_attach_num && edit.new_attach_num.length <= this.maxLength
                           && numberFormat.test(edit.new_attach_num)),
        removal  : (!!edit.removal && edit.removal.length <= this.maxLength && numberFormat.test(edit.removal)),
        relocate  : (!!edit.relocate && edit.relocate.length <= this.maxLength
                     && numberFormat.test(edit.relocate)),
        reserve_date: (!!edit.reserve_date && dateFormat.test(edit.reserve_date))
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
