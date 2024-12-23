export interface ITestimonial {
    id: number;
    personName: string;
    personCompany: string;
    personPicture: string;
    title: string;
    body: string;
    rating: number;
  }
  
  export function getThreeTopTestimonials(testimonials: ITestimonial[]): ITestimonial[] {
   
    const sortedTestimonials = [...testimonials]
      .sort((a, b) => {
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }
        return a.id - b.id;
      });
    return sortedTestimonials.slice(0, 3);
  }

  export const testimonials = [
    {
      id: 1,
      personName: "Wade Wilson",
      personCompany: "CEO at ABC Corporation",
      personPicture: "/assets/img/avatar.png",
      title: "Efficient Collaborating",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      rating: 5
    },
    {
      id: 2,
      personName: "Wade Wilson",
      personCompany: "CEO at ABC Corporation",
      personPicture: "/assets/img/avatar.png",
      title: "Efficient Collaborating",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      rating: 4
    },
    {
      id: 3,
      personName: "Wade Wilson",
      personCompany: "CEO at ABC Corporation",
      personPicture: "/assets/img/avatar.png",
      title: "Efficient Collaborating",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      rating: 3
    }
  ];