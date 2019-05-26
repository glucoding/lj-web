<template>
    <v-footer
            height="auto"
            color="light-blue darken-4" dark
    >
        <v-layout
                justify-center
                row
                wrap
        >
            <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    flat
                    round
            >
                {{ link }}
            </v-btn>
            <v-flex
                    primary
                    darken-2
                    py-3
                    text-xs-center
                    white--text
                    xs12
            >
                &copy;2019 — <strong>丽江市工信委</strong>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({
            links: [
                'Home',
                '关于',
                '开发者',
                '服务',
                '丽江市工信局',
                '联系我们'
            ]
        })
    }
</script>