<template>
  <div class="content-wrapper">
    <div style="text-align: center">
        <h1>{{ $t('sleep.title') }}</h1>
        <ul style="list-style:none">
            <li v-for="(file, index) in audios" :key="index" style="margin: 30px">
                <h3 class="audio-title">{{ file.name }}
                    (<a :href="file.path" download>Download</a>)
                </h3>
                <audio controls style="width: 100%">
                    <source :src="file.path" type="audio/mp3"/>
                </audio>
                <hr v-if="index !== audios.length - 1"/>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Sleep',
    computed: {
        audios () {
            const files = []
            const filePaths = require.context('@/static/audio')
            filePaths.keys().forEach(file => {
                files.push({
                    path: '/audio' + file.substring(1),
                    name: file.substring(2).split('.')[0]
                })  
            })
            return files.sort((file1, file2) => {
                return file2.name.localeCompare(file1.name)
            })
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