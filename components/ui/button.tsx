import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";


type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
variant?: "primary" | "secondary" | "ghost";
asChild?: boolean;
};


export const Button = forwardRef<HTMLButtonElement, Props>(
({ className, variant = "primary", ...props }, ref) => {
const base = "btn focus:outline-none focus:ring-2 focus:ring-white/40";
const map = {
primary: "btn-primary",
secondary: "btn-secondary",
ghost: "bg-transparent text-white hover:bg-white/10"
} as const;
return <button ref={ref} className={cn(base, map[variant], className)} {...props} />;
}
);
Button.displayName = "Button";
