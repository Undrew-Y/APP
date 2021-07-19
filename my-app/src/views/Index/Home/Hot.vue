<template>
    <ul class="movie-list">
        <movie-item></movie-item>
    </ul>
</template>

<script>
import MovieItem from '@/components/MovieItem'
export default {
    components: {
        MovieItem
    }
}

</script>
<style scoped>
.movie-list {
    padding-left: 0.12rem;
}
</style>