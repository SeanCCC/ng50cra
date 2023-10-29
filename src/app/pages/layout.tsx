import BackgroundAnimation from "@/components/BackgroundAnimation"
import BackgroundMusic from "@/components/BackgroundMusic"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
    return <BackgroundMusic>
      <BackgroundAnimation>
        {children}
      </BackgroundAnimation>
    </BackgroundMusic>
}