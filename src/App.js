
import './App.css';
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';
import Footer from './components/Footer';
import Header from './components/Header'
import MessagingSection from './components/MessagingSection';
import FAQSection from './Sections/FAQSection';
import PaymentSection from './Sections/PaymentSection';
import { OuterLayout, InnerLayout } from './styles/Layout'

function App() {
  return (
    <div className='App'>
      <Header />
      <OuterLayout>
        <main>
          <CardSection />
          <ChartSection />
          <MessagingSection />
          <PaymentSection />
          <FAQSection />
        </main>
      </OuterLayout>
      <Footer />
    </div>
  );
}

export default App;
