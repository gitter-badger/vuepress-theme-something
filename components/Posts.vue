<template>
  <div>
    <Post v-for="post in pagerPosts" :key="post.key" :post="post" class="card"></Post>
  </div>
</template>

<script>
import Post from "@theme/components/Post.vue";

export default {
  name: "Posts",
  components: { Post },
  props: {
    posts: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      default: 6
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },

  computed: {
    pagerPosts() {
      const end = this.currentPage * this.pageSize;
      return this.posts.slice(end - this.pageSize, end);
    }
  },

  methods: {
    date(date) {
      let time = date ? new Date(date) : new Date();
      return time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate();
    }
  }
};
</script>

<style lang="stylus" scoped>
.card
  margin-bottom 20px
</style>