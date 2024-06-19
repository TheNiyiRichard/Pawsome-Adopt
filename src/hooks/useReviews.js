import reviewPic1 from "../assets/review-pic1.jpg";
import reviewPic2 from "../assets/review-pic2.jpg";
import reviewPic3 from "../assets/review-pic3.jpg";

export function useReviews() {
  const reviews = [
    {
      name: "Jack Nitzsche",
      img: reviewPic1,
      title: "Absolutely wonderful!",
      description:
        "I am very happy to adopt Olivia. I was fortunate enough to find her on the Pet Adoptions website.",
    },
    {
      name: "Mary Slezer",
      img: reviewPic2,
      title: "Great Experience with Bruno",
      description:
        "Can't wait to get playing with this buddy at home. I'm really looking forward to taking care of Bruno.",
    },
    {
      name: "Salem King",
      img: reviewPic3,
      title: "This is my new best friend",
      description:
        "I am very happy to adopt Lulu. I was fortunate enough to find her on the Pet Adoptions website.",
    },
  ];
  return reviews;
}
