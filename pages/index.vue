<template>
  <div class="flex justify-center">
    <div class="w-full max-w-screen-md my-16">
      <real-digital-form
        action="/script.php"
        method="POST"
        @onSubmit="(formData, send) => manipulateFormData(formData, send)"
        @onResponse="(resp) => log(resp)"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async manipulateFormData(formData, send) {
      formData = { ...formData, modified: true }
      await send(formData)
    },
    log(resp) {
      console.log(resp)
    },
  },
}
</script>
