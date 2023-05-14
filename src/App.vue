<template>
  <v-app class="bg-primary-light">
    <v-main>
      <v-row justify="center" class="my-6">
        <v-col cols="12" md="8" class="bg-neutral rounded-lg">
          <PageHeader />

          <List />

          <MessagesSection />

          <InfoSection />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import InfoSection from './components/InfoSection.vue'
import List from './components/List.vue'
import PageHeader from './components/PageHeader.vue'
import MessagesSection from './components/MessagesSection.vue'
</script>
