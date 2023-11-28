<template>
  <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            :value="modelValue"
            ref="textareaRef"
            class="textarea"
            placeholder="Add a new note"
            @input="$emit('update:modelValue', $event.target.value)"
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
import { ref } from 'vue'

/* Props */
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

/* Emits */
const emit = defineEmits(['update:modelValue'])

/* Refs*/
const textareaRef = ref(null)

/** Focus textarea */
const focusTextArea = () => {
  textareaRef.value.focus()
}

defineExpose({ 
  focusTextArea
})

</script>
