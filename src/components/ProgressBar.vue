<template>
    <v-layout>
    <v-flex ma-3>
    <v-timeline>
        <v-timeline-item
                :color="greenState"
                large
        >
            <template v-slot:opposite>
                <span>2019年5月29日</span>
            </template>
            <v-card class="elevation-2">
                <v-card-title class="headline">申请提交</v-card-title>
                <v-card-text>
                    意向申请已提交，银行正在受理中
                </v-card-text>
            </v-card>
        </v-timeline-item>

        <v-timeline-item
                :color="redState"
                large
        >
            <template v-slot:opposite>
                <span>2019年5月30日</span>
            </template>
            <v-card class="elevation-2">
                <v-card-title class="headline">进入审批</v-card-title>
                <v-card-text>
                    意向申请通过审查，进入正式审批流程。
                </v-card-text>
            </v-card>
        </v-timeline-item>

        <v-timeline-item
                :color="grayState"
                large
        >
            <template v-slot:opposite>
                <span>2019年6月1日</span>
            </template>
            <v-card class="elevation-2">
                <v-card-title class="headline">贷款批准</v-card-title>
                <v-card-text>
                    您提交的材料已经通过了银行审批，正在等待放款。
                </v-card-text>
            </v-card>
        </v-timeline-item>

        <v-timeline-item
                :color="grayState"
                large
        >
            <template v-slot:opposite>
                <span>2019年6月2日</span>
            </template>
            <v-card class="elevation-2">
                <v-card-title class="headline">贷款发放</v-card-title>
                <v-card-text>
                    您的贷款已发放到你在银行开立的账户，请您查看确认。
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline>
    </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data: () => ({
            greenState: 'green lighten-2',
            redState: 'red lighten-2',
            grayState: 'gray lighten-2'
        }),
        methods: {
            initialize() {

            }
        }
    }
</script>