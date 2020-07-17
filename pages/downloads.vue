<template>
  <div class="content-wrapper">
    <div style="text-align: center">
        <h1>{{ $t('downloads.title') }}</h1>
        <ul>
            <li v-for="(file, index) in downloads" :key="index">
                <a :href="file.path" download>{{ file.name }}</a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Downloads',
    computed: {
        downloads () {
            const files = []
            const filePaths = require.context('@/static/downloads/')
            filePaths.keys().forEach(file => {
                files.push({
                    path: '/downloads' + file.substring(1),
                    name: file.substring(2)
                })  
            })
            return files
        }
    }
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