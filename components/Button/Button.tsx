import styles from './Button.module.css';
import { IButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({ appearance, arrowIcon = 'none', children, className, ...props }: IButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost'
			})}
			{...props}
		>
			{children}
			{arrowIcon !== 'none' && 
				<span className={cn(styles.arrow, {
					[styles.up]: arrowIcon === 'up',
					[styles.down]: arrowIcon === 'down'
				})}>
					<ArrowIcon />
				</span>}
		</button>
	);
};