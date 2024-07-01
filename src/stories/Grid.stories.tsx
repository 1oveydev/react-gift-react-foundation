import type { Meta, StoryObj } from '@storybook/react';

import Grid from '../components/Layout/Grid';

const meta = {
  title: 'Common/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NumberColumns: Story = {
  args: {
    gap: 0,
    columns: 3,
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
      </>
    ),
  },
};

export const ResponsiveColumns: Story = {
  args: {
    gap: 0,
    columns: 4,
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
      </>
    ),
  },
};