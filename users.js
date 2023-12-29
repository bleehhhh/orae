<main class="container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center h-screen bg-cover bg-no-repeat bg-fixed" aria-label="User profiles" style="background-image: url(&quot;/falling-snow.svg&quot;), url(&quot;&quot;);"><div class="card border rounded-lg shadow-sm max-w-xs mx-auto md:mx-0 h-72 bg-black bg-opacity-50"><div class="card-content flex flex-col items-center justify-center p-4"><span class="relative flex shrink-0 overflow-hidden rounded-full mb-2 w-24 h-24"><img class="aspect-square h-full w-full" alt="@user1" src="/placeholder.svg?height=200&amp;width=200"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">U1</span></span><button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 mb-2">
        Copy Username
      </button><p class="text-sm text-center">Bio for user 1</p></div></div><div class="card border rounded-lg shadow-sm max-w-xs mx-auto md:mx-0 h-72 bg-black bg-opacity-50"><div class="card-content flex flex-col items-center justify-center p-4"><span class="relative flex shrink-0 overflow-hidden rounded-full mb-2 w-24 h-24"><img class="aspect-square h-full w-full" alt="@user2" src="/placeholder.svg?height=200&amp;width=200"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">U2</span></span><button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 mb-2">
        Copy Username
      </button><p class="text-sm text-center">Bio for user 2</p></div></div><div class="card border rounded-lg shadow-sm max-w-xs mx-auto md:mx-0 h-72 bg-black bg-opacity-50"><div class="card-content flex flex-col items-center justify-center p-4"><span class="relative flex shrink-0 overflow-hidden rounded-full mb-2 w-24 h-24"><img class="aspect-square h-full w-full" alt="@user3" src="/placeholder.svg?height=200&amp;width=200"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">U3</span></span><button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 mb-2">
        Copy Username
      </button><p class="text-sm text-center">Bio for user 3</p></div></div><div class="card border rounded-lg shadow-sm max-w-xs mx-auto md:mx-0 h-72 bg-black bg-opacity-50"><div class="card-content flex flex-col items-center justify-center p-4"><span class="relative flex shrink-0 overflow-hidden rounded-full mb-2 w-24 h-24"><img class="aspect-square h-full w-full" alt="@user4" src="/placeholder.svg?height=200&amp;width=200"><span class="flex h-full w-full items-center justify-center rounded-full bg-muted">U4</span></span><button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 mb-2">
        Copy Username
      </button><p class="text-sm text-center">Bio for user 4</p></div></div></main>


      import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
      import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <main
      aria-label="User profiles"
      className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center h-[90vh] bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url(/falling-snow.svg), url()",
      }}
    >
      <div className="card border rounded-xl shadow-sm max-w-xs mx-auto md:mx-0 h-64 bg-black transform -translate-y-16">
        <div className="card-content flex flex-col items-center justify-center p-4">
          <Avatar className="mb-2 w-28 h-28 -mt-8">
            <AvatarImage alt="@user1" src="/placeholder.svg?height=200&width=200" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Button className="mb-2 flex items-center justify-center bg-transparent bl_h" variant="secondary">
            <HeartIcon className="w-4 h-4 text-white" />
          </Button>
          <p className="text-sm text-center text-white">Bio for user 1</p>
        </div>
      </div>
      <div className="card border rounded-xl shadow-sm max-w-xs mx-auto md:mx-0 h-64 bg-black transform -translate-y-16">
        <div className="card-content flex flex-col items-center justify-center p-4">
          <Avatar className="mb-2 w-28 h-28 -mt-8">
            <AvatarImage alt="@user2" src="/placeholder.svg?height=200&width=200" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <Button className="mb-2 flex items-center justify-center bg-transparent bl_h2" variant="secondary">
            <HeartIcon className="w-4 h-4 text-white" />
          </Button>
          <p className="text-sm text-center text-white">Bio for user 2</p>
        </div>
      </div>
      <div className="card border rounded-xl shadow-sm max-w-xs mx-auto md:mx-0 h-64 bg-black transform -translate-y-16">
        <div className="card-content flex flex-col items-center justify-center p-4">
          <Avatar className="mb-2 w-28 h-28 -mt-8">
            <AvatarImage alt="@user3" src="/placeholder.svg?height=200&width=200" />
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
          <Button className="mb-2 flex items-center justify-center bg-transparent bl_h3" variant="secondary">
            <HeartIcon className="w-4 h-4 text-white" />
          </Button>
          <p className="text-sm text-center text-white">Bio for user 3</p>
        </div>
      </div>
      <div className="card border rounded-xl shadow-sm max-w-xs mx-auto md:mx-0 h-64 bg-black transform -translate-y-16">
        <div className="card-content flex flex-col items-center justify-center p-4">
          <Avatar className="mb-2 w-28 h-28 -mt-8">
            <AvatarImage alt="@user4" src="/placeholder.svg?height=200&width=200" />
            <AvatarFallback>U4</AvatarFallback>
          </Avatar>
          <Button className="mb-2 flex items-center justify-center bg-transparent bl_h4" variant="secondary">
            <HeartIcon className="w-4 h-4 text-white" />
          </Button>
          <p className="text-sm text-center text-white">Bio for user 4</p>
        </div>
      </div>
    </main>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
