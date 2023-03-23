<script setup>
    import certifications from '../data/certifications.js'
</script>

<template>
    <h3 class="my-5">Certifications</h3>
    <v-list
        :items="certifications"
        item-props
        lines="two"
    >
        <template v-slot:title="{ title }">
            <div v-html="title"></div>
        </template>
        <template v-slot:subtitle="{ subtitle }">
            <div v-html="subtitle"></div>
        </template>
    </v-list>
</template>