<template>
  <div class="panel">
    <div style="margin-top: -60px">
      <h1 class="text">{{ $t('resume.title') }}</h1>
      <h1 class="text" v-html="$t('resume.subtitle')"/>
      <a class="button nav-link" href="#end">
        {{ $t('resume.button') }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'resume'
}
</script>

<style scoped lang="stylus">
@import '~assets/style/index'

.external
  color #fff
  text-decoration-line none
  &:hover
    color #fff

.button
    text-decoration-line none
    border-bottom 1px solid darken(#fff, 10%)
    color $accentColor
    background-color #fff
    &:hover
      background-color #fff

.button.nav-link
  &:hover, &.router-link-active
    color $accentColor

</style>