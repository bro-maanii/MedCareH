
export interface Itestnomial {
    quote: string;
    name: string;
  }

const departments :Itestnomial[]=[
    {
      quote: "I have been to many hospitals, but this one stands out for its compassionate approach and efficient healthcare services. Highly recommended!",
      name: "John Doe",
    },
    {
      quote: "The quality of medical care provided at this hospital is top-notch. From diagnosis to treatment, I felt like I was in capable hands throughout.",
      name: "Sarah Johnson",
    },
    {
      quote: "I'm grateful for the personalized care I received at this hospital. They took the time to understand my needs and provided tailored solutions.",
      name: "Michael Brown",
    }
  ]

export const GET = async () => {
    return new Response(JSON.stringify(departments));
}