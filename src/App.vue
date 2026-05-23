<template>
    <div>
        <h1>Telegram Mini App</h1>

        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/profile">Profile</router-link> |
            <router-link to="/settings">Settings</router-link>
        </nav>

        <router-view />
    </div>
</template>