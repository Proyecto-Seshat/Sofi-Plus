<template>
  <q-card>
    <q-card-section class="row items-center justify-center">
      <span class="col text-center">
        {{question.question}}
      </span>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <q-item :class="{
          'col': true, 'response-selector': true,  'q-ma-xs': true, 'correct-answer': select === 'A'
        }" clickable @click="selectAnswer('A')">
          <q-item-label>{{ question.a }}</q-item-label>
        </q-item>
        <q-item :class="{
          'col': true, 'response-selector': true,  'q-ma-xs': true, 'correct-answer': select === 'B'
        }" clickable @click="selectAnswer('B')">
          <q-item-label>{{ question.b }}</q-item-label>
        </q-item>
      </div>
      <div class="row">
        <q-item :class="{
          'col': true, 'response-selector': true,  'q-ma-xs': true, 'correct-answer': select === 'C'
        }" clickable @click="selectAnswer('C')">
          <q-item-label>{{ question.c }}</q-item-label>
        </q-item>
        <q-item :class="{
          'col': true, 'response-selector': true,  'q-ma-xs': true, 'correct-answer': select === 'D'
        }" clickable @click="selectAnswer('D')">
          <q-item-label>{{ question.d }}</q-item-label>
        </q-item>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const algo = ref("Algo para rellenar");

const select = ref("");

const props = defineProps<{
  question: any
}>();

const selectAnswer = (index: string) => {
  select.value = index;
  emits("points", 50);
};

const emits = defineEmits<{
  (e: 'points', points: number): void
}>();
</script>

<style lang="scss" scoped>
.response-selector {
  border: #1D1D1D solid 1px;
}

.correct-answer {
  background: green;
  color: white;
}

.incorrect-answer {

}
</style>
