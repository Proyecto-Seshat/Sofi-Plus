<template>
  <render/>
</template>

<script lang="ts" setup>
import {h, mergeProps, useSlots, VNode, VNodeArrayChildren, VNodeChild, VNodeNormalizedChildren} from 'vue';
import {useQuasar} from "quasar";

const $q = useQuasar();

const slots = useSlots();

function resolveChildrenMobile() {
  if (slots.action) {
    return [
      ...slots.default!().map((slot, index) => {
        if (slot.props) {
          return h(
            'div',
            {class: "col column"},
            [
              h('span', {class: "col q-pa-sm presentador-mobile-top shadow-1"}, slot.props!["label"]),
              h('span', {class: "col q-pa-sm presentador-mobile-bottom shadow-2"}, slot)
            ]
          );
        } else {
          return (slot.children! as VNodeArrayChildren)!.map((inSlot) => {
            return h(
              'div',
              {class: "col column"},
              [
                h('span', {class: "col q-pa-sm presentador-mobile-top shadow-1"}, (((inSlot as VNode).children as VNodeArrayChildren)[0] as VNode).props!["label"]),
                h('span', {class: "col q-pa-sm presentador-mobile-bottom shadow-2"}, (((inSlot as VNode).children as VNodeArrayChildren)[0] as VNode))
              ]
            );
          });
        }
      }),
      ...slots.action!().map((action) => {
        action.props = mergeProps(action.props!, {class: ["col"]})
        return h(
          action
        )
      })
    ];
  } else {
    return slots.default!().map((slot, index) => {
      if (slot.props) {
        return h(
          'div',
          {class: "col column"},
          [
            h('span', {class: "col q-pa-sm presentador-mobile-top shadow-1"}, slot.props!["label"]),
            h('span', {class: "col q-pa-sm presentador-mobile-bottom shadow-2"}, slot)
          ]
        );
      } else {
        return (slot.children! as VNodeArrayChildren)!.map((inSlot) => {
          return h(
            'div',
            {class: "col column"},
            [
              h('span', {class: "col q-pa-sm presentador-mobile-top shadow-1"}, (((inSlot as VNode).children as VNodeArrayChildren)[0] as VNode).props!["label"]),
              h('span', {class: "col q-pa-sm presentador-mobile-bottom shadow-2"}, ((((inSlot as VNode).children as VNodeArrayChildren)[0] as VNode) as VNode))
            ]
          );
        });
      }
    })
  }
}

const render = () => {
  if ($q.platform.is.desktop) {
    return h(
      "div", [
        h('div', {class: "row shadow-1 presentador-mobile-top"}, slots.default!().map((slot) => {
          if (slot.props) {
            //@ts-ignore
            if(slot.children){
              (slot.children as VNodeNormalizedChildren[])
            }
            return h('span', {class: "col q-pa-sm"}, slot.props!["label"]? slot.props!["label"] : '');
          } else {
            return (((slot!.children! as VNodeArrayChildren)[0]! as VNode).children as VNodeArrayChildren)!.map((inSlot) => {
              return h('span', {class: "col q-pa-sm"}, (inSlot! as VNode).props!["label"]);
            });
          }
        })),
        h('div', {class: ["column", "presentador-mobile-bottom", "shadow-2"]},
          [
            h('div',
              {class: "row items-center"},
              slots.default!().map((slot) => {
                if (slot.props) {
                  return h('span', {class: "col q-pa-sm"}, slot)
                } else {
                  return (slot!.children! as VNodeArrayChildren).map((inSlot) => {
                    return h('span', {class: "col q-pa-sm"}, inSlot as VNode)
                  });
                }
              })),
            slots.action ? h('div', {class: ["row q-gutter-x-sm"]},
              slots.action!().map((action, index, arr) => {
                action.props = mergeProps(action.props!, {
                  class: ["col"]
                });
                if (index == 0) {
                  action.props = mergeProps(action.props!, {
                    class: ["presentador-mobile-action-bottom-left"]
                  });
                }
                if (index == arr.length - 1) {
                  action.props = mergeProps(action.props!, {
                    class: ["presentador-mobile-action-bottom-right"]
                  });
                }
                return h(action)
              })
            ) : null
          ]
        )
      ]
    );
  } else {
    return h(
      "div",
      {class: "column q-gutter-y-sm"},
      resolveChildrenMobile()
    );
  }
}

</script>

<style lang="scss">
$radius: 10px;
.presentador-mobile-top {
  background: $bg-sub;
  color: white;
  border-top-left-radius: $radius;
  border-top-right-radius: $radius;
}

.presentador-mobile-bottom {
  background: white;
  color: black;
  border-bottom-left-radius: $radius;
  border-bottom-right-radius: $radius;
}

.presentador-mobile-action-bottom {
  border-bottom-left-radius: $radius;
  border-bottom-right-radius: $radius;
}

.presentador-mobile-action-bottom-left {
  border-bottom-left-radius: $radius;
}

.presentador-mobile-action-bottom-right {
  border-bottom-right-radius: $radius;
}
</style>
