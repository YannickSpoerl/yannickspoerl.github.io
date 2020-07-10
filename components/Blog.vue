<template>
  <div class="panel">
    <div style="margin-top: -60px">
      <h1 class="text">{{ $t('blog.title') }}</h1>
      <h1 class="text">{{ $t('blog.subtitle') }}</h1>
      <p class="text">{{ $t('blog.text1') }}</p>
      <p class="text">{{ $t('blog.text2') }}</p>
      <a class="external" href="https://blog.yannickspoerl.de" target="_blank">
        <h1 class="text">👉 blog.yannickspoerl.de</h1>
      </a>
      <br/>
      <a class="button nav-link" href="#apps">
        {{ $t('blog.button') }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog'
}
</script>

<style scoped lang="stylus">
@import ' ~assets/style/index'

.external
  color #fff
  text-decoration-line none
  &:hover
    color #fff

.button
    text-decoration-line none
    color $accentColor
    border-bottom 1px solid darken(#fff, 10%)
    background-color #fff
    &:hover
      background-color #fff

.button.nav-link
  &:hover, &.router-link-active
    color $accentColor
</style>