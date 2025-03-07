import { useEffect } from 'react';

const SEO = () => {
  useEffect(() => {
    // Update meta tags for SEO
    document.title = "Professional Web Development Services in Gandhinagar & Ahmedabad | Gujarat's Top Developer";
    
    const metaTags = [
      {
        name: 'description',
        content: 'Expert web development services in Gandhinagar, Ahmedabad, and Gujarat. Specializing in modern web solutions for local businesses, startups, and enterprises. Serving GIFT City, Mahatma Mandir, Infocity, SG Highway, and surrounding areas with cutting-edge React development.'
      },
      {
        name: 'keywords',
        content: 'web development, Gandhinagar, Ahmedabad, Gujarat, GIFT City, Infocity, Mahatma Mandir, SG Highway, Vastrapur, Satellite, Bopal, Science City, React developer, frontend development, local business websites, professional web services, IT services Gujarat, website development Gandhinagar, digital solutions Ahmedabad, ecommerce development, business website Gujarat, responsive web design, SEO optimization Gujarat, web consultant Ahmedabad, tech parks Gujarat, industrial web solutions'
      },
      {
        name: 'geo.region',
        content: 'IN-GJ'
      },
      {
        name: 'geo.placename',
        content: 'Gandhinagar, Ahmedabad, Gujarat'
      },
      {
        name: 'geo.position',
        content: '23.2156;72.6369'  // Gandhinagar coordinates
      },
      {
        name: 'ICBM',
        content: '23.2156, 72.6369'
      },
      {
        name: 'robots',
        content: 'index, follow'
      },
      {
        property: 'og:title',
        content: 'Professional Web Development Services in Gandhinagar & Ahmedabad | Gujarat\'s Leading Developer'
      },
      {
        property: 'og:description',
        content: 'Premier web development services for businesses across Gandhinagar, Ahmedabad, and Gujarat. Specializing in modern, responsive websites and web applications. Serving major business hubs including GIFT City, Infocity, and surrounding areas.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:locale',
        content: 'en_IN'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: 'Web Development Services in Gujarat | Gandhinagar & Ahmedabad'
      },
      {
        name: 'twitter:description',
        content: 'Expert web solutions for Gujarat businesses. Serving Gandhinagar, Ahmedabad, GIFT City, and surrounding areas. Modern, responsive, and SEO-optimized websites.'
      }
    ];

    // Remove any existing meta tags
    const existingMetaTags = document.getElementsByTagName('meta');
    Array.from(existingMetaTags).forEach(tag => {
      if (tag.name !== 'viewport' && tag.charset !== 'UTF-8') {
        tag.remove();
      }
    });

    // Add new meta tags
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      Object.entries(tag).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      document.head.appendChild(meta);
    });

    // Add schema markup for local business
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'Your Name - Web Development Services',
      'description': 'Professional web development services in Gandhinagar, Ahmedabad, and Gujarat regions. Specializing in modern web solutions for businesses across GIFT City, Infocity, and major commercial areas.',
      'areaServed': [
        {
          '@type': 'City',
          'name': 'Gandhinagar',
          'containedIn': 'Gujarat'
        },
        {
          '@type': 'City',
          'name': 'Ahmedabad',
          'containedIn': 'Gujarat'
        },
        {
          '@type': 'Place',
          'name': 'GIFT City'
        },
        {
          '@type': 'Place',
          'name': 'Infocity'
        },
        {
          '@type': 'Place',
          'name': 'Mahatma Mandir'
        },
        {
          '@type': 'Place',
          'name': 'SG Highway'
        }
      ],
      'priceRange': '₹₹',
      'address': {
        '@type': 'PostalAddress',
        'addressRegion': 'Gujarat',
        'addressCountry': 'IN'
      },
      'serviceType': [
        'Web Development',
        'Frontend Development',
        'React Development',
        'Responsive Web Design',
        'E-commerce Development',
        'Business Website Development',
        'SEO Optimization'
      ],
      'knowsLanguage': [
        'en',
        'gu',
        'hi'
      ]
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(schema);
    document.head.appendChild(scriptTag);
  }, []);

  return null;
};

export default SEO;
