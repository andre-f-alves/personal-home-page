import Image from "next/image"

type IconProps = {
  icon: string
  size?: number
}

export default function Icon({
  icon,
  size = 24
}: Readonly<IconProps>) {
  return (
    <Image src={`icons/${icon}.svg`} alt="#" width={size} height={size} className={`size-[${size}px]`} />
  )
}
