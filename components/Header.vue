<template>
  <div class="header row">
    <div class="brand">
      <img src="img/bal_rachana.svg" alt="Bal Rachana" />
      <img src="img/nepalaya.svg" alt="nepa~laya" />
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

  img {
    height: 100px;
  }
}

.row {
  display: flex;

  justify-content: space-evenly;
}
</style>
