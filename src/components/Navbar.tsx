import Image from "next/image"

const Navbar = () => {
  return (
   <>
    <div className="py-10">
        <Image src="/logo.svg" alt="logo" width={200} height={100} />
    </div>
   </>
  )
}

export default Navbar