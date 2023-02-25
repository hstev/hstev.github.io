<script setup>
    import work_experiences from '../data/work_experiences.js'
</script>
<template>
    <h3 class="mt-5">Work experience</h3>
    <v-list
        :items="work_experiences"
        item-props
        lines="two"
    >
        <template v-slot:subtitle="{ subtitle }">
            <div v-html="subtitle"></div>
        </template>
    </v-list>
</template>