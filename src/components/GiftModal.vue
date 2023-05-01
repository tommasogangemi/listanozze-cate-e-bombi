<template>
  <v-dialog
    :model-value="show && !!gift"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    content-class="bg-neutral"
    @update:model-value="$emit('close-modal')"
  >
    <v-card v-if="!!gift">
      <v-card-text class="d-flex align-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="10" class="px-0">
              <v-btn
                color="primary"
                prepend-icon="mdi-arrow-left"
                variant="text"
                @click="$emit('close-modal')"
                >Torna alla lista</v-btn
              >
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="10" class="bg-neutral-lighten-1 pa-4 pa-md-10 rounded-lg">
              <!-- TITLE / NAME -->
              <v-row>
                <v-col
                  cols="12"
                  class="font-weight-medium text-primary d-flex justify-space-between align-center"
                >
                  <span class="text-h4">{{ gift.name }}</span>
                  <span class="text-h5">Disponibili: {{ gift.availableAmount }}€</span>
                </v-col>
              </v-row>
              <!-- CONTENT ROW -->
              <v-row>
                <v-col cols="12" md="5" lg="6">
                  <v-img :src="gift.image" cover />
                </v-col>

                <v-col cols="12" md="7" lg="6" class="text-center">
                  <div class="mb-4">Dai il tuo contributo</div>
                  <v-form ref="giftForm" v-model="isFormValid">
                    <v-text-field
                      v-model="formState.donorName"
                      label="Inserisci il tuo nome"
                      density="compact"
                      class="mb-2"
                      :rules="[mandatory]"
                    />
                    <v-text-field
                      v-model="formState.donatedAmount"
                      label="Inserisci quanto vorresti donare"
                      append-inner-icon="mdi-currency-eur"
                      density="compact"
                      class="mb-2"
                      :rules="[validateNumberField]"
                    />
                    <v-textarea
                      v-model="formState.message"
                      label="Lascia un messaggio per gli sposi (facoltativo)"
                      density="compact"
                      class="mb-2"
                    />
                  </v-form>

                  <v-btn
                    :disabled="!isFormValid || isUpdating"
                    :loading="isUpdating"
                    color="primary"
                    flat
                    @click="handleSubmit"
                    >Conferma</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import type { EnrichedGift, UserSheetInputs } from '@/composables/useSpreadsheet'
import { useSpreadsheet } from '@/composables/useSpreadsheet'
import { ref } from 'vue'
import { toRefs } from 'vue'
import { defineComponent } from 'vue'

type VForm = {
  validate: () => boolean
}

defineComponent({ name: 'GiftModal' })

const getInitFormState = () => ({
  donorName: '',
  donatedAmount: '',
  message: ''
})

type Props = {
  gift?: EnrichedGift
  show: boolean
}

type Emits = {
  (e: 'close-modal'): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const { gift, show } = toRefs(props)

const { addRow } = useSpreadsheet()

const giftForm = ref<VForm>()
const isFormValid = ref(false)
const isUpdating = ref(false)

const formState = ref<UserSheetInputs>(getInitFormState())

const mandatory = (v?: string) => !!v || 'Campo obbligatorio'

const validateNumberField = (v?: string) => {
  if (!v) return 'Campo obbligatorio'
  if (isNaN(Number(v))) return 'Per favore inserisci un numero valido'
  return true
}

const handleSubmit = async () => {
  isUpdating.value = true
  await addRow(gift?.value?.name!, formState.value)
  isUpdating.value = false

  formState.value = getInitFormState()

  emit('close-modal')
}
</script>
