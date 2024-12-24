import { truckFast } from "../assets/icons"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  const services = [
    {
      imgURL: truckFast,
      label: "Golden Goodness, Free of Charge",
      subtext: "Enjoy the purest honey without worrying about delivery fees."
    },
    {
      imgURL: truckFast,
      label: "Bee-to-Table Convenience",
      subtext: "Delight in our premium honey, delivered with care and no extra charge."
    },
    {
      imgURL: truckFast,
      label: "Hive to Home, On Us",
      subtext: "Discover the luxury of natural honey with our complimentary delivery."
    },
  ]

  return (
    <section className='flex max-container justify-center flex-wrap gap-9'>
      {
        services.map((service) => <ServiceCard key={service.label} {...service} />)
      }
    </section>
  )
}

export default Services