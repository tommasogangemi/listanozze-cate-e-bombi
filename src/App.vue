<template>
  <v-app class="bg-neutral-lighten-1">
    <v-main>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <Suspense>
            <List />
          </Suspense>

          <InfoSection />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import InfoSection from './components/InfoSection.vue'
import List from './components/List.vue'
</script>
