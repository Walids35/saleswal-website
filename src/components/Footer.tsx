import Image from "next/image"

const Footer = () => {
  return (
    <>
      <div className="bg-my-blue">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto py-10 p-5">
        <div className="flex justify-between">
          <Image src="/logo-variant2.svg" className="w-20" alt="saleswal-logo" width={100} height={50}/>
          <p className="text-white font-light">walid.siala@saleswal.com</p>
        </div>
      </div>
    </div>
    <p className="text-center py-5 bg-slate-50 font-medium">© 2023. All rights reserved by SalesWal LLC.</p>
    </>
  )
}

export default Footer