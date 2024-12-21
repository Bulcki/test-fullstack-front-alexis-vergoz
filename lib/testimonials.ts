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
    // Crée une copie du tableau pour ne pas modifier l'original
    const sortedTestimonials = [...testimonials]
      // Trie par rating de manière décroissante
      .sort((a, b) => {
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }
        // Si même rating, trie par id pour assurer un ordre stable
        return a.id - b.id;
      });
    
    // Retourne les 3 premiers ou moins si le tableau est plus petit
    return sortedTestimonials.slice(0, 3);
  }
  
  // Modifions les données de test pour correspondre aux attentes
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