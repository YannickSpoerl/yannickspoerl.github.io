<template>
  <div id="vuepress-theme-blog__global-layout">
    <Header/>
    <MobileHeader :is-open="isMobileHeaderOpen"
      @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"/>
      <div :class="$router.currentRoute.path === '/' ? 'content-wrapper-main' : 'content-wrapper'"
        @click="isMobileHeaderOpen = false">
        <nuxt/>
      </div>
    <Footer/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isMobileHeaderOpen: false,
    }
  },
  mounted() {
    this.isMobileHeaderOpen = false
  },
}
</script>

<style lang="stylus">
@import '~assets/style/index'

#vuepress-theme-blog__global-layout
  word-wrap break-word

.content-wrapper
  padding 160px 15px 80px 15px
  min-height calc(100vh - 80px - 60px - 160px)
  max-width $contentWidth
  margin 0 auto

  @media (max-width: $MQMobile)
    &
      padding 100px 15px 20px 15px
      min-height calc(100vh - 20px - 60px - 100px)

.content-wrapper-main
  padding-top: 80px
  width: 100%
  height: 100%
  margin 0

  @media (max-width: $MQMobile)
    &
      padding 65px 0 0 0
      min-height calc(100vh - 20px - 60px - 60px)
</style>
