<template>
  <section class="container">
    <div>
      <div class="sections row">
        <nuxt-link v-for="(section, key, index) in sections" :key="section.slug" :to="'/' + (section.slug || '#')">
          <div :style="{ background: getBgColor(index) }" class="section" :class="{ disabled: !section.slug }">
            <img :src="section.thumbnail" :alt="section.alt" />
            <div class="title">
              <h2>
                {{ section.title }}
              </h2>
              <h4>{{ section.subtitle }}</h4>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { getColor } from '~/plugins/utils'

export default {
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
  margin: 1rem;
  > a {
    border: 1px solid mistyrose;
    text-align: center;
    flex-grow: 1;
    // min-width: 500px;
    div {
      padding: 1rem 1rem 0 1rem;
    }
    .title {
      color: #333;
      padding: 1rem;
    }
    h4 {
      min-height: 24px;
    }
  }
  img {
    width: 400px;
    padding: 2rem;
    height: 400px;
  }
}
</style>
