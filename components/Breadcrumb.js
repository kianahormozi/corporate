import { Breadcrumb, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';

const BreadcrumbComponent = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter((segment) => segment);

  const translations = {
    '': 'خانه',
    'aboutUs': 'درباره ما',
    'ourServices': 'خدمات ما',
    'news': 'اخبار',
    'cases': 'پروژه‌ها',
    'repertoire': 'آیتم‌ها',
    'contactUs': 'ارتباط با ما'
  };

  return (
    <Container className='p-0 '>
      <nav aria-label="breadcrumb">
        <Breadcrumb className="breadcrumb custom-border-bottom">
          <Breadcrumb.Item href="/">
            <span>خانه</span>
          </Breadcrumb.Item>
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const translatedSegment = translations[segment] || segment;
            return (
              <Breadcrumb.Item key={href} href={href}>
                <span>{translatedSegment}</span>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </nav>
    </Container>
  );
};

export default BreadcrumbComponent;
