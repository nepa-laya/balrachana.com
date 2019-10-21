<template>
  <section class="container">
    <div>
      <div class="sections row">
        <nuxt-link v-for="section in sections" :key="section.slug" :to="'/' + (section.slug || '#')">
          <div class="section" :class="{ disabled: !section.slug }">
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
// import { getColor } from '~/plugins/utils'

export default {
  head() {
    return {
      meta: [
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  },
  computed: {
    sections() {
      return this.$store.state.sections
    }
  }
}
</script>

<style lang="scss">
.sections {
  margin: 1rem;
  > a {
    text-align: center;
    flex-grow: 1;
    // min-width: 500px;
    background: rgba(200, 210, 57, 0.4);
    box-shadow: 0 0 12px 1px #df7626;
    margin: 1rem;
    border-radius: 1rem;
    div {
      padding: 1rem 1rem 0 1rem;
    }
    .title {
      padding: 1rem;
    }
    h4 {
      min-height: 24px;
    }
  }
  img {
    width: 300px;
    padding: 2rem;
    height: 300px;
  }
}
</style>
