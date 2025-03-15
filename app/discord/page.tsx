import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DiscordRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://discord.com/users/1027529657249169600');
  }, [router]);

  return (
    <div>
      <p>Redirecting to Discord... Username: sospooky.exe </p>
    </div>
  );
}
