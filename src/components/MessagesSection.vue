<template>
  <v-container v-if="donationsWithMessages.length > 3">
    <v-row align="center" class="mb-4">
      <v-col>
        <v-divider />
      </v-col>
      <v-col cols="auto">
        <h2 id="messaggi" class="text-accent font-weight-medium">Messaggi</h2>
      </v-col>
      <v-col>
        <v-divider />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card flat variant="outlined" class="bg-white overflow-y-auto" height="408">
          <v-card-text class="py-0">
            <template
              v-for="(donationMessage, idx) in donationsWithMessages"
              :key="donationMessage.message"
            >
              <v-row class="my-2">
                <v-col cols="12">
                  <div>
                    <span class="text-accent font-weight-bold">
                      {{ donationMessage.donorName }}
                    </span>
                    <span class="text-grey"> - </span>
                    <span class="text-grey">{{ donationMessage.date }}</span>
                  </div>
                  <div>{{ donationMessage.message }}</div>
                </v-col>
              </v-row>

              <v-divider v-if="idx !== donationsWithMessages.length - 1" />
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useSpreadsheet } from '@/composables/useSpreadsheet'
import { computed } from 'vue'
import { defineComponent } from 'vue'

defineComponent({ name: 'MessagesSection' })

const { spreadSheet } = useSpreadsheet()

const donationsWithMessages = computed(
  () => spreadSheet.value?.sheets.flatMap((s) => s.rowsData).filter((r) => !!r.message) ?? []
)
</script>
