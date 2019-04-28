<template>
  <section class="container">
    <div>
      <div class="heading">
        <img :src="section.thumbnail" :alt="section.alt" />
        <div class="text">
          <h1>{{ section.title }}</h1>
          <p v-html="section.description"></p>
        </div>
      </div>
      <div class="children">
        <div v-for="child in section.children" :key="child.title" class="child">
          <vue-plyr>
            <div data-plyr-provider="youtube" :data-plyr-embed-id="urlToId(child.youtube)"></div>
          </vue-plyr>
          <h2>{{ child.title }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { youtubeParser } from '~/plugins/utils'
export default {
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
      return youtubeParser(url)
    }
  }
}
</script>

<style lang="scss">
.heading {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  img {
    width: 200px;
    height: 200px;
  }
  h1 {
    padding: 1rem 0;
  }
}
.heading > * {
  padding: 1rem;
}

.children {
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
}

.child {
  margin: 1rem;
  flex-grow: 1;
  flex-basis: 0;
  background: #ddd;
  text-align: center;
  max-width: 500px;

  h2 {
    padding: 1rem;
  }
}

.plyr--video {
  max-width: 500px;
}
</style>
