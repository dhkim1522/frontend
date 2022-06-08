<template>
  <div class="ground">
    <MemoHeader></MemoHeader>
    <Memo></Memo>
    <MemoFooter></MemoFooter>
  </div>
</template>

<script>
import MemoHeader from './Header.vue'
import MemoFooter from './Footer.vue'
import Memo from './Memo.vue'

export default {
  components:{ MemoHeader, MemoFooter, Memo }
}
</script>