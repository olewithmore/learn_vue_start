<template>
  <div>
    <input type="text" v-bind:value="msg" v-on:input="changeMessage">
    <p>{{ message }}</p>
    <ul>
      <li v-for="person in persons" v-bind:class="person.classColor" @click="person.getClick">{{ person.name }}</li>
    </ul>
    <button v-on:click="somefunc" v-bind:class="somedatas">Pop</button>
    <br>
    <input type="text" v-on:input="bindingdata = $event.target.value">
    <span v-bind:class="bindingdata">{{ bindingdata }}</span>

    <div>
      <button v-on:click="increments">Increment</button>
      <p> Counter : {{ conternum }}</p>
      <p> Click : {{ clicknum }}</p>
    </div>

    <div>
      <button v-on:click="show = !show">Show/Hide</button>
      <p v-if="show">Hello I'm Show.</p>
      <p v-else>Hello I'm Fuck.</p>
      <p v-show="show"> I Will Show same.</p>
    </div>
    <hr>

    <div>
      Another One : {{ ano }}
      <div>
        <input type="text" v-bind:value="toChild" v-on:input="changeAnotherOne"  >
      </div>
    </div>

    <select v-model="getModel" v-on:change="testChange">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>

    <hr>
  </div>
</template>

<script>
  export default {
    props: ['msg', 'somedatas', 'somefunc', 'toChild', 'getModel'],
    data () {
      return {
        ano: 'declare Another one',
        show: true,
        clicknum: 0,
        bindingdata: 'Binding Data',
        message: 'booH',
        persons: [
          { name: 'joke',
            classColor: 'redClass',
            getClick: function (event) {
              console.log(event.target.getAttribute('class'))
            }
          },
          { name: 'jack',
            classColor: 'blueClass',
            getClick: function () {
              console.log(this.classColor)
            }
          },
          { name: 'pop',
            classColor: 'blackClass',
            getClick: function () {
              console.log(this.classColor)
            }
          },
          { name: 'Iu',
            classColor: 'yellowClass',
            getClick: function () {
              console.log(this.classColor)
            }
          }
        ]
      }
    },
    computed: {
      conternum () {
        return this.clicknum * 2
      }
    },
    methods: {
      changeAnotherOne (event) {
        this.ano = event.target.value
        this.$emit('anotherOneChange', this.ano)
      },
      bindingdataMeth (event) {
        this.bindingdata = event.target.value
      },
      popdata () {
        console.log('del : ' + this.persons.pop().name)
      },
      changeMessage (event) {
        this.message = event.target.value
        this.$emit('messageChange', this.message)
      },
      increments () {
        this.clicknum++
      },
      testChange () {
        console.log('change')
      }
    },
    filters: {
      upperFirst (val) {
        if (!val) return 'string not found'
        return val.split(' ').map((val, index, arr) => {
          if (!val) return ''
          return val[0].toLocaleUpperCase() + val.substr(1)
        }).join(' ')
      }
    }
  }
</script>

<style>
  .Some{
    color: red;
  }

  .redClass{
    background-color: red;
    color:white;
  }

  .blueClass{
    background-color: cornflowerblue;
    color:white;
  }

  .blackClass{
    background-color: black;
    color:hotpink;
  }

  .yellowClass{
    background-color: yellow;
    color:black;
  }
</style>
