<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { Route } from "../vue-router-extras";
</script>

<template>
	<header class="mb-3">
		<ul class="flex gap-3 border-b py-3">
			<li>
				<RouterLink to="/" class="font-semibold underline">
					Home Page
				</RouterLink>
			</li>
			<li>
				<RouterLink to="/page-one" class="font-semibold underline">
					Page One
				</RouterLink>
			</li>
			<li>
				<RouterLink to="/page-two" class="font-semibold underline">
					Page two
				</RouterLink>
			</li>
			<li class="ml-auto text-lg">
				<Route :to="{ name: 'home' }">🏠</Route>
				<Route to="/page-one">👻</Route>
				<Route to="/page-two">🚀</Route>
			</li>
		</ul>
	</header>
</template>
