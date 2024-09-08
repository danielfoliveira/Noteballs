<template>
  <div class="card mb-2" :class="`has-background-${bgColor}-dark `">
    <label v-if="label" class="label has-text-white">
      {{ label }}
    </label>
    <div class="field">
      <div class="control">
        <textarea
          :value="modelValue"
          ref="textareaRef"
          class="textarea"
          :placeholder="placeholder"
          @input="$emit('update:modelValue', $event.target.value)"
          v-autofocus
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
/* Imports */
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

/* Props */
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});

/* Emits */
const emit = defineEmits(["update:modelValue"]);

/* Refs*/
const textareaRef = ref(null);

/** Focus textarea */
const focusTextArea = () => {
  textareaRef.value.focus();
};

defineExpose({
  focusTextArea,
});
</script>
