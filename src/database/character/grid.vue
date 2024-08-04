<template>
	<module>
		<table>
			<tr>
				<td />
				<td v-for="element of M.elements" :key="element.id" element>
					<img :src="`./image/element/${element.id}.png`" />
					<span>{{ element.name }}</span>
				</td>
			</tr>
			<tr v-for="path of M.paths" :key="path.id">
				<td path>
					<p-path>
						<p-img-box><img :src="`./image/path-single/${path.id}.png`" /></p-img-box>
						<span>{{ path.name }}</span>
					</p-path>
				</td>
				<td v-for="element of M.elements" :key="element.id">
					<template v-for="character of characters.filter(c => c.element == element.id && c.path == path.id)" :key="character.id">
						<p-character :rarity="character.rarity">
							<img :src="`./image/item/${character.id}.png`" />
							<span>{{ character.name }}</span>
						</p-character>
					</template>
				</td>
			</tr>
		</table>
	</module>
</template>

<script setup>
import M from '../../lib/meta.js';



const characters = M.characters
	.filter(character => character.gender != 'male')
	.sort((a, b) => b.rarity - a.rarity);
</script>

<style lang="sass" scoped>
module
	@apply p-6 text-xl leading-10
table
	@apply border-2 border-[var(--cGray)] table-fixed
	img
		@apply inblock h-10 drop-shadow-md
	td
		@apply p-2 border-2 border-[var(--cGray)]
		width: 200px
		&[element]
			img
				@apply h-10
			span
				@apply pl-2
		&:nth-child(1)
			@apply w-[72px] text-center
p-path
	@apply block w-10 m-auto
	p-img-box
		@apply block overflow-hidden
	img
		@apply block w-10 h-10
		transform: translateY(-101%)
		filter: drop-shadow(0 40px var(--cText))
	span
		@apply block w-10 mt-2 text-center text-nowrap leading-5
p-character
	@apply block
	&:not(:last-child)
		@apply mb-2
	&[rarity="5"]
		@apply text-[var(--cRarity5)]
	&[rarity="4"]
		@apply text-[var(--cRarity4)]
	img
		@apply h-10
	span
		@apply pl-2
</style>
