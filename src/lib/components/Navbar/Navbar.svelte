<script lang="ts">
    import Logo from '../utils/Logo.svelte';
    import NavigationList from '$lib/components/Navbar/NavigationList.svelte';
    import Item from './Item.svelte';
    import DrawerItem from './DrawerItem.svelte';
    import UserMenu from './UserMenu.svelte';

    let downloads: { element: string; route: string }[] = [
        { element: 'Linux', route: '/downloads/linux' },
        { element: 'Windows', route: '/downloads/windows' },
        { element: 'MacOS', route: '/downloads/macos' },
    ];

    let userMenu: { element: string; route: string }[] = [
        { element: 'Connect', route: 'https://discord.com/api/oauth2/authorize?client_id=971375358559526922&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&response_type=code&scope=email%20identify%20guilds' },
        { element: 'Support', route: 'https://discord.gg/SFuxrG3Y2F' },
    ];
</script>

<div class="flex justify-center items-center w-full absolute">
    <div class="flex justify-between items-center w-4/5">
        <a href="/"><Logo /></a>
        <NavigationList>
            <Item text="Extensions" to="/extensions" />
            <Item text="Docs" to="/docs" />
            <DrawerItem text="Downloads" drawerContent={downloads} />
            <UserMenu drawerContent={userMenu} />
        </NavigationList>
    </div>
</div>
