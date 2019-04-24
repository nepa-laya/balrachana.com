<template>
  <div class="header row">
    <div class="brand row">
      <nuxt-link to="/">
        <img src="img/nepalaya.svg" alt="nepa~laya" />
        <img src="img/bal_rachana.svg" alt="Bal Rachana" />
      </nuxt-link>
    </div>

    <div id="yt-sub">
      <script src="https://apis.google.com/js/platform.js"></script>
      <div class="g-ytsubscribe" data-channelid="UC2U1J-waGLHzHb9MI6kCkSw" data-layout="full" data-count="default"></div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  align-items: center;
  min-height: 100px;
  justify-content: space-between;
  text-align: center;
  background: #fff;
  margin-bottom: 1rem;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

  img {
    height: 50px;
    margin: 0 1rem;
  }
}

img {
  max-width: 100%;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

body {
  background: #e8ebf0;
}

#yt-sub {
  min-width: 174px;
  min-height: 52px;
  margin: 0 auto;
}
</style>
