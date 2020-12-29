<template>
    <div>
        ArticleList {{tag}}
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-left">
                    <span v-for="(item, index) in filterArticles"  :key="index">
                      <b-card  v-if="item.show"  :title="item.title" :sub-title="item.tags.join(', ')" >
                        <b-card-text>
                        {{index}} - {{item.title}}
                        </b-card-text>

                        <b-card-text>A second paragraph of text in the card.</b-card-text>
                        <router-link :to="{name:'Article', params:{id:index}}">Go to article</router-link>
                        <a href="#" class="card-link">Card link</a>
                        <b-link href="#" class="card-link">Another link</b-link>
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
        // console.log(to)
        this.tag = to.params.tag
        this.filterByTagArticles()
        next()
    },
    methods:{
        filterByTagArticles(){
            this.filterArticles = []
            console.log('filtruj')
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