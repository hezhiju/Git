<template>
    <div class="web">
        <div>pc端网页</div>
        <div class="uk-child-width-1-2@s uk-grid-small" uk-grid>
            <div>
                <div class="uk-overflow-hidden">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584186833858&di=46e95a335468fbe990f592ee7827f2f2&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F21%2F09%2F01200000026352136359091694357.jpg" alt="Example image" uk-scrollspy="cls: uk-animation-kenburns; repeat: true">
                </div>
            </div>
            <div>
                <div class="uk-overflow-hidden">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584186833858&di=46e95a335468fbe990f592ee7827f2f2&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F21%2F09%2F01200000026352136359091694357.jpg" alt="Example image" class="uk-animation-reverse uk-transform-origin-top-right" uk-scrollspy="cls: uk-animation-kenburns; repeat: true">
                </div>
            </div>
        </div>
        <ul class="uk-breadcrumb">
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-disabled"><a>Disabled</a></li>
            <li><span>Active</span></li>
        </ul>

        <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid>
            <div class="uk-text-center">
                <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                    <img :src="img" alt="">
                    <div class="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                        <p class="uk-h4 uk-margin-remove">Fade</p>
                    </div>
                </div>
                <p class="uk-margin-small-top">Fade</p>
            </div>
            <div class="uk-text-center">
                <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                    <img :src="img" alt="">
                    <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                        <p class="uk-h4 uk-margin-remove">Bottom</p>
                    </div>
                </div>
                <p class="uk-margin-small-top">Bottom</p>
            </div>
            <div class="uk-text-center">
                <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <img :src="img" alt="">
                    <div class="uk-position-center">
                        <span class="uk-transition-fade" uk-icon="icon: plus; ratio: 2"></span>
                    </div>
                </div>
                <p class="uk-margin-small-top">Icon</p>
            </div>
            <div class="uk-text-center">
                <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                    <img :src="img" alt="">
                    <img class="uk-transition-scale-up uk-position-cover" :src="img" alt="">
                </div>
                <p class="uk-margin-small-top">2 Images</p>
            </div>
            <div class="uk-text-center">
                <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                    <img class="uk-transition-scale-up uk-transition-opaque" :src="img" alt="">
                </div>
                <p class="uk-margin-small-top">Scale Up Image</p>
            </div>
            <div class="uk-text-center">
                <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                    <img :src="img" alt="">
                    <div class="uk-position-center">
                        <div class="uk-transition-slide-top-small"><h4 class="uk-margin-remove">Headline</h4></div>
                        <div class="uk-transition-slide-bottom-small"><h4 class="uk-margin-remove">Subheadline</h4></div>
                    </div>
                </div>
                <p class="uk-margin-small-top">Small Top + Bottom</p>
            </div>
        </div>
        <div class="uk-cover-container">
            <img :src="img" alt="" uk-cover>
            <p>要使图像覆盖其父元素，请将.uk-cover-container类添加到父元素，并将 uk-cover属性添加到图像。</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'web',
  props: ['id'],
  data (){
    return {
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584186833858&di=46e95a335468fbe990f592ee7827f2f2&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F21%2F09%2F01200000026352136359091694357.jpg'
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    alert(this.$route.params.id);
  },
  methods:{
     
  }
}
</script>

<style scoped>

</style>