import React from 'react'
import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className='text-3xl font-bold text-emerald-500'>Welcome to the TanStack Router</h1>

      <p className='text-muted-foreground'>
        Start editing <pre>src/routes/index.tsx</pre> to see the magic happen!
      </p>

      <Button>This is a button</Button>
    </>
  )
}
