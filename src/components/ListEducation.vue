<script setup>
    import education from '../data/education.js';
</script>

<template>
    <h3 class="mt-5">Education</h3>
    <v-list
        :items="education"
        item-props
        lines="two"
    >
        <template v-slot:subtitle="{ subtitle }">
        <div v-html="subtitle"></div>
        </template>
        
    </v-list>
</template>