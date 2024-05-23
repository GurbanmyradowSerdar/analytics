import TimeIcon from "icons/sections/features/time.svg";
import ComputerIcon from "icons/sections/features/computer.svg";
import RocketIcon from "icons/sections/features/rocket.svg";
import PieChartComponent from "components/home/charts/PieChartComponent";
import HorizontalChartComponent from "components/home/charts/HorizontalChartComponent";
import CalendarComponent from "components/home/charts/CalendarComponent";
import FacebookIcon from "icons/social_medias/facebook.svg";
import TwitterIcon from "icons/social_medias/twitter.svg";
import InstagramIcon from "icons/social_medias/instagram.svg";

const navItems = ["Product", "Pricing Plans", "FAQ", "Blog"];
const priceCards = [
  {
    name: "Starter",
    amountOfUsers: 3,
    price: 29,
  },
  {
    name: "Standard",
    amountOfUsers: 20,
    price: 99,
  },
  {
    name: "Premium",
    amountOfUsers: 200,
    price: 299,
  },
];
const sectionsCards = [
  {
    title: "Monitoring 24/7",
    text: "Monitoring 24/7 is a crucial feature provided by analytics companies to ensure constant surveillance of business operations.",
    image: TimeIcon,
  },
  {
    title: "Widget System",
    text: "A widget system is a framework or platform that allows users to easily add and customize small, self-contained applications.",
    image: ComputerIcon,
  },
  {
    title: "Best Performance",
    text: "Best performance refers to achieving optimal results and efficiency in various aspects of a business or system.",
    image: RocketIcon,
  },
];
const chartCards = [
  {
    title: "Automated Reports & Widget Alerts",
    text: "Automated reports are a feature offered by analytics companies that allow businesses to generate and distribute reports automatically. These reports can provide insights on key metrics, performance indicators, and trends.",
    chart: PieChartComponent,
  },
  {
    title: "Fully customizable to address your needs",
    text: "A fully customizable solution is designed to adapt and cater to the unique needs and requirements of a business or individual. It allows users to tailor the features, functionalities, and appearance of the solution according to their specific preferences.",
    chart: HorizontalChartComponent,
  },
  {
    title: "Pre-built Dashboard Templates",
    text: "Pre-built dashboard templates are pre-designed and pre-configured dashboard layouts offered by analytics companies or software providers. These templates serve as a starting point for creating data visualizations and monitoring key metrics.",
    chart: CalendarComponent,
  },
];
const socialMediaIcons: string[] = [FacebookIcon, TwitterIcon, InstagramIcon];

const data = {
  navItems,
  priceCards,
  sectionsCards,
  chartCards,
  socialMediaIcons,
};

export default data;
