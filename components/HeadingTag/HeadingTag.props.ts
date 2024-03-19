import { ReactNode } from 'react';

export interface IHeadingTag {
	tag: 'h1' | 'h2' | 'h3';
	children: ReactNode;
}