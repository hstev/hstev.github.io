<script setup>
    import me from '../data/me';
</script>
<template>
    <h3 class="mt-5">About me</h3>
    <div>
        {{ me.about }}
    </div>
    <h3 class="mt-5">My Stack</h3>
    <div>
        <v-chip class="ma-2" color="grey" v-for="skill in me.stack">
            {{ skill }}    
        </v-chip>
    </div>
    <h3 class="mt-5">Interest / Learning</h3>
    <div>
        <v-chip class="ma-2" color="grey" v-for="interest in me.interest">
            {{ interest }}    
        </v-chip>
    </div>
    <h3 class="mt-5">Languages</h3>
    <div>
        <v-chip class="ma-2" color="grey" v-for="language in me.languages">
            {{ language }}    
        </v-chip>
    </div>

    <h3 class="mt-5 mb-3">Social</h3>
    <v-btn v-for="sn in me.social_network" :href="sn.link" class="ma-2" target="_blank" :prepend-icon="sn.icon">
        {{ sn.label }}
    </v-btn>
    
</template>