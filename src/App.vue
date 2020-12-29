<template>
  <div id="app">
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <div class="row">
        <!-- <b-button v-for="tag in tags" :key="tag">{{tag}}</b-button> -->
        <div class="col-sm-4">
          <img alt="Vue logo" src="./assets/icon.png" width="100">
        </div>
        <div class="col-sm-8">
              <b-button-group>
                <router-link class="btn btn-info" v-for="tag in tags" :key="tag" :to="{name:'ArticleList', params:{tag:tag}}">{{tag}}</router-link>
            </b-button-group>
        </div>
      </div>
      <hr>
    </div>
    
    <!-- <router-link :to="{name:'Article', params:{id:0}}">Go to Foo1</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import data from '../data'

export default {
  name: 'App',
  data(){
    return {
      tags:[],
      articles: data.articles
    }
  },
  mounted(){
    this.getTagList()
  },
  components: {
    // HelloWorld
  },
  methods:{
    getTagList(){
      let unique = []
      for (let i in this.articles) {
        unique = unique.concat(this.articles[i].tags)
        unique = unique.filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
      }
      this.tags = unique
    }
  }
}
</script>

<style lang="scss">

@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
