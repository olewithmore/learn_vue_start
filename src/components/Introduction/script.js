/**
 * Created by olewithmore on 18/2/2560.
 */

export default {
  name: 'Introduce',
  props: ['msgIntro'],
  data () {
    var slogan = 'Welcome to Your Vue.js App'.split('').reverse().join('')
    return {
      introMessage: 'introMessage',
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  },
  methods: {
    reverseMessage: function (event){
      this.introMessage = event.target.value
      this.$emit('newMessage', this.introMessage)
    }
  }
}
