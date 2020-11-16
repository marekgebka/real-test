<template>
  <form @submit.prevent class="w-full">
    <real-digital-textfield
      label="Vorname"
      name="name"
      validation="[a-z]+"
      class="my-4"
    />
    <real-digital-textfield
      label="Telefonnummer"
      name="phone"
      validation="[0-9]+"
      class="my-4"
    />
    <real-digital-button class="my-4" @clicked="submit" />
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    action: {
      type: String,
      default: '/script.php',
    },
    method: {
      type: String,
      default: 'POST',
    },
  },
  methods: {
    ...mapActions({
      sendForm: 'form/send',
    }),

    async submit() {
      let formIsValid = true
      const formData = this.$children
        .filter((c) => c.$options._componentTag === 'real-digital-textfield')
        .reduce((formData, c) => {
          formIsValid = c.validate() && formIsValid
          formData[c.$refs.inputField.name] = c.$refs.inputField.value
          return formData
        }, {})

      if (formIsValid)
        if ('onSubmit' in this.$listeners)
          this.$emit(
            'onSubmit',
            formData,
            async (formData) => await this.send(formData)
          )
        else await this.send(formData)
    },

    async send(formData) {
      const res = await this.sendForm({
        action: this.action,
        method: this.method,
        formData,
      })
      this.$emit('onResponse', res)
    },
  },
}
</script>
