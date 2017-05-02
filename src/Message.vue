<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>msgIntro : {{ msgIntroParent }}</h2>
    <hr>
      <h3> Parent Anoter One : {{ parentAnotherOne }} </h3>
    <hr>
    <app-input :toChild="parentAnotherOne" :msg="message" :getModel="someModel" @anotherOneChange="parentAnotherOne = $event" @messageChange="message = $event" :somedatas="somedata" :somefunc="logdata"></app-input>
    <introduce :msgIntro="msgIntroParent" @newMessage="msgIntroParent = $event"></introduce>
    <div v-on:click="checkNewValModel">check new value model</div>
  </div>
</template>

<script>
  import Input from './Input.vue'

  export default {
    data () {
      return {
        parentAnotherOne: 'parentAnotherOne',
        lastdata: 'the last knight',
        msgIntroParent: 'Message From Parent to Introduce',
        message: 'This is a great Message!',
        somedata: 'Some Data',
        someModel: 'audi',
        parentProp: this,
        logdata: function () {
          console.log(new Date())
        }
      }
    },
    components: {
      'app-input': Input
    },
    methods: {
      checkNewValModel: function () {
        console.log(this.someModel)
      }
    }
  }
</script>
