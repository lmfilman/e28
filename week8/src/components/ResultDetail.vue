<template>
  <div v-bind:class="{ won: playerWon, lost: !playerWon }" class='result'>
    <slot name='outcome'></slot>
    <button v-if='playerWon' v-on:click="$emit('play-again')">Play again</button>
  </div>
</template>

<script>
export default {
  props: {
    playerWon: {
      type: Boolean,
      default: false
    }
  },
  template: '#result-detail'
};
</script>

<style scoped>
.lost {
  background-color: red;
}

.won {
  background-color: green;
}

.result {
  display:inline-block;
  color: white;
}
</style>