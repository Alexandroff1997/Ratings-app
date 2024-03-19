import { ReactNode } from 'react';

export interface IHeadingProps {
	tag: 'h1' | 'h2' | 'h3';
	children: ReactNode;
}