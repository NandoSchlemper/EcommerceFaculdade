import { Button, DropdownMenu } from '@radix-ui/themes'

export function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button
          className='bg-transparent focus:bg-transparent focus:border-none focus:outline-none'
          size='3'
        >
          English
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size='1'>
        <DropdownMenu.Item>Portuguese</DropdownMenu.Item>
        <DropdownMenu.Item>Italian</DropdownMenu.Item>
        <DropdownMenu.Item>French</DropdownMenu.Item>
        <DropdownMenu.Item>Germany</DropdownMenu.Item>
        <DropdownMenu.Item>Spanish</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
