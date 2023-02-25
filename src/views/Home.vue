<script setup>
    import ProfessionalCard from '../components/ProfessionalCard.vue';
    import ListEducation from '../components/ListEducation.vue';
    import ListWorkExperiences from '../components/ListWorkExperiences.vue';
    import ListCertifications from '../components/ListCertifications.vue';
    import MyDetails from '../components/MyDetails.vue';
    import BreadCrumbHome from '../components/BreadCrumbHome.vue';
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-alert
          variant="outlined"
          type="success"
          prominent
          border="top"
          icon="mdi-account-badge"
        >
          <b>[AVAILABLE]</b> I'm currently looking for job position as <b>Senior Software Developer</b>
        </v-alert>
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
  </v-container>
</template>
