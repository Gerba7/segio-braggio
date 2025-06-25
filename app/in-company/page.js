import Clients from '../ui/components/Home/Clients/Clients';
import ContactRow from '../ui/components/Home/ContactRow/ContactRow';
import Cover from '../ui/components/Home/Cover/Cover';
import HowWeWork from '../ui/components/Home/HowWeWork/HowWeWork';
import Methodology from '../ui/components/Home/Methodology/Methodology';
import Reasons from '../ui/components/Home/Reasons/Reasons';
import Value from '../ui/components/Home/Value/Value';
import WhatsappContact from '../ui/components/Home/WhatsappContact/WhatsappContact';
import styles from '../ui/components/InCompany/inCompany.module.css';

const InCompany = () => {


  return (
    <div>
        <Cover />
        <HowWeWork />
        <Methodology />
        <Reasons />
        <Value />
        <Clients />
        <ContactRow />
        <WhatsappContact />
    </div>
  )
}

export default InCompany
