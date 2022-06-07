<template>
    <div class="memo">
        <div class="act">
            <button class="btn btn-primary" @click="add()">+ 추가</button>
        </div>
        <ul>
            <li v-for="(value, idx) in state.data" :key="idx">{{ value }}</li>
        </ul>
    </div>
</template>

<script>
    import {reactive} from '@vue/reactivity';
    //import axios from "axios";

    export default {
        setup() {

            const state = reactive({data: []})

            const add = () => {
                state
                    .data
                    .push("추가된 메모 내용");
                console.log(state.data);
            };

        /* axios
            .get("/api/memos")
            .then((res) => {
                console.log(res);
            });

            return {state, add}; */
        }

    }
</script>

<style lang="scss" scoped="scoped">
    .memo {
        .act {
            padding: 10px 5px 0;
            text-align: right;
        }

        ul {
            border-top: solid #eee;
            list-style: none;
            padding: 15px 0;
            margin: 0;

            li {
                padding: 15px;
                margin: 5px;
                border: 1px solid #eee;
            }
        }
    }
</style>