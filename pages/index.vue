<template>
  <section class="container">
    <div>
      <Header />
      <div class="sections row">
        <nuxt-link v-for="(section, key, index) in sections" :key="section.slug" :to="'/' + (section.slug || '#')">
          <div :style="{ background: getBgColor(index) }" class="section">
            <img :src="section.thumbnail" :alt="section.alt" />
            <h2>
              {{ section.title }}
            </h2>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import { getColor } from '~/plugins/utils'

export default {
  components: {
    Header
  },
  computed: {
    sections() {
      return this.$store.state.sections
    }
  },
  methods: {
    getBgColor(ind) {
      return getColor(ind)
    }
  }
}
</script>

<style lang="scss">
.sections {
  flex-wrap: wrap;
  margin: 1rem;
}
.sections > a {
  text-align: center;
  flex-grow: 1;
  flex-basis: 0;
  min-width: 300px;
  div {
    padding: 1rem 1rem 0 1rem;
  }
  h2 {
    color: #333;
    padding: 1rem;
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
