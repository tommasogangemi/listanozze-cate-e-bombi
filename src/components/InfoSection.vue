<template>
  <v-container class="mt-2">
    <v-row align="center" class="mb-4">
      <v-col>
        <v-divider />
      </v-col>
      <v-col cols="auto">
        <h2 id="informazioni" class="pretty-font font-weight-bold text-accent">Informazioni</h2>
      </v-col>
      <v-col>
        <v-divider />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="auto" order="2" order-md="1">
        <v-img src="https://via.placeholder.com/1280x720" width="396" class="rounded-lg" />
      </v-col>
      <v-col order="1" order-md="2" class="d-flex py-md-6 flex-column justify-space-between">
        <div>
          <div>
            <span class="mr-2">Vi aspettiamo il</span>
            <span class="text-primary font-weight-bold">2 settembre 2023, 11:00</span>
          </div>

          <div>
            <span class="text-primary mr-2">Indirizzo:</span>
            <a
              href="https://www.google.com/maps/place/Parrocchia+di+San+Francesco/@43.777858,11.4365713,16z/data=!4m7!3m6!1s0x132ba97aa40cc7fb:0x6ab726ac6e33fbd9!8m2!3d43.777858!4d11.444811!15sCh5jaGllc2EgZGkgc2FuIGZyYW5jZXNjbyBwZWxhZ2-SAQ9jYXRob2xpY19jaHVyY2jgAQA!16s%2Fg%2F11pqvvgx24?shorturl=1"
              target="_blank"
              class="font-weight-bold"
              >Piazza Giuseppe Verdi 1, San Francesco</a
            >
          </div>
        </div>

        <div class="mt-6 mt-md-0">
          <div class="text-primary font-weight-bold">I nostri recapiti</div>
          <div>
            <span class="text-primary font-weight-bold">Caterina: </span> +39 346 6423048 - Via
            Forlivese 45/B
          </div>
          <div>
            <span class="text-primary font-weight-bold">Mattia: </span> +39 335 1597891 - Via
            Gramsci 43/E
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="bg-neutral">
        <h2 class="pretty-font text-accent text-center font-weight-bold my-2">
          Siamo felici di condividere questo momento di gioia con voi!
        </h2>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="auto" class="py-0 text-caption mb-n2 text-center">
        <span>Mattia Faustino, IBAN: IT88L0306938013100000008009</span>
      </v-col>
      <v-col cols="12" md="auto" class="pb-0 py-md-0 text-caption mb-n2 text-center">
        <a href="https://www.paypal.me/mattiafaustino" target="_blank">Paypal</a>
        <span class="mx-4"></span>
        <a
          href="https://www.satispay.com/download/qrcode/S6Y-CON--70C140E7-BEF5-44C4-A538-99D011EC5895"
          target="_blank"
          >Satispay
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({ name: 'InfoSection' })
</script>
