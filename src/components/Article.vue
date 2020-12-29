<template>
    <div>
        Article id:{{articleId}}
    </div>
</template>

<script>
import data from '../../data'

export default {
    name: 'Article',
    data(){
        return {
            articleId: 0,
            articles: data.articles
        }
    },
    mounted(){
        this.articleId = this.$route.params.id
    },
    
}
</script>