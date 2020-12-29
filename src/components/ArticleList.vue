<template>
    <div>
        ArticleList
    </div>
</template>

<script>
import data from '../../data'

export default {
    name: 'ArticleList',
    data(){
        return {
            articles: data.articles
        }
    },
    methods:{
        // beforeRouteUpdate (to, from, next) {
        //     // react to route changes...
        //     // don't forget to call next()
        // }
    }
}
</script>