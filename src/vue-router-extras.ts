import { defineComponent, PropType } from "vue";
import { useLink, RouteLocationRaw } from "vue-router";

export const Route = defineComponent({
	name: "Route",
	props: {
		to: {
			type: [String, Object] as PropType<RouteLocationRaw>,
			required: true,
		},
		isExact: {
			type: Boolean,
			default: false,
		},
	},

	setup(props, { slots }) {
		const { isActive, isExactActive } = useLink(props);
		return () => {
			// TODO: Implement exact route
			if (false && props.isExact && isExactActive.value) {
				return slots.default?.();
			} else if (isActive.value) {
				return slots.default?.();
			} else {
				return undefined;
			}
		};
	},
});
