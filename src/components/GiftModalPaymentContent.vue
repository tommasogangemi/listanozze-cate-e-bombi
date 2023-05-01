<template>
  <div>
    <div class="my-3">Puoi effettuare il pagamento puoi scegliere una delle seguenti opzioni</div>

    <div class="font-weight-bold">Bonifico bancario a:</div>
    <div>Mattia Faustino</div>
    <div>IBAN: IT88L0306938013100000008009</div>

    <div class="font-weight-bold mt-3 mb-1">Paypal</div>
    <div class="rounded-lg pa-1 paypal" @click="openWindow('https://www.paypal.me/mattiafaustino')">
      <v-img width="96" cover src="paypal.png" />
    </div>

    <div class="font-weight-bold mt-3 mb-1">Satispay</div>
    <div
      class="rounded-lg pa-1 satispay"
      @click="
        openWindow(
          'https://www.satispay.com/download/qrcode/S6Y-CON--70C140E7-BEF5-44C4-A538-99D011EC5895'
        )
      "
    >
      <v-img width="96" src="satispay.png" />
    </div>

    <!-- <div class="text-caption mt-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fuga vitae dicta culpa velit hic
      dolores quos sint, ex possimus, nam in ad rerum vel quas tempore, tenetur labore cupiditate
      quam minus voluptas accusantium cum.
    </div> -->

    <v-divider class="my-5" />
    <div class="text-center text-primary text-h5 font-weight-bold">Grazie!</div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({ name: 'GiftModalPaymentContent' })

const openWindow = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.paypal {
  border: 2px solid rgb(0, 69, 124);
  width: max-content;
  transition: all 0.15s ease-in-out;
}

.paypal:hover {
  background: rgba(0, 69, 124, 0.2);
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.satispay {
  border: 2px solid rgb(255, 0, 0);
  width: max-content;
  transition: all 0.15s ease-in-out;
}

.satispay:hover {
  background: rgba(255, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}
</style>
