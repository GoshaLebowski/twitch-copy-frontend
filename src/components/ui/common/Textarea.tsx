import * as React from 'react';



import { cn } from '@/utils/tw-merge'
import { type ComponentProps, forwardRef } from 'react'





const Textarea = forwardRef<
	HTMLTextAreaElement,
	ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cn(
				'flex max-h-[80px] min-h-[80px] w-full rounded-md border border-border bg-input px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-primary text-sm',
				className
			)}
			ref={ref}
			{...props}
		/>
	)
})
Textarea.displayName = 'Textarea'

export { Textarea }
