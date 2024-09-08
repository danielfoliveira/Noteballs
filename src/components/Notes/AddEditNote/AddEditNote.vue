<template>
  <div class="card mt-1 mb-2 bg-color-primary-dark p-1">
    <label v-if="label" class="label">
      {{ label }}
    </label>
    <div class="content">
      <textarea
        :value="modelValue"
        ref="textareaRef"
        class="textarea"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        v-autofocus
      />
    </div>

    <div class="footer">
      <slot name="buttons" />
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

<style scope>
@import "./AddEditNote.css"
</style>
