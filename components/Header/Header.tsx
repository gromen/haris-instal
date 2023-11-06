import HeaderTop from '@/components/Header/HeaderTop';
import HeaderNavigation from '@/components/Header/HeaderNavigation';
import HeaderContactInfo from '@/components/Header/HeaderContactInfo';
import Logo from '@/components/Header/Logo';

export default function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <HeaderTop />
        <div className="flex">
          <div className="hidden basis-3/12 md:flex md:justify-start">
            <Logo />
          </div>
          <div className="flex grow flex-col divide-y divide-gray-500 bg-white">
            <HeaderContactInfo />
            <HeaderNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
