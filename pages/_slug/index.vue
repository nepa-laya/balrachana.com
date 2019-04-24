<template>
  <section class="container">
    <div>
      <Header />

      <div class="heading">
        <img :src="section.thumbnail" :alt="section.alt" />
        <div class="text">
          <h1>{{ section.title }}</h1>
          <p v-html="section.description"></p>
        </div>
      </div>
      <div class="children">
        <div v-for="child in section.children" :key="child.title" class="child">
          <h2>{{ child.title }}</h2>
          <youtube :video-id="urlToId(child.youtube)"></youtube>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  },
  computed: {
    section() {
      return this.$store.state.sections[this.slug]
    }
  },
  asyncData({ store, params, error }) {
    if (!(params.slug in store.state.sections)) {
      error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      slug: params.slug
    }
  },
  methods: {
    urlToId(url) {
      console.log(this.$app)
      return this.$youtube.getIdFromURL(url)
    }
  }
}
</script>

<style>
.heading {
  display: flex;
  padding: 1rem;
}
.heading > * {
  padding: 1rem;
}

.children {
  margin: 1rem;
}
</style>
