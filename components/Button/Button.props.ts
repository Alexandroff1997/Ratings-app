import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	appearance: 'primary' | 'ghost';
	arrowIcon?: 'up' | 'down' | 'none';
}