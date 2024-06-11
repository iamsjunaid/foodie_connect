import Link from 'next/link';
import Image from 'next/image';

export default function MainHeader() {
  const logoImg = {
    src: '/assets/logo.png',
  };

  return (
    <header>
      <Link href="/">
        <Image
          src={logoImg.src}
          alt="A plate with food on it"
          width={1000}
          height={1000}
        />
        NextLevel Food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
