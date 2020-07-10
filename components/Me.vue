<template>
  <div class="panel">
    <div style="margin-top: -60px">
      <h1 class="text">{{ $t('me.title') }}</h1>
      <h3 class="text">{{ $t('me.subtitle') }}</h3>
      <p class="text">{{ $t('me.text1') }}</p>
      <p class="text">{{ $t('me.text2') }}</p>
      <p class="text">{{ $t('me.text3') }}</p>
      <a class="button nav-link" href="#socials">
        {{ $t('me.button') }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'me'
}
</script>

<style scoped lang="stylus">
@import '~assets/style/index'

.button
    text-decoration-line none
    color $accentColor
    background-color #fff
    border-bottom 1px solid darken(#fff, 10%)
    &:hover
      background-color #fff

.button.nav-link
  &:hover, &.router-link-active
    color $accentColor
</style>