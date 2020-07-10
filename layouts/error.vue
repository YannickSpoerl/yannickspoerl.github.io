<template>
  <div class="content-wrapper">
      <div class="content__default" style="text-align: center">
        <h1>{{ $t('error.title') }}</h1>
        <br/>
        <a class="button nav-link" :href="localePath('/')">
          {{ $t('error.button') }}
        </a>
      </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>
<style lang="stylus">
@import '~assets/style/index'
.content-wrapper
  padding 160px 15px 80px 15px
  min-height calc(100vh - 80px - 60px - 160px)
  max-width $contentWidth
  margin 0 auto

  @media (max-width: $MQMobile)
    &
      padding 100px 15px 20px 15px
      min-height calc(100vh - 20px - 60px - 100px)
</style>