import type { Meta, StoryObj } from '@storybook/react'

import { Login } from '@/pages'

const meta = {
  component: Login,
  tags: ['autodocs'],
  title: 'Pages/Login',
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const LoginStory: Story = {
  args: {},
}
