<script setup>
    import ProfessionalCard from '../components/ProfessionalCard.vue';
    import ListEducation from '../components/ListEducation.vue';
    import ListWorkExperiences from '../components/ListWorkExperiences.vue';
    import ListCertifications from '../components/ListCertifications.vue';
    import MyDetails from '../components/MyDetails.vue';
    import BreadCrumbHome from '../components/BreadCrumbHome.vue';

    import {ref, onMounted} from 'vue'
    const expand = ref(false);

    onMounted(() => {
      setTimeout(() => {
        expand.value = true;
      }, 3000);
    })
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-expand-transition>
        <v-alert
          v-show="expand"
          variant="outlined"
          type="success"
          prominent
          border="top"
          icon="mdi-account-badge"
        >
          <b>[AVAILABLE]</b> I'm currently looking for a new job position
        </v-alert>
      </v-expand-transition>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <BreadCrumbHome />
        <ProfessionalCard />
        <MyDetails />
      </v-col>
      <v-col cols="12" md="6">
        <ListWorkExperiences />
        <ListEducation />
        <ListCertifications />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3>Public Projects</h3>
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          title="ENIGMA"
          subtitle="Personal project"
          text="Simple encrypt and decrypt system based on enigma machine."
          variant="outlined"
        >
          <v-card-actions>
            <v-btn href="https://hstev.github.io/enigma" prepend-icon="mdi-web">Demo</v-btn>
            <v-btn href="https://github.com/hstev/enigma" prepend-icon="mdi-github">Source Code</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card
          title="BTC funny alert"
          subtitle="Personal project"
          text="Arbitrage for BTC with sounds, logs and charts (soon)"
          variant="outlined"
        >
          <v-card-actions>
            <v-btn href="https://hstev.github.io/funny-btc-price-alert" prepend-icon="mdi-web">Demo</v-btn>
            <v-btn href="https://github.com/hstev/funny-btc-price-alert" prepend-icon="mdi-github">Source Code</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>