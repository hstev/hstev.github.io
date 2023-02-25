<script setup>
    import breadcrum_home from '../data/breadcrum_home.js';
</script>
<template>
    <v-breadcrumbs :items="breadcrum_home">
        <template v-slot:title="{ item }">
        <h1>{{ item.title.toUpperCase() }}</h1>
        </template>
    </v-breadcrumbs>
</template>