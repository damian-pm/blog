<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
            <p >
                Article id:{{articleId}}
            </p>
            <p class="text-left" v-html="content"></p>
                </div>
        </div>
    </div>
</template>

<script>
import data from '../../data'
import showdown from 'showdown'
import $ from 'jquery'

export default {
    name: 'Article',
    data(){
        return {
            content: '',
            articleId: 0,
            articles: data.articles,
            currentArticle: {}
        }
    },
    mounted(){
        this.articleId = this.$route.params.id
        this.displayContent()
    },
    beforeRouteUpdate(to, from, next){
        // console.log(to)
        this.articleId = to.params.id
        next()
    },
    methods:{
        async displayContent(){
            this.getArticleById()
        
            let data = await $.ajax({
                methods: 'GET',
                url: '/articles/' + this.currentArticle.file
            })
            let converter = new showdown.Converter()
            this.content = converter.makeHtml(data);
        },
        getArticleById(){
            for (let i in this.articles) {
                if (i == this.articleId) {
                    this.currentArticle = this.articles[i]
                }
            }
            return false
        },
    }
}
</script>