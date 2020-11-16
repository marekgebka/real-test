<template>
  <div class="w-full">
    <label class="text-sm font-bold">{{ label }}</label>
    <input
      ref="inputField"
      v-model="text"
      :name="name"
      type="text"
      class="w-full rounded border p-2 my-2"
    />
    <p v-if="error" class="text-red-600 text-xs font-bold">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    validation: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      text: '',
      error: null,
    }
  },
  methods: {
    validate() {
      if (this.validation && RegExp(this.validation).test(this.text))
        this.error = null
      else
        this.error = `Input does not meet criteria of RegExp ${this.validation}`
      return this.error === null
    },
  },
}
</script>
