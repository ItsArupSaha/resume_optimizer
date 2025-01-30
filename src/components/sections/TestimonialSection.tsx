"use client"; // Add this at the top for client-side interactivity

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const TestimonialSection = ({ id }: { id?: string }) => (
  <section
    id={id}
    className="bg-gradient-to-b from-blue-50 to-white py-24 px-4"
  >
    <div className="container max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
        What Our Users Say
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <TestimonialCard
            name="John Doe"
            role="Software Engineer"
            avatarSrc="/avatars/john-doe.jpg"
            testimonial="This tool helped me land my dream job! The ATS score feedback was spot on, and the AI optimization suggestions made my resume stand out."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="Jane Smith"
            role="Product Manager"
            avatarSrc="/avatars/jane-smith.jpg"
            testimonial="I was struggling to get interviews, but after using this service, I got 3 callbacks in a week. Highly recommend it!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="Alex Johnson"
            role="Data Scientist"
            avatarSrc="/avatars/alex-johnson.jpg"
            testimonial="The premium features are worth every penny. The resume customization and download options saved me so much time."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="Sarah Lee"
            role="UX Designer"
            avatarSrc="/avatars/sarah-lee.jpg"
            testimonial="The AI optimization suggestions were incredibly helpful. My resume looks so much more professional now!"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
);

const TestimonialCard = ({
  name,
  role,
  avatarSrc,
  testimonial,
}: {
  name: string;
  role: string;
  avatarSrc: string;
  testimonial: string;
}) => (
  <Card className="p-8 bg-white hover:shadow-xl transition-shadow h-full border-gray-200">
    <div className="flex items-center gap-4 mb-6">
      <Avatar>
        <AvatarImage src={avatarSrc} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
    <p className="text-muted-foreground">{testimonial}</p>
  </Card>
);
