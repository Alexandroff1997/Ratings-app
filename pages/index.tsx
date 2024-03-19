import { Button, HeadingTag } from '@/components';

export default function Home(): JSX.Element {
  return (
    <>
      <HeadingTag tag='h1'>Text</HeadingTag>
      <Button appearance='primary'>Click me</Button>
      <Button appearance='ghost'>Click me</Button>
    </>
  );
}
