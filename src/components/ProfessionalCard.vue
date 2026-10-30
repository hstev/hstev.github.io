<script setup>
    import me from '../data/me';
</script>
<template>
    <v-card
          class="mx-auto"
          max-width="434"
          rounded="1"
        >
          <v-img
            height="100%"
            cover
            :src="me.photo_background"
          >
            <v-avatar
              color="grey"
              size="150"
              rounded="0"
            >
              <v-img cover :src="me.photo"></v-img>
            </v-avatar>
            <v-list-item
              class="text-white"
              :title="me.name"
              :subtitle="me.position"
            ></v-list-item>
          </v-img>
    </v-card>
</template>