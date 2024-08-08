import WhatsappContact from '../ui/components/Home/WhatsappContact/WhatsappContact';
import Clients from '../ui/components/OpenTraining/Clients/Clients';
import ContactRow from '../ui/components/OpenTraining/ContactRow/ContactRow';
import Cover2 from '../ui/components/OpenTraining/Cover2/Cover2';
import HowWeWork from '../ui/components/OpenTraining/HowWeWork/HowWeWork';
import Mission from '../ui/components/OpenTraining/Mission/Mission';
import Reasons from '../ui/components/OpenTraining/Reasons/Reasons';
import Team from '../ui/components/OpenTraining/Team/Team';
import Value from '../ui/components/OpenTraining/Value/Value';
import Workshops from '../ui/components/OpenTraining/Workshops/Workshops';



const InCompany = () => {
  return (
    <div>
      <Cover2 />
      <HowWeWork />
      <Workshops />
      <Reasons />
      <Value />
      <Team />
      <Clients />
      <ContactRow />
      <WhatsappContact />
    </div>
  )
}

export default InCompany
