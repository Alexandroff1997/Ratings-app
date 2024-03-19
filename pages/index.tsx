import { Button, Heading, Paragraph, Tag } from '@/components';
export default function Home(): JSX.Element {

  return (
    <>
      <Heading tag='h1'>Text</Heading>
      <Button appearance='primary' arrowIcon='up'>Click me</Button>
      <Button appearance='ghost' arrowIcon='down'>Click me</Button>
      <Button appearance='ghost' arrowIcon='up'>Click</Button>
      <Paragraph size='S'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, ipsa debitis veniam id quia, nostrum rerum alias, iure error veritatis excepturi iusto mollitia est corrupti molestiae. Explicabo doloribus amet natus vitae veritatis sequi voluptatem deleniti unde eos repellat debitis sapiente aut, harum facilis enim dolorem odit totam praesentium atque officiis. Deleniti, expedita. Odio mollitia ipsum magnam ipsam cumque sunt aut excepturi enim error officia maiores modi quisquam quia recusandae soluta molestiae, facilis architecto dolorum expedita reprehenderit? Exercitationem veritatis nihil numquam hic praesentium assumenda labore voluptatum pariatur recusandae debitis et id commodi suscipit ab, delectus explicabo cumque obcaecati similique illo magni.
      </Paragraph>
      <Paragraph size='M'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores magnam beatae nulla quaerat cum voluptatem exercitationem sapiente esse doloremque nobis ipsum, blanditiis labore doloribus ipsam est minus vero dignissimos. Tempora quo voluptate ipsam repudiandae et molestias assumenda aut ipsa impedit asperiores, cum placeat. Officia molestias magnam excepturi eaque laudantium?
      </Paragraph>
      <Paragraph size='L'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsum repudiandae error quae tenetur ad tempora blanditiis quidem, consequatur doloremque ratione, iure nulla odio sequi quasi deleniti fugiat quis fuga.
      </Paragraph>
      <Tag size='S'>Hello</Tag>
      <Tag size='S' color='red'>Hello</Tag>
      <Tag size='M' color='green'>Hello</Tag>
      <Tag size='S'>Hello</Tag>
      <Tag color='primary'>Hello</Tag>
    </>
  );
}
