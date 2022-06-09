<template>
    <div class="memo">
        <div class="act">
            <button class="btn btn-primary" @click="add()">+ 추가</button>
        </div>
        <ul>
            <li v-for="value in state.data" :key="value.id">{{ value.content }}
            <button class="btn btn-primary" style="float:right; background-color: brown;" @click="del(value.id)">삭제</button>
            <button class="btn btn-primary" style="float:right; background-color: coral;" @click="edit(value.id)">수정</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import {reactive} from '@vue/reactivity';
    import axios from "axios";

    export default {
        setup() {

            // 양방향 통신 데이터 변수
            const state = reactive({
                data: []
                });

            // 데이터 추가
            const add = () => {

                const content = prompt("내용을 입력해주세요.");

                if(!content) {
                    alert("내용을 입력해주세요.");
                    add();
                }
                
                axios.post("/api/memos", {content}).then(res => {
                    state.data = res.data;
                })
            };

            // 데이터 수정
            const edit = (id) => {

                const content = prompt("내용을 입력해주세요", state.data.find(value => value.id === id).content);

                axios.put("/api/memos/" + id, {content}).then(res => {
                    state.data = res.data;
                });
            }

            // 데이터 삭제
            const del = (id) => {

                axios.delete("/api/memos/" + id).then(res => {
                    state.data = res.data;
                });
            }

            axios
                .get("/api/memos")
                .then(res => {
                    console.log(res);
                    state.data = res.data;
                });

            return {state, add, edit, del}; 
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