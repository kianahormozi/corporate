import dynamic from "next/dynamic";
import Footer from "./footer";
const PageHeader = dynamic(() => import('@/components/Header/PageHeader'));

const AppContent = ({ children, headerImage, headerText }) => {
    return (
        <>
            <PageHeader headerImage={headerImage} headerText={headerText} />
            {children}
            <Footer />
        </>
    );
}

export default AppContent; 
