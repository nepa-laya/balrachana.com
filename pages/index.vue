<template>
  <section class="container">
    <div>
      <Header />
      <div class="sections row">
        <div v-for="section in sections" :key="section.slug" :style="{ background: section.color }" class="section">
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
export default {
  components: {
    Header
  },
  computed: {
    sections() {
      return this.$store.state.sections
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
