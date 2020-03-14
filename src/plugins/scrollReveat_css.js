import ScrollReveal from 'scrollreveal';

const S = new ScrollReveal({ reset: true });
export default {
    ScrollCss() {
        // scrollReveal动画插件
        S.reveal('.reveal-top', {
            // 动画的时长
            duration: 1000,
            // 延迟时间
            delay: 500,
            // 动画开始的位置，'bottom', 'left', 'top', 'right'
            origin: 'top',
            // 回滚的时候是否再次触发动画
            reset: true,
            // 在移动端是否使用动画
            mobile: true,
            // 滚动的距离，单位可以用%，rem等
            distance: '100px',
            // 其他可用的动画效果
            opacity: 0,
            easing: 'linear',
        });
        S.reveal('.reveal-bottom', {
            duration: 1000,
            delay: 500,
            origin: 'bottom',
            reset: true,
            mobile: true,
            distance: '100px',
            opacity: 0,
            easing: 'linear',
        });
        S.reveal('.reveal-left', {
            duration: 1000,
            delay: 500,
            origin: 'left',
            reset: true,
            mobile: true,
            distance: '100px',
            opacity: 0,
            easing: 'linear',
        });
        S.reveal('.reveal-right', {
            duration: 1000,
            delay: 500,
            origin: 'right',
            reset: true,
            mobile: true,
            distance: '100px',
            opacity: 0,
            easing: 'linear',
        });
    },
};
