import Clients from '../ui/components/Home/Clients/Clients';
import ContactRow from '../ui/components/Home/ContactRow/ContactRow';
import HowWeWork from '../ui/components/Home/HowWeWork/HowWeWork';
import Methodology from '../ui/components/Home/Methodology/Methodology';
import Reasons from '../ui/components/Home/Reasons/Reasons';
import Types from '../ui/components/Home/Types/Types';
import Value from '../ui/components/Home/Value/Value';
import WhatsappContact from '../ui/components/Home/WhatsappContact/WhatsappContact';
import styles from '../ui/components/InCompany/inCompany.module.css';
import Cover2 from '../ui/components/OpenTraining/Cover2/Cover2';

const InCompany = () => {
  return (
    <div>
      <Cover2 />
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
