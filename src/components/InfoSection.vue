<template>
  <v-container>
    <v-row align="center" class="mb-4">
      <v-col>
        <v-divider />
      </v-col>
      <v-col cols="auto">
        <h2 id="informazioni" class="font-weight-medium">Informazioni</h2>
      </v-col>
      <v-col>
        <v-divider />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="auto">
        <v-img src="https://via.placeholder.com/1280x720" width="396" class="rounded-lg" />
      </v-col>
      <v-col>
        <div>
          <span class="text-primary font-weight-bold mr-2">Vi aspettiamo il:</span>
          <span>2 settembre 2023 ore 11:30</span>
        </div>

        <div>
          <span class="text-primary font-weight-bold mr-2">Indirizzo:</span>
          <a href="https://maps.app.goo.gl/fChnXaAfKxcW6pgo6" target="_blank"
            >Via Quaratesi 54, Pietrapiana</a
          >
        </div>

        <div>
          <span class="text-primary font-weight-bold mr-2">Non so più che metterci</span>
          <span>Datemi una mano</span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({ name: 'InfoSection' })
</script>
