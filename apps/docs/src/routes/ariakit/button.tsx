import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ariakit/button')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ariakit/button"!</div>
}
