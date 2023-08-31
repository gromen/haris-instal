import HeaderTop from '@/app/components/Header/HeaderTop';
import HeaderNavigation from '@/app/components/Header/HeaderNavigation';
import HeaderContactInfo from '@/app/components/Header/HeaderContactInfo';
import Logo from '@/app/components/Header/Logo';

export default function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <HeaderTop />
        <div className="flex">
          <div className="hidden md:flex justify-center basis-2/12">
            <Logo />
          </div>
          <div className="bg-white flex flex-col grow divide-y divide-gray-500">
            <HeaderContactInfo />
            <HeaderNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
