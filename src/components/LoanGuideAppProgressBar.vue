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
                            意向申请已提交，正在受理中
                        </v-card-text>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item
                        :color="greenState"
                        large
                >
                    <template v-slot:opposite>
                        <span>2019年5月30日</span>
                    </template>
                    <v-card class="elevation-2">
                        <v-card-title class="headline">县区审批</v-card-title>
                        <v-card-text>
                            您的申请已通过县区主管部门审查。
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
                        <v-card-title class="headline">县区领导小组审批</v-card-title>
                        <v-card-text>
                            您的申请已通过县区领导小组审查。
                        </v-card-text>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item
                        :color="grayState"
                        large
                >
                    <template v-slot:opposite>
                        <span>2019年5月30日</span>
                    </template>
                    <v-card class="elevation-2">
                        <v-card-title class="headline">市级审批</v-card-title>
                        <v-card-text>
                            您的申请已通过市级主管部门审查。
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
                        <v-card-title class="headline">市级复核</v-card-title>
                        <v-card-text>
                            您的申请已通过市级复核。
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
                        <v-card-title class="headline">市领导小组审批</v-card-title>
                        <v-card-text>
                            您的申请已通过市级领导小组审批。
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