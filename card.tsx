import React from "npm:react";
import type {} from "npm:@types/react";
import type {} from "npm:@types/react-dom";


export function Card( props: React.HTMLAttributes<HTMLDivElement> ): JSX.Element {
  return (
			<div
				style={{
					border: "1px solid #ffc600",
				}}
				{...props}
			/>
		);
}

export function CardHeader( props: React.HTMLAttributes<HTMLDivElement> ): JSX.Element {
  return (
      <div
        style={{
          flexDirection: "column",
          padding: "24px",
        }}
        {...props}
      />
    );
}
// import { type ClassValue, clsx } from "npm:clsx";
// import { twMerge } from "npm:tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
// 	return twMerge(clsx(inputs));
// }

// const Card = React.forwardRef<
// 	HTMLDivElement,
// 	React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref): JSX.Element => (
// 	<div
// 		ref={ref}
// 		className={cn(
// 			"rounded-xl border bg-card text-card-foreground shadow",
// 			className,
// 		)}
// 		{...props}
// 	/>
// ));
// Card.displayName = "Card";

// const CardHeader = React.forwardRef<
// 	HTMLDivElement,
// 	React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref): JSX.Element => (
// 	<div
// 		ref={ref}
// 		className={cn("flex flex-col space-y-1.5 p-6", className)}
// 		{...props}
// 	/>
// ));
// CardHeader.displayName = "CardHeader";

// const CardTitle = React.forwardRef<
// 	HTMLParagraphElement,
// 	React.HTMLAttributes<HTMLHeadingElement>
// >(({ className, ...props }, ref): JSX.Element => (
// 	<h3
// 		ref={ref}
// 		className={cn("font-semibold leading-none tracking-tight", className)}
// 		{...props}
// 	/>
// ));
// CardTitle.displayName = "CardTitle";

// const CardDescription = React.forwardRef<
// 	HTMLParagraphElement,
// 	React.HTMLAttributes<HTMLParagraphElement>
// >(({ className, ...props }, ref): JSX.Element => (
// 	<p
// 		ref={ref}
// 		className={cn("text-sm text-muted-foreground", className)}
// 		{...props}
// 	/>
// ));
// CardDescription.displayName = "CardDescription";

// const CardContent = React.forwardRef<
// 	HTMLDivElement,
// 	React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref): JSX.Element => (
// 	<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
// ));
// CardContent.displayName = "CardContent";

// const CardFooter = React.forwardRef<
// 	HTMLDivElement,
// 	React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref): JSX.Element => (
// 	<div
// 		ref={ref}
// 		className={cn("flex items-center p-6 pt-0", className)}
// 		{...props}
// 	/>
// ));
// CardFooter.displayName = "CardFooter";

// export {
// 	Card,
// 	CardHeader,
// 	CardFooter,
// 	CardTitle,
// 	CardDescription,
// 	CardContent,
// };
