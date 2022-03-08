import { Lib1Module } from '@angular-tailwind-nx/lib1';
import { Lib2Module } from '@angular-tailwind-nx/lib2';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AppComponent } from './app.component';

export default {
  title: 'AppComponent',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppComponent],
      imports: [Lib1Module, Lib2Module],
    })
  ],
} as Meta<AppComponent>;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  title: 'Lorem + Ipsum + Dolor + Sit'
}