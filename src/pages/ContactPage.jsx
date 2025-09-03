import ContactTitle from "../components/ContactTitle.jsx";
import ContactInfo from "../components/ContactInfo.jsx";

function ContactPage() {
  return (
    <div style = {{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <ContactTitle />
      <ContactInfo />
    </div>
  )
}

export default ContactPage;

