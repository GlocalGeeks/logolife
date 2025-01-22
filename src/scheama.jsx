const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LogoLife",
    "url": "https://logolife.org/",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-732-421-1475",
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/logolife.org",
      "https://www.instagram.com/logolifeofficial/",
      "https://www.linkedin.com/company/logolife/",
      "https://www.tiktok.com/@logolifeofficial?lang=en"
    ]
  }

  const faqs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can college admissions counseling help my child get into top colleges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our services are designed to highlight your child’s unique strengths and passions. Through personalized strategies from field experts and former admissions officers, essay guidance, extracurricular planning, and passion project development, we help students stand out in the competitive admissions process."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your counseling different from other services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on creating standout applicants, not just checking off application requirements. Our approach includes personalized mentorship from experts in the student’s desired field of study, essay ideation, passion project planning, and a deep dive into the student’s unique interests and goals."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in the strategy session?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "During the strategy session, we assess the student’s current profile, identify their passions, discuss future goals, and provide personalized recommendations on how we can move their profile upwards through their essays, extracurriculars, social validation, and passion projects. Everything is custom built for the student’s unique interests, achievements, and goals. This session sets the foundation for crafting a standout college application."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SAT/ACT preparation as part of your services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our counseling services include guidance on standardized test preparation. We help students create customized study plans, recommend trusted test prep resources, and provide 1:1 tutoring from SAT/ACT specialists. Additionally, we integrate test prep into the broader college admissions strategy, ensuring students focus on both academics and holistic profile development."
        }
      },
      {
        "@type": "Question",
        "name": "Is your service suitable for middle school or early high school students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The earlier we start, the more time we have to build a strong profile. For younger students, we focus on exploring interests, identifying potential passions, and setting the stage for long-term success."
        }
      },
      {
        "@type": "Question",
        "name": "Is it too late to start college admissions counseling if my child is in junior or senior year?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While starting earlier has its benefits, junior and senior years are critical for crafting a strong application. Our team specializes in creating tailored strategies to make the most of the time available. From identifying impactful activities and sharpening personal essays to preparing for interviews and meeting application due dates, we ensure your child maximizes their potential and stands out to top colleges."
        }
      }
    ]
  }


  export { organizationSchema, faqs }