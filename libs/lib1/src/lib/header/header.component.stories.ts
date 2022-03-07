import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { Header, HeaderComponent } from './header.component';

interface Content {
  content: string;
}

type HeaderContent = Header & Content;

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<HeaderContent>;

const Template: Story<HeaderContent> = (args: HeaderContent) => ({
  props: args,
  template: `
  <angular-tailwind-nx-header [strong]="strong">${args.content}</angular-tailwind-nx-header>
  `
});

export const Primary = Template.bind({});
Primary.args = {
  strong: true,
  content: "Angular + Tailwind CSS + Nx + Storybook"
}

export const Secondary = Template.bind({});
Secondary.args = {
  strong: false,
  content: "Angular + Tailwind CSS + Nx + Storybook"
}