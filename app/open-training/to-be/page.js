import WhatsappContact from "@/app/ui/components/Common/WhatsappContact/WhatsappContact"
import Clients from "@/app/ui/components/ToBe/Clients/Clients"
import Cover from "@/app/ui/components/ToBe/Cover/Cover"
import Navbar from "@/app/ui/components/ToBe/Navbar/Navbar"
import styles from '../../ui/components/ToBe/toBe.module.css';
import DatesPayment from "@/app/ui/components/ToBe/DatesPayments/DatesPayment";
import Modules from "@/app/ui/components/ToBe/Modules/Modules";
import Description from "@/app/ui/components/ToBe/Description/Description";
import Data from "@/app/ui/components/ToBe/Data/Data";
import IsForYou from "@/app/ui/components/ToBe/IsForYou/IsForYou";
import ContactRow from "@/app/ui/components/ToBe/ContactRow/ContactRow";
import Brochure from "@/app/ui/components/ToBe/Brochure/Brochure";




const ToBe = () => {


  return (
    <div className={styles.mainSection}>
      <Navbar />
      <Cover />
      <Description />
      <Modules />
      <Data />
      <IsForYou />
      <Brochure />
      <DatesPayment />
      <ContactRow />
      <Clients />
      <WhatsappContact />
    </div>
  )
}

export default ToBe
