import {  Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

const BreadcrumbComponent = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter((segment) => segment);

  const translations = {
    '': 'خانه',
    'aboutUs': 'درباره ما',
    'service': 'خدمات ما',
    'new': 'اخبار',
    'case': 'پروژه‌ها',
    'repertoire': 'آیتم‌ها',
    'contactUs': 'ارتباط با ما',
  };

  return (
    <Container className="p-lg-0 padding-sm">
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb custom-border-bottom pb-3">
          <li className="breadcrumb-item">
            <Link href="/">خانه</Link>
          </li>
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const translatedSegment = translations[segment] || segment;
            return (
              <li className="breadcrumb-item" key={href}>
                <Link href={href}>{translatedSegment}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
};

export default BreadcrumbComponent;
