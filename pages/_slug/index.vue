<template>
  <section class="container">
    <div>
      <Header />

      <h1>{{ section.title }}</h1>
      <img :src="section.thumbnail" :alt="section.alt" />
      <div class="children">
        <div class="child" v-for="child in section.children" :key="child.title">
          <h2>{{ child.title }}</h2>
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
  }
}
</script>

<style></style>
