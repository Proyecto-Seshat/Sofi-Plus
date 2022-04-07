<script lang="ts">
import {defineComponent, h} from 'vue';
import {QBtn} from 'quasar';

export default defineComponent({
    props: {
      btns: Array
    },
    setup(props) {
      return () => h('div', {class: "row justify-center q-gutter-sm"},
        props.btns!.map((btn:any) => h(QBtn, {label: btn.label, class: `col text-no-wrap ${btn.class? btn.class : "advance-btn"}`, onClick:btn.fn}))
      );
    }
  }
)
</script>

<style lang="scss" scoped>

</style>
