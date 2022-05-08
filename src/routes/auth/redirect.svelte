<script lang="ts">
    import { code } from "$lib/auth/discord";
    import { page } from '$app/stores';

    code($page.url.searchParams.get('code'))

</script>