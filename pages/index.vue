<template>
  <section class="container">
    <div>
      <Header />
      <div class="sections row">
        <div v-for="(section, key, index) in sections" :key="section.slug" :style="{ background: getBgColor(index) }" class="section">
          <img :src="section.thumbnail" :alt="section.alt" />
          <h3>
            <small>{{ section.title }}</small>
          </h3>
        </div>
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
      console.log(ind)
      return getColor(ind)
    }
  }
}
</script>

<style>
.sections > div {
  text-align: center;
  padding: 1rem;
  flex-grow: 1;
  flex-basis: 0;
}
</style>
