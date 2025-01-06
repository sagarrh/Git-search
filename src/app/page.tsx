import { redirect } from "next/dist/server/api-utils"
import { Button } from "~/components/ui/button"
export default async function Home() {
  // redirect('/dashboard', { statusCode: 301 })
  return( <div suppressHydrationWarning><h1 className="text-red-600">hello world</h1>
    <Button  >Click here</Button>
    
    </div>
  )
}
