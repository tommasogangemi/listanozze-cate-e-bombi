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
      <v-col cols="auto" order="2" order-md="1">
        <v-img src="https://via.placeholder.com/1280x720" width="396" class="rounded-lg" />
      </v-col>
      <v-col order="1" order-md="2">
        <div>
          <span class="text-primary font-weight-bold mr-2">Vi aspettiamo il:</span>
          <span>2 settembre 2023 ore 11</span>
        </div>

        <div>
          <span class="text-primary font-weight-bold mr-2">Indirizzo:</span>
          <a
            href="https://www.google.com/maps/place/Parrocchia+di+San+Francesco/@43.777858,11.4365713,16z/data=!4m7!3m6!1s0x132ba97aa40cc7fb:0x6ab726ac6e33fbd9!8m2!3d43.777858!4d11.444811!15sCh5jaGllc2EgZGkgc2FuIGZyYW5jZXNjbyBwZWxhZ2-SAQ9jYXRob2xpY19jaHVyY2jgAQA!16s%2Fg%2F11pqvvgx24?shorturl=1"
            target="_blank"
            >Piazza Giuseppe Verdi 1, San Francesco</a
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({ name: 'InfoSection' })
</script>
