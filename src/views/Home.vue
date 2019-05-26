<template>
    <span>
        <home-hero></home-hero>
        <home-details></home-details>
        <news-notifications></news-notifications>
        <home-plans></home-plans>
        <footer-bar></footer-bar>
    </span>
</template>

<script>
    import HomeHero from '@/components/HomeHero';
    import HomeDetails from '@/components/HomeDetails';
    import HomePlans from '@/components/HomePlans';
    import NewsNotifications from '@/components/NewsNotifications';
    import FooterBar from '@/components/FooterBar'

    export default {
        name: 'home',
        components: {
            HomeHero,
            HomeDetails,
            NewsNotifications,
            HomePlans,
            FooterBar
        }
    };
</script>