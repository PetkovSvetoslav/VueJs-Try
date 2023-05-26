<script setup lang="ts">
import Parking from '../components/Parking.vue'
</script>

<template>
  <div class="about">
    <h3>Parking Info</h3>
  </div>
  <main>
    <Parking />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
