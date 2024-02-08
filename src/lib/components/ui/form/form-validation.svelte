<script lang="ts">
	import { cn } from '$lib/utils';
	import { Form as FormPrimitive } from 'formsnap';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<FormPrimitive.Validation
	class={cn('text-sm font-medium text-destructive', className)}
	{...$$restProps}
/>
