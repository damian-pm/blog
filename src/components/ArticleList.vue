<template>
    <div>
        
        <div class="container">
            <div class="row">
                <div class="col-sm-12 h2">
                    {{tag}}
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 text-left">
                    <span class="art-card" v-for="(item, index) in filterArticles"  :key="index">
                      <b-card  v-if="item.show"  :title="item.title" :sub-title="item.tags.join(', ')" >
                            <b-card-text>{{item.description}}</b-card-text>
                            <router-link :to="{name:'Article', params:{id:index}}">Go to article</router-link>
                        </b-card>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../../data'

export default {
    name: 'ArticleList',
    data(){
        return {
            tag: '',
            articles: data.articles,
            filterArticles: []
        }
    },
    mounted(){
        this.tag = this.$route.params.tag
        this.filterByTagArticles()
    },
    beforeRouteUpdate(to, from, next){
        this.tag = to.params.tag
        this.filterByTagArticles()
        next()
    },
    methods:{
        filterByTagArticles(){
            this.filterArticles = []
            let art = {}
            for (let i in this.articles) {
                art = this.articles[i]
                if (art.tags.indexOf(this.tag) != -1) {
                    art.show = true
                } else {
                    art.show = false
                }
                this.filterArticles.push(art)
            }
        }
        
    }
}
</script>

<style scoped>
.art-card {
    margin:10px;
}
</style>