import { useEffect, useState } from 'react';
import { IRatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';

export const Rating = ({ rating, ...props }: IRatingProps): JSX.Element => {
	const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const newArr = ratingArr.map((el: JSX.Element, idx: number) => {
			return (
				<StarIcon 
					className={cn(styles.star, {
						[styles.starFill]: idx < currentRating
					})}
				/>
			);
		});
		setRatingArr(newArr);
	};
	

	return (
		<div {...props}>
			{ratingArr.map((el, idx) => <span key={idx}>{el}</span>)}
		</div>
	);
};