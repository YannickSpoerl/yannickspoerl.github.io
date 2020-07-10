<template>
  <div class="content-wrapper-main">
    <vue-scroll-snap>
      <div id="hello" class="item">
        <Hello/>
      </div>
      <div id="me" class="item light">
        <Me/>
      </div>
      <div id="socials" class="item">
        <Socials/>
      </div>
      <div id="blog" class="item light">
        <Blog/>
      </div>
      <div id="apps" class="item">
        <Apps/>
      </div>
      <div id="resume" class="item light">
        <Resume/>
      </div>
      <div id="end" class="item">
        <End/>
      </div>
    </vue-scroll-snap>
  </div>
</template>

<script>
import VueScrollSnap from 'vue-scroll-snap'

export default {
  name: 'Main',
  components: {
    VueScrollSnap
  }
}
</script>

<style lang="stylus">
@import '~assets/style/index'

.content-wrapper-main
  padding-top: 80px
  width: 100%
  height: 100%
  margin 0

  @media (max-width: $MQMobile)
    &
      padding 65px 0 0 0
      min-height calc(100vh - 20px - 60px - 60px)

p.text
  font-size 22px
  @media (max-width: $MQMobile)
    &
      font-size 14px

h1.text
  font-size 41px
  @media (max-width: $MQMobile)
    &
      font-size 28px

h3.text
  font-size 28px
  @media (max-width: $MQMobile)
    &
      font-size 20px

.item
  min-height calc(100vh - 80px - 62px)
  @media (max-width: $MQMobile)
    &
      padding 65px 0 0px 0
      min-height calc(100vh - 110px - 63px)

.scroll-snap-container
  width 100%
  height calc(100vh - 80px - 62px)
  @media (max-width: $MQMobile)
    &
      padding 65px 0 0px 0
      height calc(100vh - 110px - 63px)

.dark
  background-color #435466
  color #ffffff


.light
  background-color: #4dba87
  color #ffffff

.panel
  display flex
  justify-content center
  flex-direction column
  text-align center
  height calc(100vh - 80px - 62px)
  @media (max-width: $MQMobile)
    &
      height calc(100vh - 110px - 63px)

.nav-link
  text-decoration none
    
.button
    display inline-block
    font-size 1.2rem
    color #fff
    background-color $accentColor
    padding 0.8rem 1.6rem
    border-radius 4px
    transition background-color .1s ease
    box-sizing border-box
    border-bottom 1px solid darken($accentColor, 10%)

    &:hover
      background-color lighten($accentColor, 10%)

      @media (max-width: $MQMobileNarrow)
        font-size 1rem
        padding 0.6rem 1.2rem

.button.nav-link
  &:hover, &.router-link-active
    color #fff

</style>