<template>
  <v-row>
    <v-col
      cols="12"
      class="font-weight-medium text-primary d-flex justify-space-between align-center"
    >
      <span class="text-h4">{{ gift.name }}</span>
      <span v-if="!!gift.price" class="text-h5">Disponibili: {{ gift.availableAmount }}€</span>
    </v-col>
  </v-row>

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
</template>

<script setup lang="ts">
import {
  useSpreadsheet,
  type UserSheetInputs,
  type EnrichedGift
} from '@/composables/useSpreadsheet'
import { ref } from 'vue'
import { defineComponent } from 'vue'

defineComponent({ name: 'GiftModalFormContent' })

type VForm = {
  validate: () => boolean
}

type Props = {
  gift: EnrichedGift
}

type Emits = {
  (e: 'submit-completed'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const giftForm = ref<VForm>()
const isFormValid = ref(false)

const getInitFormState = () => ({
  donorName: '',
  donatedAmount: '',
  message: ''
})

const { addRow } = useSpreadsheet()
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
  await addRow(props.gift.name, formState.value)
  isUpdating.value = false

  formState.value = getInitFormState()

  emit('submit-completed')
}
</script>
