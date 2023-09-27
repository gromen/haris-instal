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
          <div className="hidden basis-3/12 justify-center md:flex">
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
