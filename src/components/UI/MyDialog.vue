<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog_content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import toggleMixin from '@/mixins/toggleMixin.js'

export default {
  name: "my-dialog",
  mixins: [toggleMixin],
  methods: {},
  mounted(){
    console.log('dialog mounted')
  }
};
</script>
<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.dialog_content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-width: 300px;
  min-height: 50px;
  padding: 20px;
}
</style>