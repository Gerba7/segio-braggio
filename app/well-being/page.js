import WhatsappContact from '../ui/components/Home/WhatsappContact/WhatsappContact';
import Agenda from '../ui/components/OpenTraining/Agenda/Agenda';
import Agenda2 from '../ui/components/OpenTraining/Agenda2/Agenda2';
import Clients from '../ui/components/OpenTraining/Clients/Clients';
import ContactRow from '../ui/components/OpenTraining/ContactRow/ContactRow';
import Cover2 from '../ui/components/OpenTraining/Cover2/Cover2';
import Footer from '../ui/components/OpenTraining/Footer2/Footer2';
import HowWeWork from '../ui/components/OpenTraining/HowWeWork/HowWeWork';
import Navbar2 from '../ui/components/OpenTraining/Navbar2/Navbar2';
import Reasons from '../ui/components/OpenTraining/Reasons/Reasons';
import Team from '../ui/components/OpenTraining/Team/Team';
import Value from '../ui/components/OpenTraining/Value/Value';
import Workshops from '../ui/components/OpenTraining/Workshops/Workshops';
import Workshops2 from '../ui/components/OpenTraining/Workshops2/Workshops2';



const OpenTraining = () => {
  return (
    <div>
      <Navbar2 />
      <Cover2 />
      <HowWeWork />
      <Agenda2 />
      <Workshops2 />
      <Reasons />
      <Value />
      <Team />
      <Clients />
      <ContactRow />
      <WhatsappContact />
      <Footer />
    </div>
  )
}

export default OpenTraining;
