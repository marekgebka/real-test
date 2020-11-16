<template>
  <button
    class="w-full rounded border text-xs font-bold py-2"
    @click="buttonClicked()"
  >
    Submit
  </button>
</template>

<script>
export default {
  methods: {
    buttonClicked() {
      this.$emit('clicked')
    },
  },
}
</script>
